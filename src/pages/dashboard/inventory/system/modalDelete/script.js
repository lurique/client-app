'use strict'
import Modals from 'mixins/modals'
import System from 'factories/system'

export default {
  mixins: [Modals],

  methods: {
    afterShow () {
      this.text.title = `DELETE ${this.model.name} ?`
    },

    editSave () {
      new System(this.model)
        .authorization()
        .deleteID(this.model._id, this.finishJob)
    }
  }

}
