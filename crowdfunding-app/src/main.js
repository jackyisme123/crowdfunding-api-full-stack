import Vue from 'vue'
import App from './app.vue'
import Home from './vues/home.vue'
import About from './vues/about.vue'
import Project from './vues/project.vue'
import Contact from './vues/contact.vue'
import Profile from './vues/profile.vue'


import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VueSession from 'vue-session';
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.use(VueSession);
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
        component: Profile
    }
];

const router = new VueRouter({
    routes: routes,
    mode: 'history'
});


new Vue({
  el: '#app',
    router: router,
  render: h => h(App)
});


