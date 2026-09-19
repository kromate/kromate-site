<template>
  <article class="app-details" itemscope itemtype="https://schema.org/SoftwareApplication">
    <meta itemprop="applicationCategory" content="UtilitiesApplication" />
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <a href="/">Home</a>
      <span aria-hidden="true">/</span>
      <a href="/apps">Apps</a>
      <span aria-hidden="true">/</span>
      <span aria-current="page">{{ app.name }}</span>
    </nav>

    <header class="app-hero">
      <slot name="intro">
        <p class="app-kind">{{ app.kind }}</p>
        <h1 class="chakra">{{ app.name }}</h1>
        <p class="app-description">{{ app.description }}</p>
      </slot>
      <dl class="app-meta">
        <div>
          <dt>Version</dt>
          <dd itemprop="softwareVersion">{{ app.version }}</dd>
        </div>
        <div>
          <dt>Platform</dt>
          <dd itemprop="operatingSystem">{{ app.platform }}</dd>
        </div>
        <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
          <dt>Price</dt>
          <dd>Free<meta itemprop="price" content="0" /></dd>
        </div>
      </dl>
      <a :href="app.downloadUrl" itemprop="downloadUrl" class="download-link" target="_blank" rel="noopener noreferrer">
        Download for Apple Silicon macOS
        <span aria-hidden="true">↗</span>
      </a>
    </header>

    <section class="detail-section" aria-labelledby="use-case-heading">
      <h2 id="use-case-heading" class="chakra">{{ app.useCaseTitle }}</h2>
      <p>{{ app.useCase }}</p>
    </section>

    <section class="detail-section" aria-labelledby="features-heading">
      <h2 id="features-heading" class="chakra">What it does</h2>
      <ul class="feature-list">
        <li v-for="feature in app.features" :key="feature">{{ feature }}</li>
      </ul>
    </section>

    <section class="detail-section" aria-labelledby="requirements-heading">
      <h2 id="requirements-heading" class="chakra">Requirements</h2>
      <ul class="feature-list">
        <li v-for="requirement in app.requirements" :key="requirement">{{ requirement }}</li>
      </ul>
    </section>

    <section class="detail-section" aria-labelledby="install-heading">
      <h2 id="install-heading" class="chakra">Install</h2>
      <ol class="install-list">
        <li v-for="step in app.installSteps" :key="step">{{ step }}</li>
      </ol>
      <p class="signing-note">{{ app.signingNote }}</p>
      <p v-if="app.privacyNote" class="privacy-note">{{ app.privacyNote }}</p>
      <p v-if="app.releaseNote" class="release-note">{{ app.releaseNote }}</p>
    </section>

    <footer class="app-links">
      <a :href="app.repositoryUrl" target="_blank" rel="noopener noreferrer">View on GitHub</a>
      <a :href="app.installUrl" target="_blank" rel="noopener noreferrer">Read the install guide</a>
      <a :href="app.issuesUrl" target="_blank" rel="noopener noreferrer">Share feedback</a>
    </footer>
  </article>
</template>

<script setup>
defineProps({
  app: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.app-details {
  color: #8892b0;
  margin: 0 auto;
  max-width: 780px;
  padding: 8rem 1.5rem 5rem;
}

.breadcrumbs {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.85rem;
  gap: 0.5rem;
  margin-bottom: 3rem;
}

.breadcrumbs a,
.app-links a {
  color: #ff8c00;
  text-decoration: none;
}

.breadcrumbs a:hover,
.app-links a:hover {
  color: #ccd6f6;
}

.app-kind {
  color: #ff8c00;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.app-hero h1 {
  color: #ccd6f6;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  line-height: 1;
  margin: 0;
}

.app-hero :slotted(h1) {
  color: #ccd6f6;
  font-family: 'Chakra Petch', sans-serif;
  font-size: clamp(2.4rem, 7vw, 4.5rem);
  line-height: 1;
  margin: 0;
}

.app-description {
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 1.5rem 0;
  max-width: 42rem;
}

.app-hero :slotted(p) {
  font-size: 1.1rem;
  line-height: 1.75;
  margin: 1.5rem 0;
  max-width: 42rem;
}

.app-hero :slotted(.app-kind) {
  color: #ff8c00;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.8rem;
  letter-spacing: 0.12em;
  margin: 0 0 1rem;
  text-transform: uppercase;
}

.app-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 3rem;
  margin: 0 0 2rem;
}

.app-meta dt {
  color: #8892b0;
  font-family: 'Chakra Petch', sans-serif;
  font-size: 0.75rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.app-meta dd {
  color: #ccd6f6;
  margin: 0.25rem 0 0;
}

.download-link {
  align-items: center;
  background: #ff8c00;
  color: #211e25;
  display: inline-flex;
  font-family: 'Chakra Petch', sans-serif;
  font-weight: 700;
  gap: 0.5rem;
  min-height: 3rem;
  padding: 0.75rem 1.15rem;
  text-decoration: none;
}

.download-link:hover {
  background: #ccd6f6;
}

.detail-section {
  border-top: 1px solid rgba(136, 146, 176, 0.3);
  margin-top: 4rem;
  padding-top: 2rem;
}

.detail-section h2 {
  color: #ccd6f6;
  font-size: 1.4rem;
  margin: 0 0 1rem;
}

.detail-section p,
.feature-list,
.install-list {
  line-height: 1.75;
  margin: 0;
}

.feature-list,
.install-list {
  padding-left: 1.25rem;
}

.feature-list li + li,
.install-list li + li {
  margin-top: 0.6rem;
}

.feature-list li::marker,
.install-list li::marker {
  color: #ff8c00;
}

.signing-note,
.privacy-note {
  background: rgba(255, 140, 0, 0.08);
  border-left: 2px solid #ff8c00;
  margin-top: 1.5rem !important;
  padding: 0.9rem 1rem;
}

.release-note {
  color: #ccd6f6;
  margin-top: 1rem !important;
}

.privacy-note {
  background: rgba(204, 214, 246, 0.06);
  border-left-color: #ccd6f6;
}

.app-links {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem 1.5rem;
  margin-top: 3rem;
}

.app-details a:focus-visible {
  outline: 2px solid #ccd6f6;
  outline-offset: 4px;
}
</style>
