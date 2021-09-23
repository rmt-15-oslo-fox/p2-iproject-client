<template>
  <div>
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <title>Page 1</title>
    </head>
    <!-- Home Page -->
    <div id="Home-Page">
      <div class="red row mt-3 mb-2 first-layout">
        <div class="pink col-9">
          <img
            src="https://kkpyogyakarta.com/joimg/artikel/mengenal-lebih-dalam-covid19-169-covid19.png"
            width="100%"
            height="100%"
            alt=""
            srcset=""
          />
        </div>
        <div class="grey">
          <br /><br />
          <h1>Berikut adalah jumlah pasien positif dan dirawat</h1>
        </div>
        <div class="green col"></div>
      </div>
      <div class="blue row">
        <div class="red col">
          <div class="text1">
            <h2>Tingkat Kematian Akibat Virus Corona (COVID-19)</h2>
          </div>
        </div>
        <div class="blue col">
          <div class="row green">
            <div class="orange mb-2 col-4">
              <p>Jumlah pasien positif</p>
              <h2>{{ dataCovidIndo.jumlah_positif }}</h2>
            </div>
            <div class="orange mb-4 col-4">
              <p>Jumlah pasien sembuh</p>
              <h2>{{ dataCovidIndo.jumlah_sembuh }}</h2>
            </div>
            <div class="orange mb-5 col-4">
              <p>Tanggal</p>
              <h2>{{ dataCovidIndo.tanggal }}</h2>
            </div>
            <div class="text2">
              <p>
                Virus Corona yang menyebabkan COVID-19 bisa menyerang siapa
                saja. Menurut data yang dirilis Gugus Tugas Percepatan
                Penanganan COVID-19 Republik Indonesia, jumlah kasus
                terkonfirmasi positif hingga 06 Agustus 2021 adalah 3.568.331
                orang dengan jumlah kematian 102.375 orang. Tingkat kematian
                (case fatality rate) akibat COVID-19 adalah sekitar 2,9%.
                <br />
                <br />
                Jika dilihat dari persentase angka kematian yang di bagi menurut
                golongan usia, maka kelompok usia >60 tahun memiliki persentase
                angka kematian yang lebih tinggi dibandingkan golongan usia
                lainnya.
                <br /><br />
                Sedangkan berdasarkan jenis kelamin, 53,1% penderita yang
                meninggal akibat COVID-19 adalah laki-laki dan 46,9% sisanya
                adalah perempuan.
              </p>
            </div>
          </div>
        </div>
      </div>
      <br /><br /><br />
      <div class="layout-button-register row">
        <div class="text4">
          <h3>
            Lakukan Login Untuk mendapatkan Fitur Tambahan <br /><br />
            Silahkan Baca keuntungan Login
          </h3>
        </div>
        <router-link to="/Login"
          ><button class="btn btn-info button">Login</button></router-link
        >
      </div>
      <div class="pink row">
        <div class="col green">
          <div class="text1">
            <h3>Mengapa Harus Login ?</h3>
            <h6>Di bawah ini keuntungan jika melakukan login :</h6>
            <ul>
              <li>Akan membuka fitur search untuk semua user</li>
              <li>
                Dapat membuka fitur map untuk user yang kotanya telah ada dalam
                map
              </li>
              <li>
                ketika melakukan register dengan akun gmail. email akan dikirim
                jika ada updetan terkait aplikasi
              </li>
            </ul>
          </div>
        </div>
        <div class="col blue">
          <div class="text1">
            <h3>Ayo Tetap Lakukan</h3>
            <ul>
              <li>Mencuci Tangan</li>
              <li>Menjaga Jarak</li>
              <li>Memakai Masker</li>
              <li>Makan Yang Makanan Yang Sehat</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row footer">
        <HFooter></HFooter>
      </div>
    </div>
  </div>
</template>

<script>
import HFooter from "vue-hacktiv8-footer";
export default {
  name: "Home",
  data() {
    return {
      dataCovidIndo: {},
    };
  },
  components: {
    HFooter,
  },
  created() {
    this.$store
      .dispatch("getDataCovidIndo")
      .then((resp) => {
        this.dataCovidIndo = resp.data;
      })
      .catch((err) => {
        const msg = err.response.data.msg;
        this.$swal.fire({
          icon: "error",
          title: `${msg}`,
          text: "Please Enter Valid Email/Password",
        });
      });
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
.red {
  height: 500px;
  padding-top: 70px;
}

.blue {
  padding-top: 100px;
}

.green {
  height: 500px;
  padding: 20px;
}

.pink {
  height: 480px;
  margin-left: 50px;
}

.grey {
  background-color: rgb(94, 94, 94);
  height: 200px;
  width: 450px;
  position: absolute;
  margin-top: 18%;
  margin-left: 55%;
  border-radius: 0px 20px;
  border: 3px solid rgb(61, 44, 44);
  box-shadow: 2px 5px 6px 3px;
  color: #ffff;
}

a:hover {
  color: blanchedalmond;
  font-weight: bold;
}

.first-layout {
  position: relative;
  box-sizing: border-box;
}

.orange {
  background-color: rgba(231, 172, 63, 0.699);
  border: 2px solid black;
  text-align: center;
  padding-top: 15px;
  color: rgba(187, 0, 0, 0.836);
}

.text1 {
  width: 50%;
  height: 30%;
  margin-top: 15%;
  margin-left: 30%;
}

.text2 {
  padding-top: 50px;
  width: 80%;
}

.layout-button-register {
  margin-top: 100px;
  height: 250px;
  background-color: blanchedalmond;
  padding: 20px;
  text-align: center;
}

.text4 {
  height: 150px;
}

.button {
  width: 200px;
  margin: 0 auto;
  height: 50px;
}

.footer {
  background-color: black;
  height: 200px;
}

.container-login {
  height: 100vh;
}

.login-page {
  height: 80vh;
  margin-top: 10vh;
  padding: 20px 150px;
  box-shadow: 1px 2px 20px -1px;
}

.login {
  background-color: rgba(102, 186, 189, 0.836);
  height: 100%;
  text-align: center;
}

.page-login {
  height: 100%;
}

.button-login {
  border: 2px solid blanchedalmond;
  padding: 2px;
  width: 250px;
  background-color: blanchedalmond;
}

.test {
  height: 400px;
  margin-top: 180px;
  text-align: center;
  color: #ffff;
}

.search-page {
  height: 80vh;
  margin-top: 10vh;
  padding: 20px 150px;
  box-shadow: 1px 2px 20px -1px;
  background-color: rgb(34, 44, 63);
  overflow: scroll;
}

.search {
  width: 800px;
  border: 2px solid rgba(219, 211, 211, 0.788);
  border-radius: 20px;
}

/* .card-province {
    height: 100px;
} */

.text-card {
  color: #ffff;
  text-align: center;
}
</style>