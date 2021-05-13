import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ChartView from '../views/ChartView/ChartView.vue'
import ChartDefault from '../views/ChartView/ChartDefault.vue'
import TableDefault from '../views/TableView/TableDefault.vue'
import TableView from '../views/TableView/TableView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [{
      path: '',
      name: 'chart_default',
      component: ChartDefault
    },{
      name: 'chart',
      path: 'chart/:chainID',
      component: ChartView
    }]
  },
  {
    path: '/table',
    name: 'table_default',
    component: TableDefault,
    children: [
      {
        name: 'table',
        path: '/table/:chainID',
        component: TableView
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
