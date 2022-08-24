import { createRouter, createWebHashHistory ,} from 'vue-router'
// import { createRouter, createWebHistory } from 'vue-router'



const routes = [
    {
        path: '/',
        name: 'HomeVue',
        component: () => import('../views/Home.vue')

        
    },
    {
        path: '/Products',
        name: 'ProductsVue',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Products.vue'),
    },

    {
        path: '/Knowlege',
        name: 'KnowlegeVue',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/Knowlege.vue'),
    },


    {
        path: '/About',
        name: 'AboutVue',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        
        children: [
            {
                path: '/Company',
                name: 'CompanyVue',
                component: () => import('../views/about/Company.vue'),
            },

            {
                path: '/Qualification',
                name: 'QualificationVue',
                component: () => import('../views/about/Qualification.vue'),
            },

            {
                path: '/Activity',
                name: 'ActivityVue',
                component: () => import('../views/about/Activity.vue'),
            },

            {
                path: '/Contact',
                name: 'ContactVue',
                component: () => import(/* webpackChunkName: "Contact" */'../views/about/Contact.vue'),
            },

    

         
        ], redirect: 'Company'


    },

    {
        path:'/AGMUHD1',
        name:'AGMUHD1Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGMUHD1.vue'),
        
    },

    {
        path:'/AGMHD3',
        name:'AGMHD3Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGMHD3.vue'),

       
        
    },
    
    {
        path:'/AGMHD2',
        name:'AGMHD2Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGMHD2.vue'),

       
        
    },

    {
        path:'/AGMHD1',
        name:'AGMHD1Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGMHD1.vue'),

       
        
    },

    {
        path:'/AGSPL',
        name:'AGSPL1Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGSPL.vue'),

       
        
    },

   

    {
        path:'/AGS102L',
        name:'P102LVue',
        component: ()=> import('../views/product/Details/AGS102L.vue'),

      
    },

    {
        path:'/AGS102LM',
        name:'P102LMVue',
        component: ()=> import('../views/product/Details/AGS102LM.vue'),

      
    },
    {
        path:'/AGS210',
        name:'P210Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGS210.vue'),

      
        
    },
    {
        path:'/AGS200',
        name:'P200Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGS200.vue'),

      
        
    },
    {
        path:'/AGS100',
        name:'P100Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGS100.vue'),

      
        
    },

    {
        path:'/AGMFHD',
        name:'AGMFHDVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/AGMFHD.vue'),

      
        
    },

    {
        path:'/Custom',
        name:'CustomVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/Custom.vue'),

      
        
    },

    {
        path:'/Monitor',
        name:'MonitorVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/product/Details/Monitor.vue'),

      
        
    },


    {
        path:'/Usbpe',
        name:'UsbpeVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Usb.vue'),

      
        
    },

    {
        path:'/Copper',
        name:'CoppernewVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Copper.vue'),

      
        
    },

    {
        path:'/Shcms',
        name:'ShcmsVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Shcms.vue'),

      
        
    },

    {
        path:'/Japmat',
        name:'JapmatVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Japmat.vue'),

      
        
    },

    {
        path:'/Shenzed',
        name:'ShenzedVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Shenzed.vue'),

    },

    {
        path:'/Shenzef',
        name:'ShenzefVue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/Shenzef.vue'),

    },

    {
        path:'/cmef84',
        name:'cmef84Vue',
        component: () => import(/* webpackChunkName: "about" */ '../views/about/News/detail/cmef84.vue'),

    },

]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    // history: createWebHistory(process.env.BASE_URL),

    // history: createWebHashHistory(),
    //
    mode:'hash',
    //mode:'history',
    base: process.env.BASE_URL,
    routes,
   
   
     // 每次切换路由的时候滚动到页面顶部
    scrollBehavior () {
        return { lift: 0, top: 0 }
    }

    


})



export default router
