<template>
  <div class="startup-page">
    <a class="skip-link" href="#startup-main">Skip to main content</a>

    <header class="page-header" aria-label="Goalmatic introduction">
      <a class="wordmark chakra" href="#top" aria-label="Goalmatic, back to top">
        <span class="wordmark-mark" aria-hidden="true">G</span>
        Goalmatic
      </a>
      <nav class="section-nav" aria-label="On this page">
        <a href="#how-it-works">How it works</a>
        <a href="#apps">Apps</a>
        <a href="#founder">Founder</a>
        <a href="#direction">Direction</a>
      </nav>
    </header>

    <div id="startup-main" tabindex="-1">
      <section id="top" class="hero" aria-labelledby="startup-title">
        <div class="hero-copy">
          <p class="eyebrow">A company I am building in Lagos</p>
          <h1 id="startup-title">Build your business website. Add simple apps for everyday work.</h1>
          <p class="hero-positioning">Goalmatic helps small businesses build their website and run everyday work through simple Apps, all on one Goalmatic account.</p>
          <p class="hero-detail">Start with a site for what you sell. Then add a booking link, a product store or a social planner when the job calls for it.</p>
          <div class="hero-actions" aria-label="Try Goalmatic">
            <a class="button button-primary" href="https://goalmatic.site" target="_blank" rel="noopener noreferrer">Build a website <span aria-hidden="true">↗</span></a>
            <a class="button button-secondary" href="https://goalmatic.io/apps" target="_blank" rel="noopener noreferrer">Browse the Apps <span aria-hidden="true">↗</span></a>
          </div>
          <p class="hero-detail">Building with AI and some App actions use credits. Check the cost in the product before you continue.</p>
        </div>

        <div class="product-map" role="img" aria-label="Conceptual diagram showing a business website and focused Apps connected to one Goalmatic account">
          <div class="map-label">How the product fits together</div>
          <div class="map-account">
            <span class="map-account-mark chakra" aria-hidden="true">G</span>
            <span><strong>One Goalmatic account</strong><small>Shared sign-in and credits</small></span>
          </div>
          <div class="map-line" aria-hidden="true"></div>
          <div class="map-products">
            <div class="map-product map-product-featured">
              <span class="map-number">01</span>
              <strong>Your website</strong>
              <small>The place customers start</small>
            </div>
            <div class="map-product">
              <span class="map-number">02</span>
              <strong>Focused Apps</strong>
              <small>One App for each job</small>
            </div>
          </div>
          <p class="map-note">Conceptual product map, not a product screenshot.</p>
        </div>
      </section>

      <section id="how-it-works" class="content-section" aria-labelledby="how-title">
        <div class="section-heading">
          <p class="section-index">01 / How it works</p>
          <h2 id="how-title">Your website first. Focused tools when you need them.</h2>
          <p>Goalmatic is for owner-run businesses that sell products online and people who sell individual services or coaching appointments.</p>
        </div>

        <ol class="steps">
          <li>
            <span class="step-number">01</span>
            <h3>Describe the business</h3>
            <p>Tell Goalmatic Builder what you sell, your hours, prices and contact details. It drafts a website for you to review.</p>
          </li>
          <li>
            <span class="step-number">02</span>
            <h3>Check it and publish</h3>
            <p>Edit the result, then publish on a free goalmatic.site address or connect a domain you already own.</p>
          </li>
          <li>
            <span class="step-number">03</span>
            <h3>Add the next job</h3>
            <p>Choose an App for bookings, products or social posts. Each App gives you a finished tool instead of an empty workflow editor.</p>
          </li>
        </ol>

        <aside class="account-note" aria-labelledby="account-note-title">
          <div>
            <p class="note-kicker">One account</p>
            <h3 id="account-note-title">Shared access does not mean automatic record syncing.</h3>
          </div>
          <p>Your website and Apps use the same Goalmatic sign-in, workspace and credit balance. Each App keeps its own records. You decide if it should use a Table you already have when you install it.</p>
        </aside>
      </section>

      <section id="apps" class="content-section apps-section" aria-labelledby="apps-title">
        <div class="section-heading section-heading-split">
          <div>
            <p class="section-index">02 / Apps</p>
            <h2 id="apps-title">One clear job per App.</h2>
          </div>
          <p>These are working Goalmatic Apps today. The limits are part of the product story, so they sit beside what each App can do.</p>
        </div>

        <div class="app-grid">
          <article v-for="app in apps" :key="app.name" class="app-card">
            <div class="app-card-top">
              <span class="app-icon" aria-hidden="true">{{ app.icon }}</span>
              <span class="app-status">Available now</span>
            </div>
            <p class="app-for">{{ app.for }}</p>
            <h3>{{ app.name }}</h3>
            <p class="app-subtitle">{{ app.subtitle }}</p>
            <ul class="capability-list" :aria-label="`${app.name} capabilities`">
              <li v-for="capability in app.capabilities" :key="capability">{{ capability }}</li>
            </ul>
            <div class="limits">
              <p>Current limits</p>
              <span>{{ app.limits }}</span>
            </div>
          </article>
        </div>
      </section>

      <section id="founder" class="content-section founder-section" aria-labelledby="founder-title">
        <div class="founder-portrait-wrap">
          <img src="https://kromate.dev/images/anthony-akpan.png" alt="Anthony Akpan, founder of Goalmatic" class="founder-portrait">
          <p class="portrait-caption"><span>Anthony Akpan</span> Solo founder, Lagos</p>
        </div>
        <div class="founder-copy">
          <p class="section-index">03 / Founder</p>
          <h2 id="founder-title">The question that changed what I was building.</h2>
          <p class="founder-lead">I started with the building blocks: AI agents, Workflows, Tables, integrations and a website builder.</p>
          <p>But people kept asking, "How do I use workflows?" They opened an empty editor and did not know what to do next. That question clarified the problem for me.</p>
          <blockquote>A small business owner needs a finished tool for a job. Take bookings. Put products online. Plan the next post.</blockquote>
          <p>So I built Goalmatic Apps. Each one does one job on the same account. The website is the front door because almost every business needs one, and it is where Goalmatic found its first paying customers.</p>
        </div>
      </section>

      <section id="direction" class="content-section direction-section" aria-labelledby="direction-title">
        <div class="section-heading direction-heading">
          <p class="section-index">04 / Direction</p>
          <h2 id="direction-title">An AI back office for WhatsApp-first businesses.</h2>
          <p>This is the direction I am building toward for owner-run businesses in Nigeria. Parts of it work today. The rest is labelled plainly.</p>
        </div>

        <div class="direction-grid">
          <article>
            <span class="state state-live">Live today</span>
            <h3>Website enquiries are saved</h3>
            <p>A customer can submit a form on your website, and Goalmatic saves that enquiry to a Table in your account.</p>
          </article>
          <article>
            <span class="state state-next">Next to build</span>
            <h3>Owner alerts on WhatsApp</h3>
            <p>The next step is a default flow that sends the business owner a WhatsApp alert when a new website enquiry arrives.</p>
          </article>
          <article>
            <span class="state state-planned">Planned for version 2</span>
            <h3>AI replies to customers</h3>
            <p>Customer-facing AI replies from the business's own WhatsApp number are planned. They are not part of the product today.</p>
          </article>
        </div>
      </section>

      <section class="closing-section" aria-labelledby="closing-title">
        <p class="section-index">Start here</p>
        <h2 id="closing-title">Build the website. Add the next tool when the work asks for it.</h2>
        <div class="hero-actions closing-actions">
          <a class="button button-primary" href="https://goalmatic.site" target="_blank" rel="noopener noreferrer">Build a website <span aria-hidden="true">↗</span></a>
          <a class="button button-secondary" href="https://goalmatic.io/apps" target="_blank" rel="noopener noreferrer">Browse the Apps <span aria-hidden="true">↗</span></a>
        </div>
        <a class="portfolio-link" href="/"><span aria-hidden="true">←</span> Return to Anthony's portfolio</a>
      </section>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'

