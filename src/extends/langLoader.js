import _ from 'underscore'
import Vue from 'vue'
import Vuei18n from 'vue-i18n'
// import config from '../config'
import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import jaLocale from 'element-ui/lib/locale/lang/ja'

Vue.use(Vuei18n)

if (!window.loadedComponents) {
  window.loadedComponents = []
}
const autoLoader = {
  created () {
    this.loadLanguage()
  },
  methods: {
    loadLanguage: function () {
      var name = this.$options.name
      var config =this.$appSetting
      if(!this.needLoadLanguage)
        return
      if (name && !_.contains(window.loadedComponents, name)) {
        window.loadedComponents.push(name)
        var url = config.apiServer + 'api/GetByComponentName?name=' + name
        this.$http.get(url, {credentials: true}).then((res) => {
          if (res.data) {
            if (res.data.en) {
              this.$i18n.mergeLocaleMessage('en', res.data.en)
            }
          }
        },()=>{console.log('xx')})
      }
    }
  }
}
Vue.mixin(autoLoader)

const messages = {
  ja: jaLocale,
  en: enLocale,
  zh: zhLocale
}

const langLoader = new Vuei18n({
  locale: 'ja',
  fallbackLocale: 'en',
  messages,
  silentTranslationWarn: true
})

export default langLoader
