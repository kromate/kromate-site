import { createApp, defineAsyncComponent } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './.goalmatic/tailwind.css'

const GOALMATIC_APP_SDK_URL = 'https://goalmatic.site/sdk/goalmatic-app-sdk-v1.js?v=1.5.4'
const goalmaticApiKey = String(import.meta.env.VITE_GOALMATIC_API_KEY || '').trim()
const goalmaticApiBase = String(import.meta.env.VITE_GOALMATIC_API_BASE_URL || '').trim()

function showRuntimeNotice(message, kind) {
  const notice = document.createElement('div')
  notice.dataset.goalmaticRuntimeNotice = kind
  notice.setAttribute('role', kind === 'error' ? 'alert' : 'status')
  notice.style.cssText = 'box-sizing:border-box;width:100%;padding:10px 16px;background:' + (kind === 'error' ? '#fef2f2' : '#fffbeb') + ';color:' + (kind === 'error' ? '#991b1b' : '#92400e') + ';font:500 13px/1.45 system-ui,sans-serif;text-align:center'
  notice.textContent = message
  document.body.prepend(notice)
}

function createGoalmaticRuntimeOverlay() {
  if (!document.querySelector('[data-goalmatic-connect-styles]')) {
    const styles = document.createElement('style')
    styles.dataset.goalmaticConnectStyles = ''
    styles.textContent = [
      '.gm-connect-overlay{position:fixed;inset:0;z-index:2147483647;box-sizing:border-box;display:grid;place-items:center;overflow:auto;padding:24px;background:radial-gradient(ellipse at 50% 0%,#eee8ff,transparent 65%),#f7f7fa;color:#201b2b;font:15px/1.5 system-ui,sans-serif}',
      '.gm-connect-card{box-sizing:border-box;width:min(100%,540px);margin:auto;background:#fff;border:1px solid #e7e3ed;border-radius:24px;box-shadow:0 20px 65px #32204c12;overflow:hidden;text-align:left}',
      '.gm-connect-header{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:18px 28px;border-bottom:1px solid #efedf3}',
      '.gm-connect-brand{color:#6028d8;font-size:14px;font-weight:750}.gm-connect-badge{padding:4px 9px;border-radius:6px;background:#f3f0fa;color:#736783;font-size:11px;font-weight:650}',
      '.gm-connect-content{padding:28px}.gm-connect-card h1{margin:0;font-size:28px;line-height:1.2;letter-spacing:-.7px;font-weight:720}.gm-connect-copy{margin:10px 0 24px;color:#696173;line-height:1.6}',
      '.gm-connect-steps{display:grid;gap:18px;list-style:none;padding:0;margin:0 0 28px}.gm-connect-step{display:flex;gap:12px}.gm-connect-number{flex:none;display:grid;place-items:center;width:28px;height:28px;border:1px solid #e7e1f0;border-radius:50%;color:#66439a;font-size:12px;font-weight:700}.gm-connect-step strong{display:block;font-size:14px;font-weight:650}.gm-connect-step p{margin:2px 0 0;color:#7a7184;font-size:13px;line-height:1.5}',
      '.gm-connect-button{box-sizing:border-box;display:flex;width:100%;min-height:48px;align-items:center;justify-content:center;gap:10px;padding:12px 18px;border:0;border-radius:11px;background:#6028d8;color:#fff;font:650 15px/1.4 system-ui,sans-serif;cursor:pointer;transition:background .15s}.gm-connect-button:hover:not(:disabled){background:#5020bb}.gm-connect-button:disabled{background:#eee8f9;color:#624493;cursor:wait}.gm-connect-button:focus-visible,.gm-connect-details summary:focus-visible{outline:3px solid #b9a3f2;outline-offset:3px}',
      '.gm-connect-note{margin:12px 0 0;color:#7a7184;font-size:12px;text-align:center}.gm-connect-status{margin:16px 0 0;color:#5f4b78;font-size:13px;line-height:1.5}.gm-connect-status:empty{display:none}.gm-connect-status[data-error=true]{padding:12px 14px;border:1px solid #f4d5ce;border-radius:10px;background:#fff7f4;color:#983b24}',
      '.gm-connect-details{margin:10px 0 0;color:#74697f;font-size:12px}.gm-connect-details summary{cursor:pointer}.gm-connect-details p{overflow-wrap:anywhere;margin:8px 0 0}.gm-connect-spinner{display:inline-block;box-sizing:border-box;width:17px;height:17px;border:2px solid currentColor;border-right-color:transparent;border-radius:50%;animation:gm-connect-spin .8s linear infinite}.gm-connect-loading{display:flex;align-items:center;gap:10px;color:#736783;font-size:14px}',
      '@keyframes gm-connect-spin{to{transform:rotate(360deg)}}@media(prefers-reduced-motion:reduce){.gm-connect-spinner{animation:none}.gm-connect-button{transition:none}}',
      '@media(max-width:540px){.gm-connect-overlay{padding:16px}.gm-connect-header{padding:16px 22px}.gm-connect-content{padding:24px 22px}.gm-connect-card h1{font-size:25px}.gm-connect-steps{gap:15px;margin-bottom:24px}}',
    ].join('')
    document.head.append(styles)
  }
  const overlay = document.createElement('div')
  overlay.className = 'gm-connect-overlay'
  overlay.setAttribute('role', 'dialog')
  overlay.setAttribute('aria-modal', 'true')
  overlay.setAttribute('aria-labelledby', 'gm-connect-title')
  return overlay
}