onMounted(() => {
  if (!window.location.hash) window.scrollTo({ top: 0, behavior: 'instant' })
})

const apps = [
  {
    icon: 'B',
    name: 'Bookins by Goalmatic',
    subtitle: 'Booking link and individual appointments',
    for: 'For solo service providers and coaches',
    capabilities: [
      'Share one link with your services, prices and open times.',
      'Set weekly hours, minimum notice and how far ahead people can book.',
      'Keep upcoming, past and cancelled appointments in one list.',
      'Check a slot again before confirming to prevent double booking.'
    ],
    limits: 'Individual appointments only. No classes, group or multi-staff booking. Payments, reminders, email confirmations, guest cancellation and calendar sync are not available yet.'
  },
  {
    icon: 'S',
    name: 'Store Studio by Goalmatic',
    subtitle: 'Your products on one store link',
    for: 'For product sellers on WhatsApp and Instagram',
    capabilities: [
      'Show products, variants and prices on a public link.',
      'Let customers browse and place an order without an account.',
      'Manage orders, stock, customers and discounts from your phone.',
      'Offer pickup or delivery for each order.'
    ],
    limits: 'Online payments and card checkout are not available yet. Customers arrange payment with you for pickup or delivery.'
  },
  {
    icon: 'SS',
    name: 'Social Studio by Goalmatic',
    subtitle: 'Plan and publish your posts',
    for: 'For owners who manage their own social presence',
    capabilities: [
      'Plan drafts beside a content calendar.',
      'Adjust one post for the connected accounts you choose.',
      'Publish now or schedule up to 30 days ahead.',
      'See delivery status, errors and retry options by destination.'
    ],
    limits: 'Network and account permissions vary. Some posts must be finished on the social platform, and posting is not guaranteed on every network.'
  }
]
</script>

