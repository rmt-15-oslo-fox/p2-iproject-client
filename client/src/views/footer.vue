<template>
  <footer class="b-brown position-relative footer">
    <div class="background-footer pill-9">
      <img
        src="../../public/assets/background/pill-7.svg"
        alt="background"
        class="position-absolute background-footer pil-9"
      />
    </div>

    <div class="footer-content container d-block d-lg-flex row m-auto">
      <div class="image-footer-content col-12 col-lg-6">
        <img
          src="../../public/assets/background/back-footer.svg"
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
          src="../../public/assets/background/logo-footer.svg"
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
            src="../../public/assets/facebook.png"
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
            src="../../public/assets/instagram.png"
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
</template>

<script>
export default {
  name: "footer",
};
</script>

<style>
</style>