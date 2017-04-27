import _ from 'underscore'
window.loadedComponents = []

export default {
  created () {
    this.loadLanguage()
  },
  methods: {
    loadLanguage: function () {
      var name = this.$options.name
      if (name && !_.contains(window.loadedComponents, name) && name.startsWith('bn-')) {
        window.loadedComponents.push(name)
        // todo
        this.$i18n.mergeLocaleMessage('en', {hello: 'from server hello', test2: 'from server test'})
      }
    }
  }
}
