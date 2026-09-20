import DefaultTheme from 'vitepress/theme'
import { enhanceAppWithTabs } from 'vitepress-plugin-tabs/client'
import Card from './components/Card.vue'
import CardGrid from './components/CardGrid.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    enhanceAppWithTabs(app)
    app.component('Card', Card)
    app.component('CardGrid', CardGrid)
  }
}
