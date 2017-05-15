import common from './common'
import project from './project'
const config = {
	apiServer: 'http://localhost:16864/api/',
}
var apiModules = {
	common,
	project
};
var install = function(Vue) {
	if (install.installed) return
	install.installed = true
	var apiUrl = {}
	for (var m in apiModules) {
		var module = {}
		var apiModule = apiModules[m]
		for (var api in apiModule) {
			module[api] = config.apiServer + apiModule[api];
		}
		apiUrl[m] = module;
	}
	Object.defineProperty(Vue.prototype, '$api', {
		get() {
			return apiUrl
		}
	})
}

export default {
	install
}