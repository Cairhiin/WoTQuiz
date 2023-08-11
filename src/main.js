import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { MotionPlugin } from '@vueuse/motion'

library.add(faMoon);
library.add(faSun);

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon);
app.use(MotionPlugin);
app.mount('#app');