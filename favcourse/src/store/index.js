import Vue from "vue";
import Vuex from "vuex";
import server from "../apis/axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isLoggedIn: false,
    isError: false,
    user: {
      id: "",
      name: "",
      email: "",
      avatar_url: "",
    },
    courses: [],
    course: {},
    carts: [],
    checkoutToken: "",
    categories: [],
  },
  mutations: {
    CHANGE_LOGIN(state, loginCondition) {
      state.isLoggedIn = loginCondition;
    },
    SET_ERROR(state, errorCondition) {
      state.isError = errorCondition;
    },
    SET_USER(state, payload) {
      state.user = payload;
    },
    SET_COURSES(state, payload) {
      state.courses = payload;
    },
    SET_COURSE(state, courseData) {
      state.course = courseData;
    },

    SET_CARTS(state, carts) {
      state.carts = carts;
    },

    SET_TOKEN(state, token) {
      state.checkoutToken = token;
    },

    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
  },
  actions: {
    async registerUser({ commit }, payload) {
      try {
        const { data } = await server({
          url: "/register",
          method: "POST",
          data: payload,
        });
        Vue.$toast.success(`${data.message}, Please Login!`);
      } catch (err) {
        commit("SET_ERROR", true);
        const { data } = err.response;
        const errorMessage = data.errors[0];
        Vue.$toast.error(errorMessage);
      }
    },

    async loginUser({ commit }, payload) {
      try {
        const { data } = await server({
          url: "/login",
          method: "POST",
          data: payload,
        });
        localStorage.setItem("access_token", data.access_token);
        commit("CHANGE_LOGIN", true);
        commit("SET_USER", data.user);
        Vue.$toast.success(data.message);
      } catch (err) {
        commit("SET_ERROR", true);
        const { data } = err.response;
        const errorMessage = data.errors[0];
        Vue.$toast.error(errorMessage);
      }
    },

    async fetchUserProfile({ commit }) {
      try {
        const { data } = await server({
          url: "users/profile",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        commit("SET_USER", data.user);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.message);
      }
    },

    async updateUserProfie({ dispatch }, payload) {
      const form = new FormData();
      form.append("name", payload.name);
      if (typeof payload.avatar_url === "object") {
        form.append("avatar", payload.avatar_url);
      } else {
        form.append("avatar_url", payload.avatar_url);
      }
      try {
        const { data } = await server({
          url: `/users/${payload.id}`,
          method: "PUT",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: form,
        });

        Vue.$toast.success(data.message);
        await dispatch("fetchUserProfile");
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.errors[0]);
      }
    },

    async fetchCourses({ commit }) {
      try {
        const { data } = await server({
          url: "/pub/courses",
          method: "GET",
        });
        commit("SET_COURSES", data.courses);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.message);
      }
    },

    async fetchCourseById({ commit }, courseId) {
      try {
        const { data } = await server({
          url: `/pub/courses/${courseId}`,
          method: "GET",
        });
        commit("SET_COURSE", data.course);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.message);
      }
    },

    async addCourseToCart(context, courseId) {
      try {
        const { data } = await server({
          url: "/carts",
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            CourseId: courseId,
          },
        });
        Vue.$toast.success(data.message);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.errors[0]);
      }
    },

    async fetchCarts({ commit }) {
      try {
        const { data } = await server({
          url: "/carts",
          method: "GET",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });

        commit("SET_CARTS", data.carts);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.message);
      }
    },

    async fetchCheckout({ commit }, coursesIds) {
      try {
        const { data } = await server({
          url: "/checkout",
          method: "POST",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: {
            coursesIds: coursesIds,
          },
        });
        commit("SET_TOKEN", data.token);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.errors[0]);
      }
    },

    async fetchClearCart({ commit }) {
      try {
        await server({
          method: "DELETE",
          url: "/carts",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
        });
        commit("SET_CARTS", []);
        Vue.$toast.success("Success checkout");
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.message);
      }
    },

    async fetchCreateCourse(context, payload) {
      try {
        const data = new FormData();
        data.append("thumbnail_url", payload.thumbnail_url);
        data.append("title", payload.title);
        data.append("description", payload.description);
        data.append("category", payload.category);
        data.append("course_level", payload.course_level);
        data.append("price", payload.price);
        const response = await server({
          method: "POST",
          url: "/courses",
          headers: {
            access_token: localStorage.getItem("access_token"),
          },
          data: data,
        });
        Vue.$toast.success(response.data.message);
      } catch (error) {
        const { data } = error.response;
        Vue.$toast.error(data.errors[0]);
      }
    },

    async fetchCategories({ commit }) {
      try {
        const { data } = await server({
          url: "/pub/categories",
          method: "GET",
        });
        commit("SET_CATEGORIES", data.categories);
      } catch (error) {
        Vue.$toast.error("Failed get data categories");
      }
    },
  },
  getters: {
    totalPrice(state) {
      let totalPrice = 0;
      state.carts.forEach((e) => {
        totalPrice += e.Course.price;
      });
      return totalPrice;
    },
    getPrice: () => (priceCourse) => {
      return `Rp ${priceCourse
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}`;
    },
  },
  modules: {},
});
