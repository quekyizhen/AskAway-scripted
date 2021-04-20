import Vue from 'vue'
import Router from 'vue-router'
import Login from "@/components/Login";
import Home from "@/components/Home";
import Profile from "@/components/Profile";
import Settings from "@/components/Settings";
import Account from "@/components/Account";
import Register from "@/components/Register";
import General from "@/components/General";
import Topics from "@/components/Topics";
import ForgotPassword from "@/components/ForgotPassword";
import Latest from "@/components/Latest";
import Bookmarks from "@/components/Bookmarks";


Vue.use(Router)

export default new Router({
    routes: [
        { path: '/general', name: "General",component: General},
        {path:'/latest', name: "Latest", component:Latest},
        { path: '/topics', name: "Topics",component: Topics},
        { path: '/bookmarks', name: "Bookmarks",component: Bookmarks},
        { path: '/profile', name: "Profile",component: Profile,
            children: [
                {path:'', component:Account},
                {path:'settings',component:Settings}
            ]
        },
    { path: '/login', component: Login},
    { path: '/', name: "Home", component: Home},
    { path: '/register', name: "Register", component: Register},
    {path:'/forgot', name:"Forgot", component: ForgotPassword}
    ]
});

