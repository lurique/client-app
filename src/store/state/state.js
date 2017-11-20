'use strict'

import CacheManager from 'services/cacheManager'

/**
 * Default init state
 *
 */
export default {
  version: VERSION,

  viewer: {
    title: "Dashboard",
    icon: null,
    subtitle: null
  },

  alert: {
    show: false,
    title: null,
    msg: null,
    type: null
  },

  me: CacheManager({k: 'me_list', persistence: 'local'}).find(['_id', 'email', 'name', 'avatar']),

  tenant: CacheManager({k: 'tenant', persistence: 'local'}).find(),

  spinner: {
    show: false
  },

  cache: {},

  options: {
    'base_url': `${window.location .protocol}//${window.location.host}`,
    'api_url': document.head.querySelector("[name=api_url]").content || 'http://localhost:8888',
    'static_url': document.head.querySelector("[name=static_url]").content || '/uploads/',
    'api_timeout': document.head.querySelector("[name=api_timeout]").content || 5000
  }
}
