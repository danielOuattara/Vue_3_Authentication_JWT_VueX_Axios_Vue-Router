
import { createWebHistory,createRouter } from "vue-router";
import Home from "./components/Home.vue";
import Login from "./components/Login.vue";
import Register from "./components/Register.vue";

// lazy-load

const Profile = () => import("./components/Profile.vue");
const BoardAdmin = () => import("./components/BoardAdmin.vue");
const BoardModerator = () => import("./components/BoardModerator.vue");
const BoardUSer = () => import("./components/BoardUser.vue");

const routes = [
    { path: "/home"    , component: Home     }, 
    { path: "/login"   , component: Login    }, 
    { path: "/register", component: Register },

    { path: "/"        , name: "home"     , component: Home           }, 
    { path: "/profile" , name: "profile"  , component: Profile        }, 
    { path: "/admin"   , name: "admin"    , component: BoardAdmin     }, 
    { path: "/mod"     , name:"moderator" , component: BoardModerator }, 
    { path: "/user"    , name:"user"      , component: BoardUSer      }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes
});



router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/register', '/home'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});


export default router;