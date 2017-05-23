import store  from 'store'

export default {

  computed: {
    showTop: {
      get () {
        return store.getters.get_spinner.show
      },
      set (show) {
        store.dispatch('setSpinner', {show})
      }
    }

  }
}
