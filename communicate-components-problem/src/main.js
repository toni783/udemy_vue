import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    showDetail(detail) {
      this.$emit('showDetail', detail)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})