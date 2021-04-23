import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";
import Home from "@/components/Home";
import Register from "@/components/Register";
import General from "@/components/General";
import Topics from "@/components/Topics";
import ForgotPassword from "@/components/ForgotPassword";
import Latest from "@/components/Latest";
import Bookmarks from "@/components/Bookmarks";
import All from "@/components/All";


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/general', name: "General",component: General},
        {path:'/latest', name: "Latest", component:Latest},
        { path: '/topics', name: "Topics",component: Topics},
        { path: '/bookmarks', name: "Bookmarks",component: Bookmarks},

    { path: '/login', component: Login},
    { path: '/', name: "Home", component: Home},
    { path: '/register', name: "Register", component: Register},
    {path:'/forgot', name:"Forgot", component: ForgotPassword},
    {path:'/all', name: "All", component:All},
    ]
});

