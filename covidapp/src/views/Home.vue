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
          <img src="" width="100%" height="100%" alt="" srcset="" />
        </div>
        <div class="grey">
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
        <div class="green col"></div>
      </div>
      <div class="blue row">
        <div class="red col">
          <div class="text1">
            <h2>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              ullam ad eligendi
            </h2>
          </div>
        </div>
        <div class="blue col">
          <div class="row green">
            <div class="orange col-4">
              <h2>1023</h2>
            </div>
            <div class="orange col-4">
              <h2>2034</h2>
            </div>
            <div class="orange col-4">
              <h2>874303445</h2>
            </div>
            <div class="text2">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid earum aliquam corrupti repellat ducimus voluptas nemo
                sapiente distinctio? Libero ex aliquam rerum quae facilis
                consectetur qui quas eos odio distinctio.

                <br />
                <br />

                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                earum atque nobis praesentium voluptatem voluptatum accusantium
                sint, autem tempore excepturi, ea est eveniet dignissimos aut
                facilis in quo quis dicta.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="layout-button-register row">
        <div class="text4">
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
            doloremque, <br />
            iste perferendis placeat dolorem nihil voluptatibus eos, <br />
            minima aspernatur qui et officiis.
          </h3>
        </div>
        <router-link to="/Login"><button class="btn btn-info button">Login</button></router-link>
      </div>
      <div class="pink row">
        <div class="col green">
          <div class="text1">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <div class="col blue">
          <div class="text1">
            <ul>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="row footer"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
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
  height: 500px;
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
  height: 15%;
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
  height: 50%;
  width: 80%;
  margin-left: 10%;
}

.layout-button-register {
  margin-top: 100px;
  height: 250px;
  background-color: blanchedalmond;
  padding: 20px;
}

.text4 {
  height: 150px;
  text-align: center;
}

.button {
  width: 200px;
  margin-left: 40%;
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