import './assets/app.scss'

import {Vue, VueRouter} from 'entry'
import routes from './examples/routes'
import App from './App'

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
