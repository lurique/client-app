// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import mixins_forms from 'mixins/forms'

import bootue from './components'
import VeeValidate from 'vee-validate'

Vue.use(bootue)
Vue.use(VeeValidate)

Vue.mixin(mixins_forms)

/* eslint-disable no-new */
new Vue({
  store,
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
