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
    <!-- Main Feature -->
    <div id="Main-feature">
      <div class="container">
        <!-- Maps -->
        <div class="container-login row">
          <div class="search-page row">
            <div class="page-login col-7" style="background-color: gray">
              <l-map style="height: 100%" :zoom="zoom" :center="center">
                <l-marker :lat-lng="center"></l-marker>
                <l-tile-layer
                  :url="url"
                  :attribution="attribution"
                ></l-tile-layer>
                <l-marker :lat-lng="markerLatLng"></l-marker>
              </l-map>
            </div>
            <div class="login col">
              <br /><br /><br /><br /><br />
              <h2>HOSPITAL IN YOUR CITY</h2>
              <br /><br /><br /><br />
              <form>
                <select class="form-select" aria-label="Default select example">
                  <option selected>Open this select menu</option>
                  <option
                    value="1"
                    v-for="location in dataLocation"
                    :key="location.id"
                    @click="changeLocation(location)"
                  >
                    {{ location.name }}
                  </option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Icon } from "leaflet";
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

export default {
  name: "Login",
  components: {
    LMap,
    LTileLayer,
    LMarker,
  },
  data() {
    return {
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution:
        '© <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      zoom: 17,
      center: [-0.789287, 119.869477],
      bounds: null,
      dataLocation: [],
    };
  },
  methods: {
    changeLocation(location) {
      this.center = [location.pointX, location.pointY];
    },
  },
  created() {
    this.$store
      .dispatch("getDataLocation")
      .then((resp) => {
        this.dataLocation = resp.data;
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