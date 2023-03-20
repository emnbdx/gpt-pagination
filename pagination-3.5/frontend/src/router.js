import Vue from 'vue'
import Router from 'vue-router'
import ItemList from './components/ItemList.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/items',
      name: 'ItemList',
      component: ItemList
    }
  ]
})
