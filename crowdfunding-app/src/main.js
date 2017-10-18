import Vue from 'vue'
import App from './app.vue'
import Home from './vues/home.vue'
import About from './vues/about.vue'
import Project from './vues/project.vue'
import Contact from './vues/contact.vue'
import Profile from './vues/profile.vue'
import CreateNew from './vues/create_new.vue'
import MyProject from './vues/my_project.vue'
import MyPledge from './vues/my_pledge.vue'
import UserModify from './vues/user_modify.vue'
import ProjectDetail from './vues/project_detail.vue'
import LoginProject from './vues/login_project.vue'
import LoginContact from './vues/login_contact.vue'
import LoginAbout from './vues/login_about.vue'


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSession from 'vue-session';
import VueInstant from 'vue-instant';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession);
Vue.use(VueInstant);
// Vue.http.options.emulateJSON = true;
const routes = [
    {
        path: "/",
        component: Home
    },
    {
        path: "/about",
        component: About
    },
    {
        path: "/project",
        component: Project
    },
    {
        path: "/contact",
        component: Contact
    },
    {
        path: "/profile",
        component: Profile,
        meta: { requiresAuth: true }
    },
    {
        path: "/create_new",
        component: CreateNew,
        meta: { requiresAuth: true }
    },
    {
        path: "/my_project",
        component: MyProject,
        meta: { requiresAuth: true }
    },
    {
        path: "/project_detail/:pro_id",
        component: ProjectDetail,
    },
    {
        path: "/my_pledge",
        component: MyPledge,
        meta: { requiresAuth: true }
    },
    {
        path: "/user_modify",
        component: UserModify,
        meta: { requiresAuth: true }
    },
    {
        path: "/login_project",
        component: LoginProject,
        meta: { requiresAuth: true }
    },
    {
        path: "/login_contact",
        component: LoginContact,
        meta: { requiresAuth: true }
    },
    {
        path: "/login_about",
        component: LoginAbout,
        meta: { requiresAuth: true }
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});

let session_storage = window.sessionStorage;
router.beforeEach((to, from, next) => {
    console.log(session_storage.getItem('islogin'));
    console.log(to.meta.requiresAuth);
    if (to.meta.requiresAuth && session_storage.getItem('islogin')=='false') {
        alert('Must login first!');
        next('/');
        return
    }
    next()
});


new Vue({
  el: '#app',
    router: router,
  render: h => h(App)
});


