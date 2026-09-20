import { defineConfig } from 'vitepress'
import { tabsMarkdownPlugin } from 'vitepress-plugin-tabs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "IBM Client Engineering",
  description: "IBM Bob and Maximo Automation Scripts",
  base: '/maximo-bob-labs/',
  markdown: {
    config(md) {
      md.use(tabsMarkdownPlugin)
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'IBM Bob', link: '/ibm-bob/' },
      { text: 'Maximo Script Modernization', link: '/maximo-script-modernization/' }
    ],

    outline: {
          level: [2, 4]
    },

    sidebar: [
      {
        text: 'IBM Bob',
        items: [
          { text: 'Overview', link: '/ibm-bob/' },
          { text: 'Installation', link: '/ibm-bob/installation' },
          { text: 'IDE Scavenger Hunt', link: '/ibm-bob/ide-scavenger-hunt' }
        ]
      },
      {
        text: 'Maximo Automation Scripts',
        items: [
          { text: 'Overview', link: '/maximo-script-modernization/'},
          { text: 'Script Modernization', link: '/maximo-script-modernization/maximo-script-modernization-lab' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ibm-client-engineering-nl/maximo-bob-labs' }
    ]
  }
})
