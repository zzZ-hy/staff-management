import Vue from 'vue'
import VueRouter from 'vue-router'

const DivisionManagement = () => import('views/department/DivisionManagement')
const StaffManagement = () => import('views/employee/StaffManagement')
const TheInitImages = () => import('views/theinitialimages/TheInitImages')
const DepartmentToAdd = () => import('views/department/DepartmentToAdd')
const DepartmentToDelete=()=>import('views/department/DepartmentToDelete')
const EmployeesToIncrease=()=>import('views/employee/EmployeesToIncrease')
const EmployeesToDelete=()=>import('views/employee/EmployeesToDelete')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'TheInitImages',
    component: TheInitImages
  },
  {
    path: '/divisionmanagement',
    name: 'DivisionManagement',
    component: DivisionManagement
  },
  {
    path: '/staffmanagement',
    name: 'StaffManagement',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: StaffManagement
  },
  {
    path: '/departmenttoadd',
    name: 'DepartmentToAdd',
    component: DepartmentToAdd
  },
  {
    path: '/departmenttodelete',
    name: 'DepartmentToDelete',
    component:DepartmentToDelete
  },
  {
    path: '/employeestoincrease',
    name: 'EmployeesToIncrease',
    component:EmployeesToIncrease
  },
  {
    path: '/employeestodelete',
    name: 'EmployeesToDelete',
    component:EmployeesToDelete
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
