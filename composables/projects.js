import { ref, computed } from 'vue'

export const projectsArr = [
  { name: "Maplerad", desc: "I worked on all things frontend related at Maplerad. Maplerad allows you to embed banking services into your application.", tags: ["Nuxt", "tailwind", "typescript"], links: [{ name: 'live', url: "https://maplerad.com/" }] },
  { name: "Stranerd", desc: "Building various tools to enable students to collaborate, innovate and achieve academic success.", tags: ["Vue", "tailwind", "Ionic"], links: [{ name: 'live', url: "https://stranerd.com/" }] },
  { name: "Cloundenly", desc: "Worked on a suite of tools that enabled the easy management of HR, Benefits and Payroll for Organisations.", tags: ["Vue", "Tailwind", "Vuex"], links: [{ name: 'live', url: "https://cloudenly.com/" }] },
  { name: "Kanban", desc: "An opensource kanban board built with Nuxt 3 and Tailwind.", tags: ["Nuxt 3", "Tailwindcss", "vuedraggable"], links: [{ name: 'github', url: "https://github.com/kromate/kanban" }, { name: 'live', url: "https://kanban.kromate.dev/" }] },
  { name: "Vue3 dashboard", desc: "Saw a very beautiful dashboard template in Vanilla Js and decided to recreate it in Vue.", tags: ["Vue", "Tailwind", "Chart.js"], links: [{ name: 'github', url: "https://github.com/kromate/vue3-vite-tailwind-dashboard" }, { name: 'live', url: "https://dashboard.kromate.dev/" }] },
  { name: "Vue3 Animation", desc: "A collection of vue 3 animations made with different libraries from GSAP to hover effects and plain CSS animations.", tags: ["Vue", "GSAP", "Tailwind"], links: [{ name: 'github', url: "https://github.com/kromate/vue3-gsap-animations" }, { name: 'live', url: "https://animations.kromate.dev/" }] },
  { name: "Gamexit", desc: "A platform focused on connecting people using web based games. Create a 1v1 or tournament challenge.", tags: ["Websocket", "WebRTC", "Node.Js"], links: [{ name: 'github', url: "https://github.com/kromate/gamexit" }, { name: 'live', url: "https://game.kromate.dev/" }] },
  { name: "Maplerad Dashboard", desc: "The customer Dashboard application for Maplerad.", tags: ["Nuxt", "tailwind", "typescript"], links: [{ name: 'live', url: "https://app.maplerad.com/" }] },
  { name: "Axia", desc: "An Edutech website built for a client (Contracted).", tags: ["Vue", "Tailwind", "Nuxt 3"], links: [{ name: 'live', url: "https://www.axia.africa/" }] },
  { name: "Wirepay", desc: "The Landing page for wirepay which is a product of Maplerad.", tags: ["Nuxt", "tailwind", "typescript"], links: [{ name: 'live', url: "https://sendwirepay.com/" }] },
  { name: "ScriptCentral", desc: "A web interface for open source project RottenScript with search, share, edit features.", tags: ["Nuxt", "Tailwind", "Firebase"], links: [{ name: 'github', url: "https://github.com/kromate/scriptCenter" }, { name: 'live', url: "https://scripts.kromate.dev/" }] },
  { name: "Tailwind-to-css", desc: "An NPM package that converts Tailwind CSS to vanilla CSS.", tags: ["Javascript", "Tailwind", "NPM Package"], links: [{ name: 'github', url: "https://github.com/kromate/tailwind-to-css" }, { name: 'live', url: "https://www.npmjs.com/package/tailwind-to-css" }] },
  { name: "Tailwind-Inliner", desc: "A web app that converts tailwind classes to inline css, especially useful for emails.", tags: ["Vue", "Tailwind", "Monaco Editor"], links: [{ name: 'github', url: "https://github.com/kromate/tailwind-inliner" }, { name: 'live', url: "https://inliner.kromate.dev/" }] },
  { name: "Codeden", desc: "A drag n drop vue component builder with component library.", tags: ["Vue", "Vue-draggable", "Tailwind"], links: [{ name: 'github', url: "https://github.com/kromate/Codeden" }, { name: 'live', url: "https://codeden.kromate.dev/" }] },
  { name: "Script Runner", desc: "A chrome extension to save Javascript code and run them later in the console.", tags: ["Chrome extension", "Javascript"], links: [{ name: 'github', url: "https://github.com/kromate/chrome-extensions/tree/main/Script%20Runner" }] },
  { name: "Code Formatter", desc: "A chrome extension that formats HTML & CSS code using prettier.", tags: ["Chrome extension", "Javascript"], links: [{ name: 'github', url: "https://github.com/kromate/chrome-extensions/tree/main/Format%20Code" }, { name: 'live', url: "https://chrome.google.com/webstore/detail/code-formatter/pbcmhfjddijdnkbfcbghfnoejdknfejd" }] },
  { name: "LegalPreneur", desc: "The official website for Legalpreneur Attorneys & Consulting firm.", tags: ["Vue", "Vue-draggable", "Tailwind"], links: [{ name: 'live', url: "https://legalpreneurconsulting.com/" }] },
  { name: "Timelinx", desc: "A timeline creator tool built from a design by a friend.", tags: ["Nuxt", "Tailwind", "Firebase"], links: [{ name: 'github', url: "https://github.com/kromate/Timeline-Creator" }, { name: 'live', url: "https://timeline.kromate.dev/" }] },
  { name: "Octobus", desc: "A web app for getting updates on buses and their schedules.", tags: ["Google Maps", "Firebase", "Node.Js"], links: [{ name: 'github', url: "https://github.com/kromate/Octobus" }, { name: 'live', url: "https://octobus.kromate.dev/" }] },
  { name: "AnimeDom", desc: "Built my own anime site using puppeteer/cheerio scraping and Ionic frontend.", tags: ["Firebase", "Puppeteer", "Express"], links: [{ name: 'github', url: "https://github.com/kromate/AnimeDom-Ionic" }, { name: 'live', url: "https://animedom.netlify.app/" }] },
  { name: "Cloundenly-UI", desc: "A list of Internal UI components used by different teams in Scelloo.", tags: ["Vue", "Storybook", "Npm-package"], links: [{ name: 'live', url: "https://cloudenly-ui.netlify.app/" }] },
  { name: "intercom clone", desc: "An intercom clone that uses Google Spreadsheet to collect feedback.", tags: ["Typescript", "Tailwind", "library"], links: [{ name: 'github', url: "https://github.com/kromate/careButton" }, { name: 'live', url: "https://kromate.github.io/careButton/" }] },
  { name: "FaceReg", desc: "Web based facial recognition system for attendance.", tags: ["Vue", "Faceapi.js", "Webcam.js"], links: [{ name: 'github', url: "https://github.com/kromate/faceReg" }, { name: 'live', url: "https://fas.kromate.dev/" }] },
  { name: "DSC Website", desc: "Contributed to the DSC Unilag website for speed and efficiency.", tags: ["HTML", "Bootstrap", "Jquery"], links: [{ name: 'github', url: "https://github.com/DSC-Unilag/dsc-unilag.github.io" }, { name: 'live', url: "https://dscunilag.dev/" }] },
  { name: "Studee", desc: "Open source student community app with past questions feature.", tags: ["Vue", "Ionic", "firebase"], links: [{ name: 'github', url: "https://github.com/KROM-TECH/Studee" }] },
  { name: "SVG Character builder", desc: "My attempt to make a character builder with SVGs and Javascript.", tags: ["SVG", "Vue", "vue-router"], links: [{ name: 'github', url: "https://github.com/kromate/SVG_SHAPE_BUILDER" }, { name: 'live', url: "https://svgshapes.netlify.app/" }] }
]

export const showMoreValue = ref(true)

export const projects = computed(() => {
  return showMoreValue.value ? projectsArr.slice(0, 6) : projectsArr
})

export const showMore = () => {
  showMoreValue.value = false
}

export const showLess = () => {
  showMoreValue.value = true
}