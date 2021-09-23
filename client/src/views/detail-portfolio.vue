<template>
  <main>
    <div class="main-top">
      <div class="main-banner d-flex justify-content-center mb-100">
        <img src="../../public/assets/detail-1.png" alt="" class="w-100 z-99" />
      </div>
    </div>

    <div class="main-middle">
      <div class="container row m-auto pb-4">
        <div class="col-md-7 offset-1">
          <h4 class="mb-60 offset-2">
            <span class="c-orange f-s-18">01</span>
            <span class="font-weight-bold f-s-18 c-darker op-3">Context</span>
          </h4>
          <p class="font-weight-bold f-s-18 c-darker">
            We’re so honored to have the responsibility to help PT. Nutrifood
            Indonesia reach their goals, what this company struggling with, is
            how their product can reach out more market especially small market
            in Indonesia
          </p>
        </div>
        <div class="col-md-3">
          <h4 class="mb-3">
            <span class="c-orange f-s-18">02</span>
            <span class="font-weight-bold c-darker f-s-18 op-3">Service</span>
          </h4>
          <p class="c-orange f-s-18">Content Production</p>
          <p class="c-orange f-s-18">Creative Service</p>
          <p class="c-orange f-s-18">KOL Management</p>
        </div>
      </div>
      <div class="container mb-80">
        <h4 class="mb-3 col-md-10 offset-2">
          <span class="c-orange f-s-18">03</span>
          <span class="font-weight-bold c-darker f-s-18 op-3">Solution</span>
        </h4>
        <p class="f-s-18 col-md-8 offset-2">
          Based on an original idea from McCann, we had the not-so-simple task
          of crafting a compelling, emotionally engaging and immersive web
          experience relying heavily on an existing real-life art installation,
          composed of hundreds of balloons displaying hate messages received by
          Louise, a local teenager who committed suicide a few years before.
        </p>
      </div>
      <div class="mb-150">
        <h4 class="mb-2 container">
          <span class="c-orange col-md-10 offset-2 f-s-18">04</span
          ><span class="font-weight-bold c-darker f-s-18 op-3">Result</span>
        </h4>
        <div class="slider glider-contain multiple">
          <div class="glider glider-wrap mr-0">
            <div class="image-content-detail mr-2">
              <img
                src="../../public/assets/detail-2.png"
                alt=""
                class="w-100"
              />
            </div>
            <div class="image-content-detail mr-2">
              <img
                src="../../public/assets/detail-3.png"
                alt=""
                class="w-100"
              />
            </div>
            <div class="image-content-detail mr-2">
              <img
                src="../../public/assets/detail-4.png"
                alt=""
                class="w-100"
              />
            </div>
            <div class="image-content-detail mr-2">
              <img
                src="../../public/assets/detail-5.png"
                alt=""
                class="w-100"
              />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      class="
        main-bottom-content main-bottom-content-about
        pt-5
        pb-md-0
        mt-150
        pb-5
        w-90
        b-linear-brown
        position-relative
      "
    >
      <img
        src="../../public/assets/background/back-project-left.svg"
        alt=""
        class="h-100 position-absolute l-0 back-portfolio t-0 d-md-block d-none"
      />
      <img
        src="../../public/assets/background/back-project-right.svg"
        alt=""
        class="h-100 position-absolute r-0 t-0 d-md-block d-none back-portfolio"
      />

      <h3
        class="
          content-bottom
          f-s-48
          font-weight-bold
          text-white text-center
          w-md-50
          m-auto
          fs-500-24
          z-99
          position-relative
        "
      >
        Apa aja sih yang pernah <br />
        dikerjain Dagelan ?
      </h3>
      <div class="card-artikel-group mt-md-0 mt-5">
        <div class="card-artikel-main d-block d-md-flex justify-content-center">
          <a
            href="/detail-portfolio.html"
            class="card-artikel-2 mt-2 mt-md-0 hvr-wobble-vertical"
          >
            <div class="card card-artikel">
              <img
                class="card-img-artikel m-auto h-100"
                src="../../public/assets/project-1.png"
                alt="image product"
              />
              <div class="card-body body-project position-absolute b-0">
                <h4 class="font-weight-bold f-s-36 c-white">Lifebuoy</h4>
                <p class="f-s-18 c-white">Content Development & Design</p>
              </div>
            </div>
          </a>
          <a
            href="detail-portfolio.html"
            class="card-artikel-2 pt-md-0 pt-3 hvr-wobble-vertical"
          >
            <div class="card card-artikel">
              <img
                class="card-img-artikel m-auto h-100"
                src="../../public/assets/project-2.png"
                alt="image product"
              />
              <div class="card-body body-project position-absolute b-0">
                <h4 class="font-weight-bold f-s-36 c-white">Lifebuoy</h4>
                <p class="f-s-18 c-white">Content Development & Design</p>
              </div>
            </div>
          </a>
          <a
            href="detail-portfolio.html"
            class="card-artikel-3 hvr-wobble-vertical pt-md-0 pt-3"
          >
            <div class="card card-artikel position-relative">
              <img
                class="card-img-artikel m-auto h-100"
                src="../../public/assets/project-3.png"
                alt="image product"
              />
              <div class="card-body body-project position-absolute b-0">
                <h4 class="font-weight-bold f-s-36 c-white">Lifebuoy</h4>
                <p class="f-s-18 c-white">Content Development & Design</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div class="btn-more-artikel mt-5 text-center">
        <a
          href="portfolio.html"
          class="
            btn-find-more-artikel
            b-yellow
            text-center
            f-s-16
            c-brown
            font-weight-bold
            text-decoration-none
            hvr-brown
          "
        >
          Lihat Semua Portfolio
        </a>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "detail-portfolio",
};
</script>

<style>
</style>