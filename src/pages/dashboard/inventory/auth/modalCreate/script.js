'use strict'

import Modals from 'mixins/modals'
import ModalsApps from 'mixins/modals-apps'


export default {
  mixins: [Modals, ModalsApps],

  data () {
    return {
      family: 'Auth',
      initialData: {
        name: null, description: null, provider:null,
        tags: [], servers: [],
        role: {endpoint: null}
      },
      mapper: [
        {name: 'endpoint', label: 'Endpoint', validate: 'url'}
      ]
    }
  }

}
