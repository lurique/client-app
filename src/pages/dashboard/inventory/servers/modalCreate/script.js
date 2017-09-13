'use strict'
import _ from 'lodash'
import Modals from 'mixins/modals'
import Servers from 'factories/servers'
import Adminer from 'factories/adminer'
import formatAdminer from 'src/resources/libs/formatAdminerData'
import FectherEntity from 'services/fetchEntity'

import tabDatacenter from './tab_datacenter'
import tabAuth from './tab_auth'
import tabSetups from './tab_setups'
import tabStorage from './tab_storage'
import tabTags from './tab_tags'

export default {
  mixins: [Modals],

  components: {
    tabDatacenter,
    tabAuth,
    tabSetups,
    tabStorage,
    tabTags
  },

  data: function () {
    return {
      zone: null,
      showModalDC: false,
      showModalZones: false,
      server: {status: "Active", role:null, storage:[], auth:[], services: [], tags: [], datacenters: {}},
      os: {base: null, dist: null, version: null},
      options: {
        status:[],
        environment:[],
        os:[],
        serverType:[],
        storage:[],
        auth:[],
        services:[],
        tags:[]
      }
    }
  },

  computed: {
    tab_dc() {
      return this.$refs.tab_dc
    },
    tab_storage() {
      return this.$refs.tab_storage
    },
    tab_auth() {
      return this.$refs.tab_auth
    },
    tab_services() {
      return this.$refs.tab_services
    },
    tab_tags() {
      return this.$refs.tab_tags
    }
  },

  methods: {
    afterShow () {
      this.text.title =  this.create ? 'Create new Server' : `Edit ${this.model.hostname} server`
    },

    createLoad () {
      this.tabShow=0
      this.server = {}
      this.os = {base: null, dist: null, version: null}
      this.tab_dc.reset()
      this.tab_storage.reset()
      this.tab_auth.reset()
      this.tab_services.reset()
      this.tab_tags.reset()
    },

    editLoad () {
      const {_id} = this.model
      FectherEntity(Servers)({k: 'server_'+_id})
      .findOne((e) => {
        this.model = e.data
        this.$set(this, 'server', this.model)

        this.$set(this, 'os', this.model.os)

        this.tab_dc.updaterEdit(this.model.dc)
        this.tab_storage.updaterEdit(this.model.storage)
        this.tab_auth.updaterEdit(this.model.auth)
        this.tab_services.updaterEdit(this.model.services)
        this.tab_tags.updaterEdit(this.model.tags)
      }, _id)
    },


    setupModel () {
      this.model = _.pickBy(this.server, _.identity)
      this.model.os = _.pickBy(this.os, _.identity)
    },

    createSave () {
      this.setupModel()

      FectherEntity(Servers)({k: 'server'})
        .create(this.finishJob, this.model)
    },

    editSave () {
      this.setupModel()

      FectherEntity(Servers)({k: 'server_'+this.model._id})
        .update(this.finishJob, this.model)
    },

    fetchData() {
      FectherEntity(Adminer)({k: 'server_options', persistence: 'local'})
      .find(this.fetchAdminer, {key: 'server_options'})
    },

    fetchAdminer (e) {
      this.options = formatAdminer(e)
    }
  },

  created() {
    this.fetchData()
  }

}
