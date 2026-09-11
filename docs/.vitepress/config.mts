import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBM Client Engineering",
  description: "IBM Bob and Maximo Automation Scripts",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IBM Bob', link: '/ibm-bob/' },
      { text: 'Maximo Script Modernization', link: '/maximo-script-modernization/' }
    ],

    sidebar: [
      {
        text: 'IBM Bob',
        items: [
          { text: 'Overview', link: '/ibm-bob/' },
          { text: 'Installation', link: '/ibm-bob/installation' }
        ]
      },
      {
        text: 'Maximo Automation Scripts',
        items: [
          { text: 'Overview', link: '/maximo-script-modernization/'}
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ibm-client-engineering-nl/maximo-bob-labs' }
    ]
  }
})
