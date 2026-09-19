export const apps = [
  {
    id: 'wifi-drop',
    name: 'WiFi Drop',
    kind: 'Local file transfer',
    platform: 'Apple Silicon macOS',
    version: '1.0.0',
    summary: 'Move large videos and files between your phone and laptop over the same Wi-Fi network.',
    description: 'WiFi Drop gives your phone a browser page for sending files directly to your Apple Silicon Mac on the local network.',
    useCaseTitle: 'From your shoot to your laptop',
    useCase: 'Useful when a cable, cloud upload, or messaging app would slow down a handoff between your phone and laptop.',
    features: [
      'Transfers large videos and files across the local Wi-Fi network',
      'Lets a phone connect through its browser',
      'Keeps the handoff between devices on the same network'
    ],
    requirements: [
      'Apple Silicon Mac',
      'macOS',
      'Phone and laptop connected to the same Wi-Fi network'
    ],
    installSteps: [
      'Download and unzip the Apple Silicon macOS archive.',
      'Move WiFi Drop to Applications and open it.',
      'Follow the app’s local network instructions, then open the shown address on your phone.'
    ],
    signingNote: 'The current release is ad hoc signed and is not Apple-notarized. On first launch, macOS may require approval in Privacy & Security.',
    downloadUrl: 'https://github.com/kromate/wifi-drop/releases/latest/download/WiFi-Drop-macOS-Apple-Silicon.zip',
    repositoryUrl: 'https://github.com/kromate/wifi-drop',
    installUrl: 'https://github.com/kromate/wifi-drop#readme',
    issuesUrl: 'https://github.com/kromate/wifi-drop/issues'
  },
  {
    id: 'codex-account-switcher',
    name: 'Codex Account Switcher',
    kind: 'Menu bar utility',
    platform: 'Apple Silicon macOS 14+',
    version: '3.0',
    summary: 'Switch between saved Codex accounts and check the plan, remaining usage, and reset times for each one.',
    description: 'An independent macOS menu bar utility that helps you move between your own saved Codex accounts without losing track of account usage.',
    useCaseTitle: 'Keep track of your Codex accounts',
    useCase: 'Useful when you work across more than one personal Codex account and need a quick view of each account’s available usage. Finish active Codex work before switching accounts.',
    features: [
      'Switches between saved Codex accounts from the macOS menu bar',
      'Shows the plan, remaining usage, and reset times for saved accounts',
      'Keeps account switching separate from the Codex application itself'
    ],
    requirements: [
      'Apple Silicon Mac running macOS 14 or later',
      'Codex installed',
      'Your own Codex accounts'
    ],
    installSteps: [
      'Download and unzip the Apple Silicon macOS archive.',
      'Move Codex Account Switcher to Applications and open it.',
      'Add only accounts you own, then use the menu bar item to switch or check usage.'
    ],
    signingNote: 'The current release is ad hoc signed and is not Apple-notarized. On first launch, macOS may require approval in Privacy & Security.',
    privacyNote: 'Use only accounts you own or are authorized to use. Finish active Codex work before switching accounts. This utility is independent and is not affiliated with or endorsed by OpenAI.',
    releaseNote: 'The current release does not include source code.',
    downloadUrl: 'https://github.com/kromate/codex-account-switcher/releases/latest/download/Codex-Account-Switcher-macOS-Apple-Silicon.zip',
    repositoryUrl: 'https://github.com/kromate/codex-account-switcher',
    installUrl: 'https://github.com/kromate/codex-account-switcher#readme',
    issuesUrl: 'https://github.com/kromate/codex-account-switcher/issues'
  }
]

export const getAppById = (id) => apps.find((app) => app.id === id)
