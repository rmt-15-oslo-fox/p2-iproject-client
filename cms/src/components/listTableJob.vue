<template>
  <tr>
    <th scope="row">{{ numb + 1 }}</th>
    <td>{{ item.title }}</td>
    <td>{{ item.description }}</td>
    <td><img :src="item.imgUrl" width="100px" :alt="item.title" /></td>
    <td>{{ item.jobType }}</td>
    <td>{{ item.status }}</td>
    <td>
      <button @click="deleteItem()" class="btn btn-danger">Delete</button>
      <button @click="editJob" class="btn btn-success">Edit</button>
    </td>
  </tr>
</template>

<script>
import axios from "axios";
import swal from "sweetalert";
export default {
  name: "JobList",
  props: ["item", "numb"],
  methods: {
    editJob() {
      this.$emit("changePage", "editJob");
    },
    deleteItem() {
      const url = "http://localhost:3000";
      axios({
        method: "DELETE",
        url: `${url}/jobs/${this.item.id}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((res) => {
          swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this file!",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          }).then((willDelete) => {
            if (willDelete) {
              this.$emit("fetchJob");
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your file is safe!");
            }
          });
        })
        .catch((err) => {
          swal("You cannot delete this file!", "", "error");
        });
    },
  },
};
</script>

<style>
</style>