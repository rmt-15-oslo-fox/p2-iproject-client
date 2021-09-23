import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginPage from "../views/LoginPage.vue";
import RegisterPage from "../views/RegisterPage.vue";
import MyProfile from "../views/MyProfile.vue";
import CourseDetail from "../views/CourseDetail.vue";
import MyCart from "../views/MyCart.vue";
import CreateCourse from "../views/CreateCourse.vue";
import MyCourses from "../views/MyCourses.vue";
import MyLearning from "../views/MyLearning.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage,
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage,
  },
  {
    path: "/profile",
    name: "MyProfile",
    component: MyProfile,
  },
  {
    path: "/courses/:id",
    name: "CourseDetail",
    component: CourseDetail,
  },
  {
    path: "/cart",
    name: "MyCart",
    component: MyCart,
  },
  {
    path: "/new-course",
    name: "CreateCourse",
    component: CreateCourse,
  },
  {
    path: "/instructors",
    name: "Instructors",
    component: MyCourses,
  },
  {
    path: "/learning",
    name: "MyLearning",
    component: MyLearning,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem("access_token");

  if (to.name === "Login" || to.name === "Register") {
    if (token) {
      next({ name: "Home" });
    } else {
      next();
    }
  } else if (to.name !== "Home" && !token && to.name !== "CourseDetail") {
    next({ name: "Login" });
  } else {
    next();
  }
});

export default router;