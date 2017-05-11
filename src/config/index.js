const config={
  prefix: 'bn-',
  apiServer: 'http://localhost:16864/'
}
var install= function  (Vue){
 if (install.installed) return
  install.installed = true

  Object.defineProperty(Vue.prototype, '$appSetting', {
    get () { return config }
  })
} 

export default {
	install
}