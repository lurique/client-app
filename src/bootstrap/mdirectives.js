import Directives from '../components/directives/index'

function plugin (Vue) {
  if (plugin.installed) return

  for (let key in Directives) {
    Vue.directive(key, Directives[key])
  }
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}

export default plugin