function createGoalmaticRuntimeCard() {
  const card = document.createElement('section')
  card.className = 'gm-connect-card'
  const header = document.createElement('header')
  header.className = 'gm-connect-header'
  const brand = document.createElement('span')
  brand.className = 'gm-connect-brand'
  brand.textContent = 'Goalmatic'
  const badge = document.createElement('span')
  badge.className = 'gm-connect-badge'
  badge.textContent = 'Local App'
  header.append(brand, badge)
  card.append(header)
  return card
}

function createGoalmaticRuntimeContent(titleText, description) {
  const content = document.createElement('div')
  content.className = 'gm-connect-content'
  const title = document.createElement('h1')
  title.id = 'gm-connect-title'
  title.textContent = titleText
  const copy = document.createElement('p')
  copy.className = 'gm-connect-copy'
  copy.textContent = description
  content.append(title, copy)
  return content
}

function localAppName() {
  return document.title.replace(' by Goalmatic', '').trim() || 'this App'
}

function showGoalmaticRuntimeLoading() {
  if (document.querySelector('[data-goalmatic-runtime-loading]')) return
  const overlay = createGoalmaticRuntimeOverlay()
  overlay.dataset.goalmaticRuntimeLoading = ''
  const card = createGoalmaticRuntimeCard()
  const content = createGoalmaticRuntimeContent('Opening ' + localAppName(), 'Checking your saved Goalmatic connection.')
  const status = document.createElement('p')
  status.className = 'gm-connect-loading'
  status.setAttribute('role', 'status')
  const spinner = document.createElement('span')
  spinner.className = 'gm-connect-spinner'
  spinner.setAttribute('aria-hidden', 'true')
  status.append(spinner, document.createTextNode('Getting things ready…'))
  content.append(status)
  card.append(content)
  overlay.append(card)
  document.body.append(overlay)
}

function showGoalmaticRuntimeError(message) {
  const overlay = document.querySelector('[data-goalmatic-runtime-loading], [data-goalmatic-sign-in], [data-goalmatic-runtime-error]') || createGoalmaticRuntimeOverlay()
  delete overlay.dataset.goalmaticRuntimeLoading
  delete overlay.dataset.goalmaticSignIn
  overlay.dataset.goalmaticRuntimeError = 'failed'
  overlay.removeAttribute('aria-busy')
  const card = createGoalmaticRuntimeCard()
  const content = createGoalmaticRuntimeContent('Could not open ' + localAppName(), 'Your Goalmatic connection needs another try.')
  const status = document.createElement('p')
  status.className = 'gm-connect-status'
  status.dataset.error = 'true'
  status.setAttribute('role', 'alert')
  status.textContent = message
  const button = document.createElement('button')
  button.type = 'button'
  button.className = 'gm-connect-button'
  button.textContent = 'Try again'
  button.addEventListener('click', () => window.location.reload())
  content.append(button, status)
  card.append(content)
  overlay.replaceChildren(card)
  if (!overlay.isConnected) document.body.append(overlay)
  button.focus()
}