<style scoped>
.startup-page {
  --page-bg: #211e25;
  --panel: #28232d;
  --panel-strong: #2f293a;
  --text: #ccd6f6;
  --muted: #a7adc4;
  --quiet: #8892b0;
  --orange: #ff8c00;
  --orange-soft: rgba(255, 140, 0, 0.12);
  width: 100%;
  max-width: 1180px;
  margin: 0 auto;
  padding: 0 clamp(0.75rem, 2vw, 1.5rem) 5rem;
  color: var(--text);
  overflow: clip;
}

.startup-page * { box-sizing: border-box; }
:global(body:has(.startup-page)) { overflow-x: clip; }

.startup-page section {
  width: 100%;
  max-width: none;
  min-height: 0;
  margin: 0;
  padding: clamp(5rem, 9vw, 8rem) 0;
  scroll-margin-top: 5rem;
}

.skip-link {
  position: fixed;
  top: 0.75rem;
  left: 50%;
  z-index: 100;
  padding: 0.75rem 1rem;
  color: #211e25;
  background: var(--orange);
  font-weight: 700;
  text-decoration: none;
  transform: translate(-50%, -180%);
  transition: transform 160ms ease;
}

.skip-link:focus { transform: translate(-50%, 0); }

.page-header {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  min-height: 5rem;
  border-bottom: 1px solid rgba(204, 214, 246, 0.13);
  background: var(--page-bg);
}

.wordmark {
  display: inline-flex;
  align-items: center;
  gap: 0.65rem;
  color: var(--text);
  font-size: 1.05rem;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-decoration: none;
}

.wordmark-mark,
.map-account-mark {
  display: grid;
  place-items: center;
  color: #211e25;
  background: var(--orange);
  font-weight: 900;
}

.wordmark-mark { width: 2rem; height: 2rem; border-radius: 0.45rem; }

.section-nav { display: flex; align-items: center; gap: clamp(1rem, 2.5vw, 2rem); }
.section-nav a { color: var(--quiet); font-size: 0.82rem; text-decoration: none; }
.section-nav a:hover { color: var(--text); }

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.22fr) minmax(19rem, 0.78fr);
  align-items: center;
  gap: clamp(3rem, 8vw, 7rem);
  min-height: calc(100vh - 5rem) !important;
  padding-top: clamp(3rem, 5vw, 5rem) !important;
  padding-bottom: clamp(3rem, 5vw, 5rem) !important;
}

