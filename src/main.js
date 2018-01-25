import Vue from 'vue'
import App from './App'
import router from './router'
import { store } from './store'
import {
  Vuetify,
  VApp,
  VNavigationDrawer,
  VFooter,
  VList,
  VBtn,
  VDatePicker,
  VCard,
  VCarousel,
  VIcon,
  VGrid,
  VTextField,
  VTimePicker,
  VToolbar,
  transitions
} from 'vuetify'
import '../node_modules/vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  components: {
    VApp,
    VNavigationDrawer,
    VFooter,
    VList,
    VBtn,
    VCard,
    VCarousel,
    VDatePicker,
    VIcon,
    VGrid,
    VTextField,
    VTimePicker,
    VToolbar,
    transitions
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
