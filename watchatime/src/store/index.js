import { createStore } from 'vuex';
import db from '../api/db';
import { useToast } from 'vue-toastification';

const toast = useToast();

export default createStore({
    state: {
        movies: [],
        moviesData: {},
        movie: {},
        tv: {},
        anime: {},
        event: {},
        tvs: [],
        tvsData: {},
        animes: [],
        animesData: [],
        events: [],
        eventsData: [],
        error: '',
        isLoggedIn: false,
        user: {},
    },
    mutations: {
        SET_IS_LOGGED_IN(state, payload) {
            state.isLoggedIn = payload;
        },
        SET_USER(state, payload) {
            state.user = payload;
        },
        SET_ERROR(state, payload) {
            state.error = payload;
        },
        SET_TVS(state, payload) {
            state.tvs = payload;
        },
        SET_MOVIES(state, payload) {
            state.movies = payload;
        },
        SET_ANIMES(state, payload) {
            state.animes = payload;
        },
        SET_EVENTS(state, payload) {
            state.events = payload;
        },
        SET_MOVIE(state, payload) {
            state.movie = payload;
        },
        SET_ANIME(state, payload) {
            state.anime = payload;
        },
        SET_TV(state, payload) {
            state.tv = payload;
        },
        SET_EVENT(state, payload) {
            state.event = payload;
        },
        SET_MOVIES_DATA(state, payload) {
            state.moviesData = payload;
        },
        SET_ANIMES_DATA(state, payload) {
            state.animesData = payload;
        },
        SET_TVS_DATA(state, payload) {
            state.tvsData = payload;
        },
        SET_EVENTS_DATA(state, payload) {
            state.eventsData = payload;
        },
    },
    actions: {
        async actionFetchMovies(context, page) {
            try {
                let url = '/movies';
                if (page) {
                    url += `?page=${page}`;
                }
                const response = await db.get(url);
                const movies = response.data.results;
                context.commit('SET_MOVIES_DATA', response.data);
                context.commit('SET_MOVIES', movies);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Movies!');
            }
        },
        async actionFetchTV(context, id) {
            try {
                const response = await db.get(`/tvs/${id}`);
                const tv = response.data;
                context.commit('SET_TV', tv);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching TV!');
            }
        },
        async actionFetchTvs(context, page) {
            try {
                let url = '/tvs';
                if (page) {
                    url += `?page=${page}`;
                }
                const response = await db.get(url);
                const tvs = response.data.results;
                context.commit('SET_TVS_DATA', response.data);
                context.commit('SET_TVS', tvs);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Tvs!');
            }
        },
        async actionFetchAnime(context, id) {
            try {
                const response = await db.get(`/animes/${id}`);
                const anime = response.data.data;
                context.commit('SET_ANIME', anime);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Anime!');
            }
        },
        async actionFetchAnimes(context, page) {
            try {
                let url = '/animes';
                if (page) {
                    url += `?page=${page}`;
                }
                const response = await db.get(url);
                const animes = response.data.data.documents;
                context.commit('SET_ANIMES_DATA', response.data.data);
                context.commit('SET_ANIMES', animes);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Animes!');
            }
        },
        async actionFetchMovie(context, id) {
            try {
                const response = await db.get(`/movies/${id}`);
                const movie = response.data;
                context.commit('SET_MOVIE', movie);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Movie!');
            }
        },
        async actionFetchEvents(context) {
            try {
                let token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error();
                }
                const response = await db({
                    method: 'GET',
                    url: '/events',
                    headers: {
                        access_token: token,
                    },
                });
                const events = response.data;

                context.commit('SET_EVENTS', events);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Fetching Events!');
            }
        },
        async actionFetchFilterMovies(context, payload) {
            try {
                const response = await db.get(`/public/movies${payload}`);
                const movies = response.data.movies;
                context.commit('SET_MOVIES_DATA', response.data);

                context.commit('SET_MOVIES', movies);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionLogin(context, payload) {
            try {
                const response = await db({
                    method: 'post',
                    url: '/users/login',
                    data: {
                        email: payload.email,
                        password: payload.password,
                    },
                });
                localStorage.setItem('access_token', response.data.access_token);
                context.commit('SET_IS_LOGGED_IN', true);
                toast.success('Login Success, Welcome');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Logining');
            }
        },
        async actionRegister(context, payload) {
            try {
                await db({
                    method: 'post',
                    url: '/users/register',
                    data: {
                        email: payload.email,
                        password: payload.password,
                        username: payload.username,
                    },
                });
                toast.success('Register Success, Login to Continue');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Register');
            }
        },
        async actionGoogleSignIn(context, payload) {
            try {
                const result = await db({
                    method: 'post',
                    url: '/users/googleRegister',
                    data: { id_token: payload },
                });
                localStorage.setItem('access_token', result.data.access_token);
                localStorage.setItem('id_token', payload);
                context.commit('SET_IS_LOGGED_IN', true);
                toast.success('Login Success, Welcome');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Google Logining');
            }
        },
        async actionLogout(context) {
            try {
                localStorage.clear();
                context.commit('SET_IS_LOGGED_IN', false);
                toast.success('Logout Success');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Logout');
            }
        },
        async actionAddEvents(context, payload) {
            try {
                const { start, end, summary, status } = payload;
                let token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error();
                }
                await db({
                    method: 'post',
                    url: `/events`,
                    headers: {
                        access_token: token,
                    },
                    data: { start, end, summary, status },
                });
                toast.success('Event added');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Adding Events');
            }
        },
        async actionPatchEvents(context, id) {
            try {
                let token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error();
                }
                await db({
                    method: 'patch',
                    url: `/events/${id}`,
                    headers: {
                        access_token: token,
                    },
                });
                toast.success('Event Updated');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Adding Events');
            }
        },
        async actionDeleteEvents(context, id) {
            try {
                let token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error();
                }
                await db({
                    method: 'delete',
                    url: `/events/${id}`,
                    headers: {
                        access_token: token,
                    },
                });
                toast.success('Event Deleted');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Deleting Events');
            }
        },
        async actionUpdateEvents(context, payloadedit) {
            try {
                let token = localStorage.getItem('access_token');
                if (!token) {
                    throw new Error();
                }
                const { payload, id } = payloadedit;
                console.log(payload);
                await db({
                    method: 'put',
                    url: `/events/${id}`,
                    headers: {
                        access_token: token,
                    },
                    data: payload,
                });
                toast.success('Event Updated');
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
                toast.error('Error Updating Events');
            }
        },
    },
    modules: {},
});