<template>
  <tr>
    <th scope="row">{{ numb + 1 }}</th>
    <td>{{ item.entityId }}</td>
    <td>{{ item.title }}</td>
    <td>{{ item.description }}</td>
    <td>{{ item.updatedBy }}</td>
  </tr>
</template>

<script>
import axios from "axios";
export default {
  name: "historyList",
  props: ["item", "numb"],
  methods: {
    fetchItem() {
      const url = "http://localhost:3000";
      axios({
        method: "GET",
        url: `${url}/history`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          this.$emit("fetchItem");
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style>
</style>