import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import landingpages from '../views/landing-pages.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import MovieList from '../views/Movies/MovieList.vue';
import TVList from '../views/Tvs/TVList.vue';

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard,
    },
    {
        path: '/landing',
        name: 'Landing',
        component: landingpages,
    },
    {
        path: '/register',
        name: 'Register',
        component: Register,
    },
    {
        path: '/movies',
        name: 'Movies',
        component: MovieList,
    },
    {
        path: '/tvshows',
        name: 'TVs',
        component: TVList,
    },
    {
        path: '/movies/:id',
        name: 'MovieDetails',
        component: () =>
            import ('../views/Movies/MovieDetails.vue'),
    },
    {
        path: '/tvs/:id',
        name: 'TVDetails',
        component: () =>
            import ('../views/Tvs/TVDetails.vue'),
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue'),
    },
    { path: '/:notFound(.*)', component: NotFound },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;