.eyebrow,
.section-index,
.note-kicker,
.map-label,
.app-status,
.app-for,
.state {
  margin: 0;
  color: var(--orange);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  line-height: 1.4;
  text-transform: uppercase;
}

h1, h2, h3, p { overflow-wrap: anywhere; }

h1 {
  max-width: 18ch;
  margin: 1.2rem 0 1.5rem;
  color: var(--text);
  font-size: clamp(2.6rem, 4.2vw, 4rem);
  font-weight: 700;
  letter-spacing: -0.045em;
  line-height: 0.98;
}

.hero-positioning {
  max-width: 43rem;
  margin: 0;
  color: var(--text);
  font-size: clamp(1.05rem, 1.6vw, 1.3rem);
  line-height: 1.65;
}

.hero-detail {
  max-width: 40rem;
  margin: 1rem 0 0;
  color: var(--quiet);
  font-size: 0.97rem;
  line-height: 1.7;
}

.hero-actions { display: flex; flex-wrap: wrap; gap: 0.85rem; margin-top: 2rem; }

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.55rem;
  min-height: 3.15rem;
  padding: 0.8rem 1.15rem;
  border: 1px solid var(--orange);
  border-radius: 0.35rem;
  font-size: 0.9rem;
  font-weight: 700;
  text-decoration: none;
  transition: background-color 160ms ease, color 160ms ease, transform 160ms ease;
}

.button-primary { color: #211e25; background: var(--orange); }
.button-secondary { color: var(--orange); background: transparent; }
.button:hover { transform: translateY(-2px); }
.button-primary:hover { background: #ffa126; }
.button-secondary:hover { background: var(--orange-soft); }

.product-map {
  position: relative;
  min-width: 0;
  padding: clamp(1.2rem, 3vw, 2rem);
  border: 1px solid rgba(204, 214, 246, 0.13);
  border-radius: 1rem;
  background:
    linear-gradient(rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.018) 1px, transparent 1px),
    var(--panel);
  background-size: 24px 24px;
  box-shadow: 0 28px 80px rgba(0, 0, 0, 0.22);
}

.map-label { color: var(--quiet); letter-spacing: 0.1em; }

.map-account {
  display: flex;
  align-items: center;
  gap: 0.9rem;
  margin-top: 1.5rem;
  padding: 1rem;
  border: 1px solid rgba(255, 140, 0, 0.34);
  border-radius: 0.75rem;
  background: rgba(33, 30, 37, 0.92);
}

.map-account-mark { flex: 0 0 auto; width: 2.5rem; height: 2.5rem; border-radius: 0.55rem; }
.map-account strong, .map-account small { display: block; }
.map-account strong { color: var(--text); font-size: 0.9rem; }
.map-account small { margin-top: 0.2rem; color: var(--quiet); font-size: 0.73rem; }
.map-line { width: 1px; height: 2rem; margin: 0 auto; background: rgba(255, 140, 0, 0.55); }
.map-products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 0.75rem; }

.map-product {
  position: relative;
  min-width: 0;
  padding: 1rem;
  border: 1px solid rgba(204, 214, 246, 0.12);
  border-radius: 0.65rem;
  background: rgba(33, 30, 37, 0.88);
}

