'use strict'

export default {
  props: {
    single: {},
    basket: {default: []},
    label: {}
  },

  data: function () {
    return {
      reseter: {}
    }
  },

  methods: {
    add() {
      const stg = _.pickBy(this.single, _.identity)
      const exist = _.find(this.basket, ['name', stg.name])

      if (!_.isEmpty(stg) && !exist) {
        this.$emit('update:single', _.clone(this.reseter))

        this.basket.push(stg)
        this.update()
      }
    },

    del(key) {
      this.basket.splice(key, 1)
      this.update()
    },

    update() {
      this.$emit('update', this.basket)
    }
  },

  mounted() {
    this.reseter = (_.clone(this.single))
  }
}
