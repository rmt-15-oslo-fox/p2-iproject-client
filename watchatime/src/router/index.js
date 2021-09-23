import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import NotFound from '../views/NotFound.vue';
import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Auth/Login.vue';
import Register from '../views/Auth/Register.vue';
import MovieList from '../views/Movies/MovieList.vue';
import TVList from '../views/Tvs/TVList.vue';
import AnimeList from '../views/Animes/AnimeList.vue';
import EventList from '../views/Events/EventList.vue';
import MovieDetails from '../views/Movies/MovieDetails.vue';
import TVDetails from '../views/Tvs/TVDetails.vue';
import AnimeDetails from '../views/Animes/AnimeDetails.vue';

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
        path: '/events',
        name: 'Events',
        component: EventList,
    },
    {
        path: '/tvshows',
        name: 'TVs',
        component: TVList,
    },
    {
        path: '/animes',
        name: 'Animes',
        component: AnimeList,
    },
    {
        path: '/movies/:id',
        name: 'MovieDetails',
        component: MovieDetails,
    },
    {
        path: '/tvs/:id',
        name: 'TVDetails',
        component: TVDetails,
    },
    {
        path: '/animes/:id',
        name: 'AnimesDetails',
        component: AnimeDetails,
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
router.beforeEach((to, from, next) => {
    if (to.name === 'Dashboard' && !localStorage.getItem('access_token')) {
        next({ name: 'Login' });
    } else if (to.name === 'Login' && localStorage.getItem('access_token')) {
        next({ name: 'Dashboard' });
    } else if (to.name === 'Register' && localStorage.getItem('access_token')) {
        next({ name: 'Dashboard' });
    } else next();
});

export default router;