function waitForGoalmaticSignIn(runtime) {
  const overlay = document.querySelector('[data-goalmatic-runtime-loading]') || createGoalmaticRuntimeOverlay()
  if (runtime.context) {
    overlay.remove()
    return Promise.resolve()
  }
  return new Promise((resolve) => {
    let unsubscribe = () => {}
    let completed = false
    let pending = false
    delete overlay.dataset.goalmaticRuntimeLoading
    overlay.dataset.goalmaticSignIn = 'required'
    const card = createGoalmaticRuntimeCard()
    const content = createGoalmaticRuntimeContent('Connect ' + localAppName(), 'Choose a workspace and review access before you continue.')
    const steps = document.createElement('ol')
    steps.className = 'gm-connect-steps'
    const stepCopy = [
      ['Choose your workspace', 'Sign in to your Goalmatic account.'],
      ['Review App access', 'See permissions, connected accounts and credit use.'],
      ['Continue in ' + localAppName(), 'Return here when your connection is ready.'],
    ]
    stepCopy.forEach(([label, description], index) => {
      const item = document.createElement('li')
      item.className = 'gm-connect-step'
      const number = document.createElement('span')
      number.className = 'gm-connect-number'
      number.setAttribute('aria-hidden', 'true')
      number.textContent = String(index + 1)
      const text = document.createElement('div')
      const title = document.createElement('strong')
      title.textContent = label
      const copy = document.createElement('p')
      copy.textContent = description
      text.append(title, copy)
      item.append(number, text)
      steps.append(item)
    })
    const status = document.createElement('p')
    status.className = 'gm-connect-status'
    status.setAttribute('role', 'status')
    status.setAttribute('aria-live', 'polite')
    const details = document.createElement('details')
    details.className = 'gm-connect-details'
    details.hidden = true
    const summary = document.createElement('summary')
    summary.textContent = 'Connection details'
    const errorDetail = document.createElement('p')
    details.append(summary, errorDetail)
    const button = document.createElement('button')
    button.type = 'button'
    button.className = 'gm-connect-button'
    button.textContent = 'Continue with Goalmatic'
    const note = document.createElement('p')
    note.className = 'gm-connect-note'
    note.textContent = 'Opens Goalmatic in a separate window.'
    const finish = () => {
      if (completed) return
      completed = true
      overlay.remove()
      unsubscribe()
      resolve()
    }
    button.addEventListener('click', async () => {
      if (pending || completed) return
      pending = true
      button.disabled = true
      const spinner = document.createElement('span')
      spinner.className = 'gm-connect-spinner'
      spinner.setAttribute('aria-hidden', 'true')
      button.replaceChildren(spinner, document.createTextNode('Waiting for Goalmatic…'))
      status.dataset.error = 'false'
      status.textContent = 'Opening Goalmatic. Keep this page open.'
      note.textContent = 'Close the Goalmatic window to cancel.'
      details.hidden = true
      details.open = false
      try {
        await runtime.signIn()
        finish()
      } catch (error) {
        if (completed) return
        const messages = {
          POPUP_BLOCKED: 'Allow pop-ups for this App, then try again.',
          AUTHORIZATION_CANCELLED: 'Connection cancelled. You can try again when you are ready.',
          AUTHORIZATION_TIMEOUT: 'The connection timed out. Please try again.',
        }
        const errorCode = error?.code === 'AUTHORIZATION_FAILED' && error?.message === 'access_denied' ? 'AUTHORIZATION_CANCELLED' : error?.code
        status.dataset.error = 'true'
        status.textContent = messages[errorCode] || 'We could not finish connecting. Please try again.'
        errorDetail.textContent = error instanceof Error ? error.message : 'Could not connect to Goalmatic.'
        details.hidden = Boolean(messages[errorCode])
        pending = false
        button.disabled = false
        button.textContent = 'Try again'
        note.textContent = 'Opens Goalmatic in a separate window.'
        button.focus()
      }
    })
    content.append(steps, button, note, status, details)
    card.append(content)
    overlay.replaceChildren(card)
    if (!overlay.isConnected) document.body.append(overlay)
    button.focus()
    unsubscribe = runtime.subscribe((state) => {
      if (state.status === 'ready') finish()
      else if (pending && state.status === 'authorizing') status.textContent = 'Choose your workspace and review access in the Goalmatic window.'
    })
    if (completed) unsubscribe()
  })
}

