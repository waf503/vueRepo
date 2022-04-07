import Vue from 'vue'
import App from './App.vue'
import myButton from './components/myButton.vue'

Vue.component('enviar',myButton);

new Vue({
  el: '#app',
  render: h => h(App)
})
