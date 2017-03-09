import Vue from 'vue'
import VueRouter from 'vue-router'
import components from 'index'

Vue.use(VueRouter)

components.map(component => {
  Vue.component(component.name, component)
})

export default Vue
