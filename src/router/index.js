import { createRouter, createWebHistory } from 'vue-router'
import useUserStores from '@/stores/user'

const welcome = () => import('@/views/Welcome.vue')
const dashboard = () => import('@/views/Dashboard.vue')
const indexPage = () => import('@/views/ChildOfDashboard/IndexPage.vue')
const informationPage = () => import('@/views/ChildOfDashboard/InformationPage.vue')
const dataPage = () => import('@/views/ChildOfDashboard/DataPage.vue')
const reportPage = () => import('@/views/ChildOfDashboard/ReportPage.vue')
const managePage = () => import('@/views/ChildOfDashboard/ManagePage.vue')
const modelPage = () => import('@/views/ChildOfDashboard/ModelPage.vue')
const subscribePage = () => import('@/views/ChildOfDashboard/SubscribePage.vue')
const messagePage = () => import('@/views/ChildOfDashboard/MessagePage.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: welcome
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: dashboard,
      redirect: '/dashboard/index',
      children: [
        {
          path: 'index',
          name: 'dashboard:index',
          component: indexPage
        },

        //第一部分
        {
          path: 'information',
          name: 'dashboard:information',
          component: informationPage
        },
        {
          path: 'data',
          name: 'dashboard:data',
          component: dataPage
        },
        {
          path: 'report',
          name: 'dashboard:report',
          component: reportPage
        },

        //第二部分
        {
          path: 'manage',
          name: 'dashboard:manage',
          component: managePage
        },
        {
          path: 'model',
          name: 'dashboard:model',
          component: modelPage
        },

        //第三部分
        {
          path: 'subscribe',
          name: 'dashboard:subscribe',
          component: subscribePage
        },
        {
          path: 'message',
          name: 'dashboard:message',
          component: messagePage
        }
      ],
      meta: {
        requiresAuth: true
      }
    },
    {
      //将用户输出跳转的任何不存在的path重定向到home
      path: '/dashboard/:pathMatch(.*)*',
      redirect: { name: 'dashboard:index' }
    }
  ]
})

//全局路由守卫
router.beforeEach((to, from, next) => {
  if (!to.meta.requiresAuth) {
    next()
    return
  }

  const store = useUserStores()
  //检验进入dashbo界面的权限
  if (store.userLoggedIn) {
    next()
  } else {
    next({ name: welcome })
  }
})

export default router
