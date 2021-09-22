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
    <div class="container">
      <div class="container-login row">
        <div class="search-page row">
          <div class="text-card">
            <h2>Angka kasus Covid {Provinsi}</h2>
            <br />
            <h3>3432432</h3>
            <br />
            <p>Berikut Data Rumah Sakit Provinsi Bersangkutan</p>
          </div>
          <div class="container">
            <div class="card-province card row m-2">
              <table border="1">
                <tr>
                  <th>Hospital Name</th>
                  <th>Adress</th>
                  <th>Phone</th>
                  <th>Region</th>
                </tr>
                <tr>
                  <td>
                    RSUD Madani palu kecematan Mamboro privinsi sulawesi tengah
                  </td>
                  <td>Mamboro</td>
                  <td>435435435</td>
                  <td>Mamboro</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Search -->
  </div>
</template>

<script>
export default {
  name: "Search",
};
</script>

<style scoped>
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