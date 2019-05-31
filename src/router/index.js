import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Index from '@/components/home/Index'
import main from '@/components/home/main'//daoru
/* import dog from '@/components/dog/dog' */
/* import dog1 from '@/components/dog/dog1' */
/* import dog2 from '@/components/dog/dog2' */
import CompList from '@/components/baseInfo/CompList'
import CompAdd from '@/components/baseInfo/CompAdd'
import CompEdit from '@/components/baseInfo/CompEdit'

import baseuserAdd from '@/components/baseInfo/baseuserAdd'
import baseuserList from '@/components/baseInfo/baseuserList'
import baseuserEdit from '@/components/baseInfo/baseuserEdit'


import DevtypeList from '@/components/baseInfo/DevtypeList'
import Devtypeadd from '@/components/baseInfo/Devtypeadd'
import Devtypeedit from '@/components/baseInfo/Devtypeedit'

import basedeviceList from '@/components/baseInfo/basedevice/basedeviceList'
import basedeviceadd from '@/components/baseInfo/basedevice/basedeviceadd'
import basedeviceedit from '@/components/baseInfo/basedevice/basedeviceedit'

import Login from '@/components/home/Login'

import baseflowList from '@/components/baseInfo/baseflow/baseflowList'
import baseflowadd from '@/components/baseInfo/baseflow/baseflowadd'
import baseflowedit from '@/components/baseInfo/baseflow/baseflowedit'


import repairList from '@/components/baseInfo/repair/repairList'
import repairadd from '@/components/baseInfo/repair/repairadd'
import repairedit from '@/components/baseInfo/repair/repairedit'



import faultList from '@/components/baseInfo/fault/faultList'
import faultadd from '@/components/baseInfo/fault/faultadd'
import faultedit from '@/components/baseInfo/fault/faultedit'

import reportList from '@/components/baseInfo/report/reportList'
import reportadd from '@/components/baseInfo/report/reportadd'
import reportedit from '@/components/baseInfo/report/reportedit'
import Control from '@/components/baseInfo/report/Control'


import jobList from '@/components/baseInfo/job/jobList'
import jobadd from '@/components/baseInfo/job/jobadd'
import jobedit from '@/components/baseInfo/job/jobedit'


import consumeList from '@/components/baseInfo/enerjyconsume/consumeList'
import consumeadd from '@/components/baseInfo/enerjyconsume/consumeadd'
import consumeedit from '@/components/baseInfo/enerjyconsume/consumeedit'


import standList from '@/components/baseInfo/enerjystand/standList'
import standadd from '@/components/baseInfo/enerjystand/standadd'
import standedit from '@/components/baseInfo/enerjystand/standedit'


import reportsList from '@/components/baseInfo/reports/reportsList'


import consumesList from '@/components/baseInfo/consume/consumesList'

import jobsList from '@/components/baseInfo/jobs/jobsList'

import consumessList from '@/components/baseInfo/consumes/consumessList'
import lylsList from '@/components/baseInfo/lylList/lylsList'
import costList from '@/components/baseInfo/cost/costList'
import welcome from '@/components/home/welcome'
Vue.use(Router)



export default new Router({
	mode:'history',
  routes: [
		 {path: '/Login',name: 'Login',component: Login},
    {
      path: '/',
      name: 'Index',
      component: Index,
	  children:[
				{path:'/',component:welcome,name:'welcome'},
				{path:'CompList',component:CompList,name:CompList},
				{path:'CompAdd',component:CompAdd},
				{path:'CompEdit',component:CompEdit,name:'CompEdit'},
				{path:'DevtypeList',component:DevtypeList,name:DevtypeList},
				{path:'Devtypeadd',component:Devtypeadd},
				{path:'Devtypeedit',component:Devtypeedit,name:'Devtypeedit'},
				{path:'baseuserList',component:baseuserList,name:baseuserList},
				{path:'baseuserAdd',component:baseuserAdd},
				{path:'baseuserEdit',component:baseuserEdit,name:'baseuserEdit'},
				{path:'basedeviceList',component:basedeviceList,name:basedeviceList},
				{path:'basedeviceadd',component:basedeviceadd},
				{path:'basedeviceedit',component:basedeviceedit,name:'basedeviceedit'},
				{path:'baseflowList',component:baseflowList,name:baseflowList},
				{path:'baseflowadd',component:baseflowadd},
				{path:'baseflowedit',component:baseflowedit,name:'baseflowedit'},
				{path:'repairList',component:repairList,name:repairList},
				{path:'repairadd',component:repairadd},
				{path:'repairedit',component:repairedit,name:'repairedit'},
				{path:'faultList',component:faultList,name:faultList},
				{path:'faultadd',component:faultadd},
				{path:'faultedit',component:faultedit,name:'faultedit'},
				{path:'reportList',component:reportList,name:reportList},
				{path:'reportadd',component:reportadd},
				{path:'reportedit',component:reportedit,name:'reportedit'},
				{path:'Control',component:Control,name:Control},
				{path:'jobList',component:jobList,name:jobList},
				{path:'jobadd',component:jobadd},
				{path:'jobedit',component:jobedit,name:'jobedit'},
				{path:'consumeList',component:consumeList,name:consumeList},
				{path:'consumeadd',component:consumeadd},
				{path:'consumeedit',component:consumeedit,name:'consumeedit'},
				{path:'standList',component:standList,name:standList},
				{path:'standadd',component:standadd},
				{path:'standedit',component:standedit,name:'standedit'},
				{path:'reportsList',component:reportsList,name:reportsList},
				{path:'consumesList',component:consumesList,name:consumesList},
				{path:'jobsList',component:jobsList,name:jobsList},
				{path:'consumessList',component:consumessList,name:consumessList},
				{path:'lylsList',component:lylsList,name:lylsList},
				{path:'costList',component:costList,name:costList}			
	  ]
    },
  ]
})