.map-product-featured { border-color: rgba(255, 140, 0, 0.3); }
.map-number { display: block; margin-bottom: 1.7rem; color: var(--orange); font-size: 0.65rem; font-weight: 700; }
.map-product strong, .map-product small { display: block; }
.map-product strong { color: var(--text); font-size: 0.82rem; }
.map-product small { margin-top: 0.3rem; color: var(--quiet); font-size: 0.68rem; line-height: 1.45; }
.map-note { margin: 1rem 0 0; color: #737c99; font-size: 0.65rem; text-align: center; }

.content-section { border-top: 1px solid rgba(204, 214, 246, 0.11); }

.section-heading { max-width: 48rem; margin-bottom: clamp(2.5rem, 5vw, 4.5rem); }
.section-heading-split { display: grid; grid-template-columns: 1fr 0.8fr; align-items: end; gap: 3rem; max-width: none; }

h2 {
  margin: 0.8rem 0 1.2rem;
  color: var(--text);
  font-size: clamp(2rem, 4vw, 3.75rem);
  font-weight: 700;
  letter-spacing: -0.035em;
  line-height: 1.07;
}

.section-heading > p:last-child,
.section-heading-split > p {
  margin: 0;
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.75;
}

.steps { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1px; margin: 0; padding: 0; list-style: none; background: rgba(204, 214, 246, 0.12); }
.steps li { min-width: 0; padding: clamp(1.5rem, 3vw, 2.5rem); background: var(--page-bg); }
.step-number { color: var(--orange); font-family: 'Chakra Petch', sans-serif; font-size: 0.78rem; font-weight: 700; }
.steps h3, .app-card h3, .direction-grid h3 { margin: 2.5rem 0 0.75rem; color: var(--text); font-size: 1.15rem; line-height: 1.25; }
.steps p, .direction-grid p { margin: 0; color: var(--quiet); font-size: 0.9rem; line-height: 1.7; }

.account-note {
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: clamp(2rem, 5vw, 5rem);
  margin-top: 3rem;
  padding: clamp(1.5rem, 4vw, 3rem);
  border: 1px solid rgba(255, 140, 0, 0.28);
  border-radius: 0.75rem;
  background: var(--orange-soft);
}

.account-note h3 { margin: 0.6rem 0 0; color: var(--text); font-size: clamp(1.35rem, 2.5vw, 2rem); line-height: 1.2; }
.account-note > p { margin: 0; color: var(--muted); line-height: 1.75; }

.app-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1.25rem; }
.app-card { display: flex; min-width: 0; min-height: 100%; flex-direction: column; padding: clamp(1.25rem, 2.5vw, 2rem); border: 1px solid rgba(204, 214, 246, 0.12); border-radius: 0.75rem; background: var(--panel); }
.app-card-top { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.app-icon { display: grid; width: 2.8rem; height: 2.8rem; place-items: center; border: 1px solid rgba(255, 140, 0, 0.45); border-radius: 0.6rem; color: var(--orange); background: var(--orange-soft); font-family: 'Chakra Petch', sans-serif; font-size: 0.78rem; font-weight: 700; }
.app-status { color: #93c5aa; font-size: 0.62rem; letter-spacing: 0.09em; }
.app-for { margin: 2.2rem 0 0; color: var(--orange); font-size: 0.64rem; letter-spacing: 0.08em; }
.app-card h3 { margin-top: 0.7rem; font-size: 1.25rem; }
.app-subtitle { margin: 0; color: var(--muted); font-size: 0.9rem; }
.capability-list { display: grid; gap: 0.7rem; margin: 1.6rem 0; padding: 0; color: var(--quiet); font-size: 0.85rem; line-height: 1.55; list-style: none; }
.capability-list li { position: relative; padding-left: 1.1rem; }
.capability-list li::before { content: ''; position: absolute; top: 0.55rem; left: 0; width: 0.35rem; height: 0.35rem; border-radius: 50%; background: var(--orange); }
.limits { margin-top: auto; padding-top: 1rem; border-top: 1px solid rgba(204, 214, 246, 0.1); }
.limits p { margin: 0 0 0.45rem; color: var(--text); font-size: 0.7rem; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
.limits span { color: #9da4ba; font-size: 0.76rem; line-height: 1.55; }

.founder-section { display: grid; grid-template-columns: minmax(16rem, 0.75fr) minmax(0, 1.25fr); align-items: center; gap: clamp(3rem, 8vw, 7rem); }
.founder-portrait-wrap { min-width: 0; }
.founder-portrait { display: block; width: 100%; max-height: 34rem; border-radius: 0.75rem; object-fit: cover; object-position: center top; filter: saturate(0.82) contrast(1.03); }
.portrait-caption { display: flex; justify-content: space-between; gap: 1rem; margin: 0.8rem 0 0; color: var(--quiet); font-size: 0.72rem; }
.portrait-caption span { color: var(--text); font-weight: 700; }
.founder-copy h2 { max-width: 13ch; }
.founder-copy > p:not(.section-index) { margin: 0 0 1.1rem; color: var(--muted); line-height: 1.75; }
.founder-copy .founder-lead { color: var(--text); font-size: 1.08rem; }
blockquote { margin: 1.7rem 0; padding: 0.2rem 0 0.2rem 1.5rem; border-left: 2px solid var(--orange); color: var(--text); font-family: 'Chakra Petch', sans-serif; font-size: clamp(1.15rem, 2vw, 1.5rem); line-height: 1.45; }

.direction-section { position: relative; }
.direction-heading { max-width: 49rem; }
.direction-grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 1rem; }
.direction-grid article { min-width: 0; padding: clamp(1.25rem, 3vw, 2rem); border: 1px solid rgba(204, 214, 246, 0.12); border-radius: 0.75rem; background: var(--panel); }
.state { display: inline-flex; padding: 0.4rem 0.55rem; border-radius: 999px; font-size: 0.58rem; letter-spacing: 0.09em; }
.state-live { color: #a9dfbe; background: rgba(72, 143, 98, 0.18); }
.state-next { color: #ffc06f; background: rgba(255, 140, 0, 0.12); }
.state-planned { color: #bdc7eb; background: rgba(136, 146, 176, 0.15); }
.direction-grid h3 { margin-top: 1.7rem; }

.closing-section { border-top: 1px solid rgba(204, 214, 246, 0.11); text-align: center; }
.closing-section .section-index { text-align: center; }
.closing-section h2 { max-width: 17ch; margin-right: auto; margin-left: auto; }
.closing-actions { justify-content: center; }
.portfolio-link { display: inline-flex; align-items: center; gap: 0.6rem; margin-top: 2.5rem; color: var(--quiet); font-size: 0.85rem; text-decoration-color: rgba(136, 146, 176, 0.45); text-underline-offset: 0.35rem; }
.portfolio-link:hover { color: var(--text); }

a:focus-visible { outline: 2px solid var(--text); outline-offset: 4px; }

@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; min-height: auto !important; padding-top: 6rem !important; }
  .hero-copy { max-width: 48rem; }
  .product-map { max-width: 34rem; }
  .app-grid { grid-template-columns: 1fr; }
  .app-card { min-height: 0; }
  .section-heading-split { grid-template-columns: 1fr; gap: 1rem; }
  .founder-section { gap: 3rem; }
  .direction-grid { grid-template-columns: 1fr; }
}

@media (max-width: 680px) {
  .startup-page { padding-right: 0.8rem; padding-left: 0.8rem; }
  .page-header { align-items: flex-start; flex-direction: column; gap: 1rem; padding: 1rem 0 0.9rem; }
  .section-nav { width: 100%; gap: 0; justify-content: space-between; }
  .section-nav a { padding: 0.4rem 0; font-size: 0.72rem; }
  .hero { padding-top: 2rem !important; }
  h1 { font-size: clamp(2.5rem, 11vw, 3.5rem); }
  .hero-actions { flex-direction: column; }
  .button { width: 100%; }
  .map-products { grid-template-columns: 1fr; }
  .steps { grid-template-columns: 1fr; }
  .steps h3 { margin-top: 1.5rem; }
  .account-note { grid-template-columns: 1fr; gap: 1.25rem; }
  .founder-section { grid-template-columns: 1fr; }
  .founder-portrait { max-height: 30rem; }
  .portrait-caption { flex-direction: column; gap: 0.25rem; }
}

@media (max-width: 767px) {
  .page-header { top: var(--mobile-nav-height); margin-top: var(--mobile-nav-height); }
  .startup-page section { scroll-margin-top: 13rem; }
}

@media (prefers-reduced-motion: reduce) {
  :global(html:has(.startup-page)) { scroll-behavior: auto; }
  .startup-page *,
  .startup-page *::before,
  .startup-page *::after {
    scroll-behavior: auto !important;
    transition-duration: 0.01ms !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
  }
}
</style>
