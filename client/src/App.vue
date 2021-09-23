<template>
  <div id="app">
    <header
      v-if="currentPage === 'home'"
      class="
        b-linear-orange
        pt-0 pt-md-2
        b-pink
        pb-70
        header-top
        position-relative
        header-90
      "
    >
      <div class="navigasi z-99 position-relative">
        <nav class="navbar navbar-expand-lg container">
          <router-link
            to="/"
            class="
              navbar-brand
              order-2 order-lg-1
              m-auto
              d-flex
              justify-content-center justify-content-lg-start
            "
          >
            <img src="../public/assets/logo.png" alt="logo" class="logo" />
          </router-link>
          <button
            class="navbar-toggler order-1"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon">
              <img
                src="../public/assets/menu.png"
                alt=""
                width="24px"
                height="24px"
              />
            </span>
          </button>
          <div class="collapse navbar-collapse order-md-2" id="navbarNav">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item active">
                <router-link
                  to="/"
                  class="
                    nav-link
                    f-s-18
                    c-brown
                    txt-decoration-none
                    hvr-brown
                    font-weight-bold
                  "
                  >Home</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  to="/about"
                  class="
                    nav-link
                    f-s-18
                    c-brown
                    txt-decoration-none
                    hvr-brown
                    font-weight-bold
                  "
                  >About</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  to="/portfolio"
                  class="
                    nav-link
                    f-s-18
                    c-brown
                    txt-decoration-none
                    hvr-brown
                    font-weight-bold
                  "
                  >Portfolio</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  to="/partner"
                  class="
                    nav-link
                    f-s-18
                    c-brown
                    txt-decoration-none
                    hvr-brown
                    font-weight-bold
                  "
                  >Colaborative Partner</router-link
                >
              </li>
              <li class="nav-item active">
                <router-link
                  to="/contact"
                  class="
                    nav-link
                    f-s-18
                    c-brown
                    txt-decoration-none
                    hvr-brown
                    font-weight-bold
                  "
                  >Contact</router-link
                >
              </li>
            </ul>
          </div>
        </nav>
      </div>

      <div class="background position-absolute">
        <img
          src="../public/assets/background/pill-6.svg"
          alt="background top"
          width="70%"
        />
      </div>
      <img
        src="../public/assets/background/pill-4.svg"
        alt=""
        class="position-absolute l-0 b-0 back-top-brown"
      />

      <div class="main-header d-block d-md-flex container position-relative">
        <div class="txt-head container d-block z-99">
          <h1 class="f-s-64 font-weight-bold c-dark mt-5 mb-5 fs-500-36">
            Dagelan percaya kebahagiaan itu untuk dibagikan
          </h1>
          <div class="arrow-group mb-5 w-50 d-flex align-items-start">
            <router-link
              to="/"
              class="
                b-white
                mr-0 mr-md-2
                d-flex
                justify-content-center
                align-items-center
                text-center
                b-pink
                py-2
                px-2
                br-62
                txt-deoration-none
              "
            >
              <img
                src="../public/assets/arrow-down-circle.png"
                alt=""
                class="arrow-down-icon"
              />
              <span
                class="
                  txt-kepoin
                  f-s-23
                  fs-700-18 fs-500-16
                  font-weight-bold
                  txt-decoration-none
                  c-brown
                  ml-2
                "
              >
                Kepoin Yuk
              </span>
            </router-link>
          </div>
        </div>

        <div class="image-head container">
          <div class="background-main-pill">
            <img
              src="../public/assets/background/pill-5.svg"
              alt="background"
              class="position-absolute background-main-1"
            />
            <img
              src="../public/assets/background/pill-2.svg"
              alt="background"
              class="position-absolute background-main-2"
            />
            <img
              src="../public/assets/background/pill-1.svg"
              alt="background"
              class="position-absolute background-main-3"
            />
            <img
              src="../public/assets/background/pill-3.svg"
              alt="background"
              class="position-absolute background-main-4"
            />
          </div>
          <div class="mask-group position-relative">
            <img
              src="../public/assets/background/Mask-2.svg"
              alt="background"
              class="mask-2 mt-3 position-relative z-99 hvr-bob-1"
            />
            <img
              src="../public/assets/background/Mask-1.svg"
              alt="background"
              class="mask-1 position-realtive z-99 hvr-bob r-0"
            />
          </div>
        </div>
      </div>
    </header>

    <router-view />

    <footer class="b-brown position-relative">
      <div class="background-footer pill-9">
        <img
          src="../public/assets/background/pill-7.svg"
          alt="background"
          class="position-absolute background-footer pil-9"
        />
      </div>

      <div class="footer-content container d-block d-lg-flex row m-auto">
        <div class="image-footer-content col-12 col-lg-6">
          <img
            src="../public/assets/background/back-footer.svg"
            class="w-100"
            alt="image footer"
          />
        </div>

        <div class="contact col-12 col-lg-6 align-self-lg-end">
          <h3
            class="
              txt-footer-content
              text-white
              f-s-48
              fs-500-24
              font-weight-bold
              w-100
              col-12 col-lg-10
              m-auto
            "
          >
            Masih Kepo? <br />
            Hubungi Kami
          </h3>
          <form class="pt-5 col-12 col-lg-10 m-auto">
            <div class="form-row">
              <div class="form-group col-12 col-lg-6">
                <input
                  type="text"
                  class="form-control"
                  id="inputEmail4"
                  placeholder="Nama"
                />
              </div>
              <div class="form-group col-12 col-lg-6">
                <input
                  type="Email"
                  class="form-control"
                  id="inputPassword4"
                  placeholder="Email"
                />
              </div>
            </div>
            <div class="form-group">
              <input
                type="text"
                class="form-control"
                id="inputAddress"
                placeholder="Perusahaan"
              />
            </div>
            <div class="form-group">
              <select id="inputState" class="form-control">
                <option selected>Topik</option>
                <option>...</option>
              </select>
            </div>
            <div class="form-group">
              <textarea
                class="form-control"
                placeholder="Tuliskan pesan"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div class="btn-submit-group d-flex justify-content-end">
              <button
                type="submit"
                class="btn btn-submit b-yellow c-brown font-weight-bold"
              >
                Kirim
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="container d-block d-lg-flex footer-top row m-auto">
        <div
          class="
            logo-group
            col-12 col-lg-3
            d-flex
            justify-content-center justify-content-lg-start
          "
        >
          <img
            src="../public/assets/background/logo-footer.svg"
            alt="logo footer"
          />
        </div>

        <div class="navigation-footer col-12 col-lg-7 text-center mt-5 mt-lg-0">
          <ul
            class="
              d-block d-lg-flex
              h-100
              align-items-center
              justify-content-center
              g-50
            "
          >
            <li class="list-unstyled">
              <a
                href="./index.html"
                class="text-decoration-none f-s-16 font-weight-bold text-white"
                >Home</a
              >
            </li>
            <li class="list-unstyled mt-3 mt-lg-0">
              <a
                href="./portfolio.html"
                class="text-decoration-none f-s-16 font-weight-bold text-white"
                >Portfolio</a
              >
            </li>
            <li class="list-unstyled mt-3 mt-lg-0">
              <a
                href="./partner.html"
                class="text-decoration-none f-s-16 font-weight-bold text-white"
                >Colaborative Partner</a
              >
            </li>
            <li class="list-unstyled mt-3 mt-lg-0">
              <a
                href="./contact.html"
                class="text-decoration-none f-s-16 font-weight-bold text-white"
                >Contact</a
              >
            </li>
          </ul>
        </div>

        <div
          class="
            sosial-media-footer
            justify-content-center
            col
            align-self-center
            justify-content-lg-end
            d-flex
            mt-5 mt-lg-0
          "
        >
          <a
            href="https://www.facebook.com/dagelan.co/"
            target="_blank"
            class="
              btn
              soc-med
              rounded-circle
              b-yellow
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <img
              src="../public/assets/facebook.png"
              alt="facebook icon"
              width="24px"
            />
          </a>
          <a
            href="https://www.instagram.com/dagelan/"
            target="_blank"
            class="
              btn
              soc-med
              rounded-circle
              b-yellow
              d-flex
              justify-content-center
              align-items-center
            "
          >
            <img
              src="../public/assets/instagram.png"
              alt="instagram icon"
              width="24px"
            />
          </a>
        </div>
      </div>
      <div class="footer-bottom">
        <p class="text-center f-s-14 text-white pt-3 pb-3 mb-0">
          Copyright 2021 PT. Infia Media Pratama. All Rights Reserved.
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
</style>

<script>
export default {
  data() {
    return {
      currentPage: "home",
    };
  },
};
</script>


