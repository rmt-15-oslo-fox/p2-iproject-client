<template>
  <div>
    <Nav></Nav>
    <div class="w-4/5 bg-gray-300 mx-auto mt-20">
      <div class="flex border-b border-black">
        <div id="backdrop" class="w-4/6">
          <img :src="imgUrl">
        </div>
        <div class="w-2/6 py-5 mx-4">
          <p class="text-left text-4xl text-black font-semibold my-2">{{title}}</p>    
          <p class="text-yellow-500 text-2xl text-left my-2"><i class="fas fa-star"></i> {{rating}} / 10</p>
          <p class="text-black text-left my-2 text-xl">Summary:</p>
          <p class="text-black text-left my-2 text-md">{{summary}}</p>
        </div>
      </div>
      <div class="mx-10 mt-5">
        <p class="text-left text-4xl text-black font-semibold my-2">Discussions</p>
        <div v-for="topic in topics" :key="topic.id" class="border border-black w-5/6 px-2 rounded-sm my-5 py-5">
          <p class="text-2xl font-bold text-black text-left">Title</p>
          <p class="text-lg font-medium text-black text-left">Subtitle</p>
          <div class="bg-white border border-black w-1/6 text-left px-2">
            <p class="text-black text-sm">posted by username</p>
            <p class="text-black text-sm">at date</p>
          </div>
        </div>
        <p class="text-2xl text-black py-28" v-if="topics.length === 0">This forum is currently empty, start a conversation</p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/navbar.vue"
export default {
  name: "Detail",
  components: {
    Nav
  },
  methods: {
    fetchTopics() {
      this.$store.dispatch("fetchTopics", {type: this.$route.type, id: this.$route.id})
        .then(res => {
          this.$store.commit("SET_TOPICS", res.data)
        })
        .catch(err => console.log(err.response.data))
    }
  },
  created() {
    this.fetchTopics()
  },
  computed: {
    detail() {
      return this.$store.state.details
    },
    imgUrl() {
      if (this.detail.hasOwnProperty('score')) {
        return this.detail.banner_image
      } else {
        return `http://image.tmdb.org/t/p/w780${this.detail.backdrop_path}`
      }
    },
    title() {
      if (this.detail.hasOwnProperty('score')) {
        return this.detail.titles.en
      } else if (this.detail.hasOwnProperty('adult')) {
        return this.detail.original_title
      } else {
        return this.detail.name
      }
    },
    rating() {
       if (this.detail.hasOwnProperty('score')) {
        const newRate = this.detail.score.toString()
        return newRate.length === 2 ? newRate[0] + "." + newRate[1] : newRate
      } else {
        return this.detail.vote_average
      }
    },
    summary() {
       if (this.detail.hasOwnProperty('score')) {
        return this.detail.description.en
      } else {
        return this.detail.overview
      }
    },
    topics() {
      return this.$store.state.topics
    }
  }
}
</script>

<style>

</style>