import { createApp } from 'vue'
import './assets/css/tailwind.css'
import App from './App.vue'
import store from "./store"
import router from './router'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(fas, fab, far)



createApp(App).use(store).use(router).component("font", FontAwesomeIcon).mount('#app')
