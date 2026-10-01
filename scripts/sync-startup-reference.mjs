import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { startupReference } from '../composables/startupReference.js'

const expectedSectionIds = [
  'overview',
  'problem',
  'solution',
  'audience',
  'products',
  'founder',
  'direction',
  'launch',
  'faq'
]

const expectedWordCounts = new Map([
  ['overview-50-words', 50],
  ['overview-100-words', 100],
  ['overview-150-words', 150]
])

const expectedCharacterCounts = new Map([
  ['launch-product-hunt-tagline', 45]
])

function countWords(value) {
  return value.trim().split(/\s+/u).filter(Boolean).length
}

function validateReference(reference) {
  if (reference.name !== 'Goalmatic') throw new Error('Unexpected reference name')
  if (!/^\d{4}-\d{2}-\d{2}$/.test(reference.updated)) throw new Error('Invalid update date')
  if (reference.canonical !== 'https://kromate.dev/startup') throw new Error('Unexpected canonical URL')
  if (reference.sections.map(({ id }) => id).join(',') !== expectedSectionIds.join(',')) {
    throw new Error('Startup reference sections are missing or out of order')
  }

  const ids = new Set()
  for (const section of reference.sections) {
    if (ids.has(section.id)) throw new Error(`Duplicate section id: ${section.id}`)
    ids.add(section.id)
    if (!section.title || !Array.isArray(section.answers) || section.answers.length === 0) {
      throw new Error(`Section ${section.id} must have a title and answers`)
    }
    for (const answer of section.answers) {
      if (!answer.id || !answer.question || !answer.answer) {
        throw new Error(`Section ${section.id} contains an incomplete answer`)
      }
      if (ids.has(answer.id)) throw new Error(`Duplicate answer id: ${answer.id}`)
      ids.add(answer.id)
      const expected = expectedWordCounts.get(answer.id)
      if (expected && countWords(answer.answer) !== expected) {
        throw new Error(`${answer.id} must contain ${expected} words; found ${countWords(answer.answer)}`)
      }
      const expectedCharacters = expectedCharacterCounts.get(answer.id)
      if (expectedCharacters && answer.answer.length !== expectedCharacters) {
        throw new Error(`${answer.id} must contain ${expectedCharacters} characters; found ${answer.answer.length}`)
      }
    }
  }
  for (const id of [...expectedWordCounts.keys(), ...expectedCharacterCounts.keys()]) {
    if (!ids.has(id)) throw new Error(`Missing required answer: ${id}`)
  }
}

function toMarkdown(reference) {
  const lines = [
    `# ${reference.name} startup reference`,
    '',
    `Updated: ${reference.updated}`,
    '',
    `Canonical: ${reference.canonical}`,
    '',
    reference.summary,
    '',
    'Official product links:',
    '',
    '- Website builder: https://goalmatic.site',
    '- Apps: https://goalmatic.io/apps',
    ''
  ]

  for (const section of reference.sections) {
    lines.push(`<a id="${section.id}"></a>`, '', `## ${section.title}`, '')
    if (section.intro) lines.push(section.intro, '')
    for (const answer of section.answers) {
      lines.push(`<a id="${answer.id}"></a>`, '', `### ${answer.question}`, '')
      if (answer.usage) lines.push(`_Usage: ${answer.usage}_`, '')
      lines.push(answer.answer, '')
    }
  }

  return `${lines.join('\n').trim()}\n`
}

validateReference(startupReference)

const scriptDirectory = path.dirname(fileURLToPath(import.meta.url))
const projectRoot = path.resolve(scriptDirectory, '..')
const outputDirectory = path.join(projectRoot, 'public', 'startup')

const outputs = [
  ['goalmatic.json', `${JSON.stringify(startupReference, null, 2)}\n`],
  ['goalmatic.md', toMarkdown(startupReference)]
]

if (process.argv.includes('--check')) {
  for (const [name, expected] of outputs) {
    const actual = await readFile(path.join(outputDirectory, name), 'utf8')
    if (actual !== expected) throw new Error(`${name} is stale; run node scripts/sync-startup-reference.mjs`)
  }
  console.log('Startup reference formats match the page source')
} else {
  await mkdir(outputDirectory, { recursive: true })
  await Promise.all(outputs.map(([name, contents]) => writeFile(path.join(outputDirectory, name), contents, 'utf8')))
  console.log('Synced public/startup/goalmatic.md and public/startup/goalmatic.json')
}