async function waitForGoalmaticRuntimeReady(goalmaticRuntime) {
  let timeoutId = 0
  try {
    await Promise.race([
      (async () => await goalmaticRuntime.ready)(),
      new Promise((_, reject) => {
        timeoutId = window.setTimeout(() => reject(new Error('Goalmatic is taking longer than expected. Check your connection and try again.')), 15000)
      }),
    ])
  } finally {
    window.clearTimeout(timeoutId)
  }
}

async function configureGoalmaticRuntime() {
  if (window.GoalmaticApp?.execute && window.GoalmaticAuth?.config?.installationAuth) return null
  if (!goalmaticApiKey) {
    showRuntimeNotice('Offline preview. Goalmatic account data and credits are not connected.', 'offline')
    return null
  }
  showGoalmaticRuntimeLoading()
  const { initializeGoalmatic } = await import(/* @vite-ignore */ GOALMATIC_APP_SDK_URL)
  if (typeof initializeGoalmatic !== 'function') throw new Error('The Goalmatic SDK is missing initializeGoalmatic')
  return initializeGoalmatic(goalmaticApiBase
    ? { apiKey: goalmaticApiKey, apiBase: goalmaticApiBase }
    : { apiKey: goalmaticApiKey })
}

async function settleGoalmaticRuntime(goalmaticRuntime) {
  if (!goalmaticRuntime) return true
  try {
    await waitForGoalmaticRuntimeReady(goalmaticRuntime)
    await waitForGoalmaticSignIn(goalmaticRuntime)
    return true
  } catch (error) {
    showGoalmaticRuntimeError(error instanceof Error ? error.message : 'Goalmatic could not restore this App connection.')
    return false
  }
}

const pageModules = import.meta.glob('./pages/**/*.vue')
const componentModules = import.meta.glob('./components/**/*.vue')

function routeFromFile(file) {
  const segments = file.replace(/^\.\/pages\//, '').replace(/\.vue$/, '').split('/')
  const route = segments.flatMap((segment) => {
    if (/^index$/i.test(segment)) return []
    const catchAll = segment.match(/^\[\.\.\.(.+)\]$/)
    if (catchAll) return [':' + catchAll[1] + '(.*)*']
    const dynamic = segment.match(/^\[(.+)\]$/)
    if (dynamic) return [':' + dynamic[1]]
    return [segment.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase()]
  }).join('/')
  return '/' + route
}

const routes = Object.entries(pageModules).map(([source, load]) => ({ path: routeFromFile(source), component: load }))
if (routes.some((route) => route.path === '/')) routes.push({ path: '/:pathMatch(.*)*', redirect: '/' })
const router = createRouter({ history: createWebHistory(), routes })
async function start() {
  let goalmaticRuntime = null
  try {
    goalmaticRuntime = await configureGoalmaticRuntime()
  } catch (error) {
    showGoalmaticRuntimeError(error instanceof Error ? error.message : 'Goalmatic runtime could not start. Check VITE_GOALMATIC_API_KEY and its allowed origin.')
    return
  }
  if (!await settleGoalmaticRuntime(goalmaticRuntime)) return
  const app = createApp(App)
for (const [source, load] of Object.entries(componentModules)) {
  const name = source.split('/').pop().replace(/\.vue$/, '')
  app.component(name, defineAsyncComponent(load))
}
  app.use(router)
  app.mount('#app')
}

void start()
