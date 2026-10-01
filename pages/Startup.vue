<template>
  <div class="startup-reference">
    <a class="skip-link" href="#reference-main" @click.stop.prevent="navigate('reference-main')">Skip to answers</a>

    <header class="reference-header">
      <a class="brand" href="#top" @click.stop.prevent="navigate('top')">
        <span class="brand-mark" aria-hidden="true">G</span>
        <span>Goalmatic <small>Startup reference</small></span>
      </a>
      <nav class="header-links" aria-label="Reference formats">
        <a href="https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.md" target="_blank" rel="noopener noreferrer">Markdown <span aria-hidden="true">↗</span></a>
        <a href="https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.json" target="_blank" rel="noopener noreferrer">JSON <span aria-hidden="true">↗</span></a>
      </nav>
    </header>

    <section id="top" class="reference-intro" aria-labelledby="reference-title">
      <p class="eyebrow">Anthony Akpan's startup</p>
      <h1 id="reference-title">Goalmatic, in plain words.</h1>
      <p class="summary">{{ startupReference.summary }}</p>
      <p class="intro-note">A reference for questions, launches and applications. Read an answer, copy it, or send a link to the exact question.</p>
      <details class="plain-file-urls">
        <summary>Plain-file URLs for AI agents</summary>
        <p>Markdown: https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.md</p>
        <p>JSON: https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.json</p>
      </details>
      <div class="intro-actions">
        <button type="button" class="primary-button" @click="copyText(startupReference.summary, 'short-description')">{{ copied === 'short-description' ? 'Copied' : 'Copy short description' }}</button>
        <span class="updated">Public reference · Updated {{ startupReference.updated }}</span>
      </div>
      <textarea v-if="fallback?.id === 'short-description'" id="copy-short-description" class="copy-fallback" readonly :value="fallback.text" aria-label="Short description to select and copy"></textarea>
    </section>

    <div id="reference-main" class="reference-layout" tabindex="-1">
      <aside class="reference-index" aria-label="Section index">
        <p class="index-label">On this page</p>
        <nav class="desktop-index" aria-label="Startup topics">
          <a v-for="(section, index) in startupReference.sections" :key="section.id" :href="'#' + section.id" @click.stop.prevent="navigate(section.id)">
            <span>{{ String(index + 1).padStart(2, '0') }}</span>{{ section.title }}
          </a>
          <a href="#agent-files" @click.stop.prevent="navigate('agent-files')"><span>↗</span>For agents and bots</a>
        </nav>
        <details ref="mobileIndex" class="mobile-index">
          <summary>Jump to a section</summary>
          <nav aria-label="Startup topics on mobile">
            <a v-for="section in startupReference.sections" :key="section.id" :href="'#' + section.id" @click.stop.prevent="navigate(section.id)">{{ section.title }}</a>
            <a href="#agent-files" @click.stop.prevent="navigate('agent-files')">For agents and bots</a>
          </nav>
        </details>
      </aside>

      <div class="answer-bank">
        <div class="search-panel">
          <label for="answer-search">Find an answer</label>
          <div class="search-row">
            <input id="answer-search" v-model="query" type="search" placeholder="Try founder, bookings or WhatsApp" autocomplete="off" aria-describedby="search-help">
            <button v-if="query" type="button" class="text-button" @click="query = ''">Clear</button>
          </div>
          <p id="search-help" role="status">{{ query ? `${visibleAnswerCount} matching answers` : 'Browse the topics, or search the reference.' }}</p>
        </div>

        <p v-if="!visibleSections.length" class="empty-result" role="status">No answers match that search. Clear it to see every topic.</p>

        <section v-for="section in visibleSections" :id="section.id" :key="section.id" class="reference-section" :aria-labelledby="section.id + '-title'">
          <div class="section-heading">
            <p class="eyebrow">{{ sectionNumber(section.id) }} / Reference</p>
            <h2 :id="section.id + '-title'">{{ section.title }}</h2>
            <p v-if="section.intro" class="section-intro">{{ section.intro }}</p>
          </div>
          <figure v-if="section.id === 'founder'" class="founder-photo">
            <img src="https://kromate.dev/images/anthony-akpan.png" alt="Anthony Akpan, solo founder of Goalmatic" width="512" height="512" loading="lazy">
            <figcaption>Anthony Akpan · Lagos, Nigeria</figcaption>
          </figure>
          <article v-for="answer in section.answers" :key="answer.id" class="answer-card">
            <div class="answer-heading">
              <h3 :id="answer.id">{{ answer.question }}</h3>
              <a :href="'#' + answer.id" class="permalink" :aria-label="'Link to ' + answer.question" @click.stop.prevent="navigate(answer.id)">#</a>
            </div>
            <p v-if="answer.usage" class="answer-usage">{{ answer.usage }}</p>
            <p class="answer-text">{{ answer.answer }}</p>
            <div class="answer-actions">
              <button type="button" class="copy-button" @click="copyText(answer.answer, answer.id)">{{ copied === answer.id ? 'Copied' : 'Copy answer' }}</button>
              <button type="button" class="text-button" @click="copyText(answerUrl(answer.id), answer.id + '-link')">{{ copied === answer.id + '-link' ? 'Link copied' : 'Copy link' }}</button>
            </div>
            <textarea v-if="fallback?.id === answer.id || fallback?.id === answer.id + '-link'" :id="'copy-' + fallback.id" class="copy-fallback" readonly :value="fallback.text" aria-label="Text to select and copy"></textarea>
          </article>
        </section>

        <section id="agent-files" class="reference-section agent-section" aria-labelledby="agent-title">
          <p class="eyebrow">For agents and bots</p>
          <h2 id="agent-title">The same answers, in plain files.</h2>
          <p>These public files contain the same reference text as this page. Use them when preparing an application or launch. Keep current features and planned work distinct, and ask me for any answer the reference does not provide.</p>
          <div class="file-links">
            <a href="https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.md" target="_blank" rel="noopener noreferrer">Read the Markdown <span aria-hidden="true">↗</span></a>
            <a href="https://raw.githubusercontent.com/kromate/kromate-site/main/public/startup/goalmatic.json" target="_blank" rel="noopener noreferrer">Read the JSON <span aria-hidden="true">↗</span></a>
          </div>
          <p class="file-note">The files are hosted in my public portfolio repository. They contain public product and founder information. Financial, legal and fundraising answers need a separate conversation.</p>
        </section>

        <footer class="reference-footer">
          <p>Explore the products</p>
          <a href="https://goalmatic.site" target="_blank" rel="noopener noreferrer">Goalmatic Builder ↗</a>
          <a href="https://goalmatic.io/apps" target="_blank" rel="noopener noreferrer">Goalmatic Apps ↗</a>
          <a href="/">← Anthony's portfolio</a>
        </footer>
      </div>
    </div>
    <p class="copy-status" role="status" aria-live="polite">{{ copyStatus }}</p>
  </div>
