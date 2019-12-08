import Vue from 'vue'
import VueRouter from 'vue-router'

//引入table路由
import Table from "./table"
import Login from "./login"
Vue.use(VueRouter)

const routes = [
  {path:'/',redirect:Login},
  Table,Login
]

const router = new VueRouter({
  routes
})

//全局路由守卫拦截
router.beforeEach((to,from,next)=>{
  if(to.path == '/login') return next();
  const tokenStr = window.sessionStorage.getItem("token");
  if(!tokenStr) return next('/login');
  return next();
})



export default router
