import { createStore } from 'vuex';
import db from '../api/db';

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
            state.tvsData = payload;
        },
        SET_TVS_DATA(state, payload) {
            state.animesData = payload;
        },
        SET_EVENTS_DATA(state, payload) {
            state.eventsData = payload;
        },
    },
    actions: {
        async actionFetchMovies(context) {
            try {
                const response = await db.get('/public/movies');
                const movies = response.data.data;
                context.commit('SET_MOVIES_DATA', response.data);
                context.commit('SET_MOVIES', movies);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionFetchTV(context, id) {
            try {
                const response = await db.get(`/tvs/${id}`);
                const tv = response.data;
                context.commit('SET_TV', tv);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionFetchTvs(context) {
            try {
                const response = await db.get('/tvs');
                const tvs = response.data.data;
                context.commit('SET_TVS_DATA', response.data);
                context.commit('SET_TVS', tvs);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionFetchAnime(context, id) {
            try {
                const response = await db.get(`/animes/${id}`);
                const anime = response.data;
                context.commit('SET_ANIME', anime);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionFetchAnimes(context) {
            try {
                const response = await db.get('/animes');
                const tvs = response.data.documents;
                context.commit('SET_ANIMES_DATA', response.data);
                context.commit('SET_ANIMES', tvs);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionFetchMovie(context, id) {
            try {
                const response = await db.get(`/public/movies/${id}`);
                const movie = response.data;
                context.commit('SET_MOVIE', movie);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
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
                    url: '/events/',
                    headers: {
                        access_token: token,
                    },
                });
                const events = response.data;

                context.commit('SET_EVENTS', events);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
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
                    url: '/user/login',
                    data: payload,
                });
                localStorage.setItem('access_token', response.data.access_token);
                context.commit('SET_IS_LOGGED_IN', true);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionRegister(context, payload) {
            try {
                await db({
                    method: 'post',
                    url: '/user/register',
                    data: payload,
                });
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionGoogleSignIn(context, payload) {
            try {
                const result = await db({
                    method: 'post',
                    url: '/user/googleAuth',
                    data: { id_token: payload },
                });
                localStorage.setItem('access_token', result.data.access_token);
                localStorage.setItem('id_token', payload);
                context.commit('SET_IS_LOGGED_IN', true);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
        async actionLogout(context) {
            try {
                localStorage.clear();
                context.commit('SET_IS_LOGGED_IN', false);
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
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
                    url: `/events/${payload.id}`,
                    headers: {
                        access_token: token,
                    },
                    data: { start, end, summary, status },
                });
            } catch (err) {
                context.commit('SET_ERROR', err.response.data);
            }
        },
    },
    modules: {},
});