</template>

<script setup>
import { computed, nextTick, onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { startupReference } from '../composables/startupReference.js'

const route = useRoute()
const router = useRouter()
const query = ref('')
const copied = ref('')
const copyStatus = ref('')
const fallback = ref(null)
const mobileIndex = ref(null)
let hashScrollTimer
let copyTimer
let disposed = false

function normalize(text) { return text.toLowerCase().replace(/\s+/g, ' ').trim() }
const visibleSections = computed(() => {
  const search = normalize(query.value)
  if (!search) return startupReference.sections
  return startupReference.sections.map(section => ({
    ...section,
    answers: section.answers.filter(answer => normalize(`${section.title} ${answer.question} ${answer.answer} ${answer.usage || ''}`).includes(search))
  })).filter(section => section.answers.length)
})
const visibleAnswerCount = computed(() => visibleSections.value.reduce((count, section) => count + section.answers.length, 0))
function sectionNumber(id) { return String(startupReference.sections.findIndex(section => section.id === id) + 1).padStart(2, '0') }
function answerUrl(id) { return `${startupReference.canonical}#${id}` }

function alignHashSection() {
  clearTimeout(hashScrollTimer)
  if (!route.hash) return
  // The hosted router scrolls after 300ms without applying section offsets.
  hashScrollTimer = setTimeout(() => {
    document.getElementById(route.hash.slice(1))?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, 400)
}

async function navigate(id) {
  query.value = ''
  if (mobileIndex.value) mobileIndex.value.open = false
  await nextTick()
  await router.push({ hash: '#' + id })
  document.getElementById(id)?.scrollIntoView({ behavior: 'instant', block: 'start' })
  if (id === 'reference-main') document.getElementById(id)?.focus({ preventScroll: true })
  alignHashSection()
}

async function copyText(text, id) {
  clearTimeout(copyTimer)
  copied.value = ''
  fallback.value = null
  try {
    await navigator.clipboard.writeText(text)
    copied.value = id
    copyStatus.value = id.endsWith('-link') ? 'Question link copied.' : 'Answer copied.'
    copyTimer = setTimeout(() => { copied.value = ''; copyStatus.value = '' }, 2500)
  } catch {
    fallback.value = { id, text }
    copyStatus.value = 'Select and copy the text below with Ctrl+C or Command+C.'
    await nextTick()
    document.getElementById('copy-' + id)?.select()
  }
}

watch(() => route.hash, async () => {
  query.value = ''
  await nextTick()
  alignHashSection()
})
onMounted(async () => {
  if (!route.hash) window.scrollTo({ top: 0, behavior: 'instant' })
  await nextTick()
  await document.fonts.ready
  if (!disposed && route.hash) alignHashSection()
})
onBeforeUnmount(() => { disposed = true; clearTimeout(hashScrollTimer); clearTimeout(copyTimer) })
</script>

<style scoped>
.startup-reference { --text: #ccd6f6; --muted: #a7adc4; --orange: #ff8c00; --panel: #28232d; width: 100%; max-width: 1180px; padding: 0 clamp(.8rem, 2vw, 1.5rem) 4rem; margin: auto; color: var(--text); }
.startup-reference * { box-sizing: border-box; }
:global(body:has(.startup-reference)) { overflow-x: clip; }
.startup-reference section { width: 100%; max-width: none; min-height: 0; margin: 0; padding: 0; }
.startup-reference [id] { scroll-margin-top: 8rem; }
a { color: var(--orange); text-underline-offset: 4px; }
a:focus-visible, button:focus-visible, input:focus-visible, summary:focus-visible, textarea:focus-visible { outline: 2px solid var(--text); outline-offset: 4px; }
button, input, textarea { font: inherit; }
button { cursor: pointer; }
.skip-link { position: fixed; top: .75rem; left: 50%; z-index: 100; transform: translate(-50%, -180%); padding: .8rem 1rem; border-radius: 4px; background: var(--orange); color: #211e25; font-weight: 700; }
.skip-link:focus { transform: translate(-50%, 0); }
.reference-header { position: sticky; top: 0; z-index: 10; display: flex; justify-content: space-between; align-items: center; gap: 1.5rem; min-height: 5.5rem; padding: 1rem 0; border-bottom: 1px solid #ccd6f629; background: #211e25; }
.brand { display: flex; align-items: center; gap: .7rem; color: var(--text); font-family: 'Chakra Petch', sans-serif; font-weight: 700; text-decoration: none; }
.brand small { display: block; margin-top: .15rem; color: var(--muted); font-family: 'Roboto', sans-serif; font-size: .7rem; font-weight: 400; }
.brand-mark { display: grid; place-items: center; flex: none; width: 2.4rem; height: 2.4rem; border-radius: .5rem; background: var(--orange); color: #211e25; font-size: 1.2rem; }
.header-links { display: flex; gap: 1.2rem; font-size: .8rem; }
.reference-intro { padding: clamp(3rem, 6vw, 5rem) 0 !important; border-bottom: 1px solid #ccd6f620; }
.eyebrow, .index-label { margin: 0; color: var(--orange); font-size: .72rem; font-weight: 700; letter-spacing: .13em; line-height: 1.5; text-transform: uppercase; }
h1 { margin: .9rem 0 1.3rem; font-size: clamp(2.6rem, 5vw, 4.5rem); line-height: 1.05; letter-spacing: -.04em; }
.summary { max-width: 43rem; color: var(--text); font-size: clamp(1.1rem, 1.8vw, 1.35rem); line-height: 1.65; margin: 0; }
.intro-note { max-width: 40rem; margin: 1.2rem 0 0; color: var(--muted); font-size: .95rem; line-height: 1.75; }
.plain-file-urls { max-width: 43rem; margin-top: 1rem; color: var(--muted); font-size: .78rem; line-height: 1.7; }
.plain-file-urls summary { cursor: pointer; min-height: 44px; display: list-item; padding: .7rem 0; }
.plain-file-urls p { overflow-wrap: anywhere; user-select: text; }
.intro-actions { display: flex; flex-wrap: wrap; align-items: center; gap: 1.3rem; margin-top: 1.7rem; }
.primary-button { min-height: 44px; padding: .75rem 1rem; border: 1px solid var(--orange); border-radius: .35rem; background: var(--orange); color: #211e25; font-size: .88rem; font-weight: 700; }
.updated { color: var(--muted); font-size: .72rem; }
.reference-layout { display: grid; grid-template-columns: 10.8rem minmax(0, 1fr); gap: clamp(2rem, 4vw, 4rem); padding-top: 3rem; }
.reference-index { align-self: start; position: sticky; top: 7.5rem; }
.index-label { margin-bottom: 1rem; color: var(--muted); font-size: .65rem; }
.desktop-index { display: flex; flex-direction: column; gap: .15rem; }
.desktop-index a { display: flex; align-items: baseline; gap: .7rem; min-height: 44px; padding: .65rem 0; color: var(--muted); font-size: .82rem; text-decoration: none; line-height: 1.4; }
.desktop-index a:hover { color: var(--orange); }
.desktop-index span { color: var(--orange); font-size: .62rem; min-width: 1.1rem; }
.mobile-index { display: none; }
.answer-bank { min-width: 0; }
.search-panel { margin: 0 0 3.3rem; }
.search-panel label { display: block; margin-bottom: .8rem; font-family: 'Chakra Petch', sans-serif; font-size: 1.15rem; font-weight: 700; }
.search-row { display: flex; align-items: center; gap: .8rem; }
.search-row input { width: 100%; min-width: 0; min-height: 48px; padding: .8rem 1rem; border: 1px solid #8892b063; border-radius: .45rem; background: var(--panel); color: var(--text); font-size: .9rem; }
.search-row input::placeholder { color: #a7adc4; opacity: 1; }
.search-panel p { margin: .7rem 0 0; color: var(--muted); font-size: .75rem; }
.reference-section { padding-top: 1.8rem !important; margin-bottom: 3.7rem !important; border-top: 1px solid #ccd6f620; }
h2 { margin: .75rem 0 1rem; font-size: clamp(1.8rem, 3vw, 2.5rem); letter-spacing: -.035em; line-height: 1.15; }
.section-intro { max-width: 42rem; margin: 0 0 1.5rem; color: var(--muted); font-size: .9rem; line-height: 1.75; }
.answer-card { padding: clamp(1.2rem, 2.7vw, 1.8rem); margin-top: 1rem; border: 1px solid #ccd6f622; border-radius: .6rem; background: var(--panel); }
.answer-heading { display: flex; align-items: baseline; justify-content: space-between; gap: .8rem; }
h3 { margin: 0; color: var(--text); font-size: 1.1rem; line-height: 1.45; }
.permalink { flex: none; min-width: 32px; text-align: center; font-size: 1rem; text-decoration: none; }
.answer-usage { margin: .6rem 0 0; color: #ffb357; font-size: .73rem; line-height: 1.6; }
.answer-text { margin: 1rem 0 0; color: #b8bfd5; font-size: .92rem; line-height: 1.8; white-space: pre-line; overflow-wrap: anywhere; }
.answer-actions { display: flex; flex-wrap: wrap; align-items: center; gap: .9rem; margin-top: 1.1rem; }
.copy-button { min-height: 44px; padding: .65rem .9rem; border: 1px solid #ff8c006e; border-radius: .3rem; color: var(--orange); background: #ff8c0010; font-size: .78rem; font-weight: 600; }
.copy-button:hover { background: #ff8c0028; }
.text-button { min-height: 44px; padding: .6rem .3rem; border: 0; background: transparent; color: var(--muted); font-size: .78rem; text-decoration: underline; text-underline-offset: 4px; }
.text-button:hover { color: var(--text); }
.copy-fallback { width: 100%; min-height: 8rem; margin-top: 1rem; padding: .8rem; border: 1px solid var(--orange); background: #211e25; color: var(--text); font-size: .85rem; line-height: 1.65; }
.founder-photo { display: flex; align-items: center; gap: 1rem; margin: 1.2rem 0; }
.founder-photo img { width: 64px; height: 64px; object-fit: cover; border-radius: 50%; }
.founder-photo figcaption { color: var(--muted); font-size: .8rem; }
.agent-section > p:not(.eyebrow) { color: var(--muted); line-height: 1.8; font-size: .92rem; }
.file-links { display: flex; flex-wrap: wrap; gap: 1.4rem; margin: 1.5rem 0; font-size: .9rem; }
.agent-section .file-note { font-size: .78rem !important; }
.reference-footer { display: flex; flex-wrap: wrap; align-items: center; gap: .7rem 1.3rem; border-top: 1px solid #ccd6f620; padding: 1.5rem 0; font-size: .78rem; }
.reference-footer p { width: 100%; margin: 0 0 .5rem; color: var(--muted); }
.copy-status { position: fixed; bottom: 1.2rem; left: 50%; transform: translateX(-50%); z-index: 50; max-width: min(32rem, calc(100% - 2rem)); margin: 0; color: #211e25; background: var(--orange); border-radius: .45rem; padding: .8rem 1rem; font-size: .85rem; text-align: center; }
.copy-status:empty { display: none; }
.empty-result { color: var(--muted); line-height: 1.7; }
@media (max-width: 1000px) { .reference-layout { grid-template-columns: 9rem minmax(0, 1fr); gap: 1.6rem; } }
@media (max-width: 767px) {
  .reference-header { top: var(--mobile-nav-height); margin-top: var(--mobile-nav-height); min-height: 5rem; gap: 1rem; }
  .header-links { gap: .8rem; font-size: .7rem; }
  .startup-reference [id] { scroll-margin-top: 12rem; }
  .reference-intro { padding: 2.5rem 0 !important; }
  h1 { font-size: clamp(2.4rem, 10vw, 3.5rem); }
  .reference-layout { display: block; padding-top: 1.8rem; }
  .reference-index { position: static; margin-bottom: 1.7rem; }
  .index-label, .desktop-index { display: none; }
  .mobile-index { display: block; border: 1px solid #ccd6f62b; border-radius: .4rem; background: var(--panel); }
  .mobile-index summary { padding: .9rem 1rem; color: var(--text); font-size: .88rem; cursor: pointer; }
  .mobile-index nav { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 0 .7rem .8rem; gap: .2rem .6rem; }
  .mobile-index a { min-height: 44px; padding: .6rem .3rem; font-size: .78rem; line-height: 1.6; }
  .search-panel { margin-bottom: 2rem; }
  .reference-section { margin-bottom: 2.6rem !important; }
  .answer-card { padding: 1.1rem; }
}
@media (prefers-reduced-motion: reduce) { :global(html:has(.startup-reference)) { scroll-behavior: auto; } }
</style>
