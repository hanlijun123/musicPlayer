import Vue from 'vue'
import Router from 'vue-router'

/*import rank from 'components/rank/rank'
import recommend from 'components/recommend/recommend'
import singer from 'components/singer/singer'
import search from 'components/search/search'
import singerdetail from 'components/singer-detail/singer-detail'
import disc from 'components/disc/disc'
import toplist from 'components/top-list/toplist'
import usercenter from 'components/usercenter/usercenter'*/

Vue.use(Router);

const recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}

const singer = (resolve) => {
  import('components/singer/singer').then((module) => {
    resolve(module)
  })
}

const rank = (resolve) => {
  import('components/rank/rank').then((module) => {
    resolve(module)
  })
}

const search = (resolve) => {
  import('components/search/search').then((module) => {
    resolve(module)
  })
}

const singerdetail = (resolve) => {
  import('components/singer-detail/singer-detail').then((module) => {
    resolve(module)
  })
}

const disc = (resolve) => {
  import('components/disc/disc').then((module) => {
    resolve(module)
  })
}

const toplist = (resolve) => {
  import('components/top-list/toplist').then((module) => {
    resolve(module)
  })
}

const usercenter = (resolve) => {
  import('components/usercenter/usercenter').then((module) => {
    resolve(module)
  })
}


/*const Recommend = (resolve) => {
  import('components/recommend/recommend').then((module) => {
    resolve(module)
  })
}*/

export default new Router({
    mode:'history',
    routes:[
    {path:'/',redirect:'/recommend'},
    {path:'/recommend',component:recommend,children:[{path:':id',component:disc}]},
    {path:'/rank',component:rank,children:[{path:':id',component:toplist}]},
    {path:'/singer',component:singer,children:[{path:':id',component:singerdetail}]},
    {path:'/search',component:search,children:[{path:':id',component:singerdetail}]},
    {path:'/user',component:usercenter}
    ],
})

