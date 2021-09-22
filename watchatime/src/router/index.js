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
import CompletedList from '../views/Events/CompletedList.vue';

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
        path: '/completed',
        name: 'Completed',
        component: CompletedList,
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
        path: '/animes/:id',
        name: 'AnimesDetails',
        component: () =>
            import ('../views/Animes/AnimeDetails.vue'),
    },
    {
        path: '/events/:id',
        name: 'EventDetails',
        component: () =>
            import ('../views/Events/EventDetails.vue'),
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