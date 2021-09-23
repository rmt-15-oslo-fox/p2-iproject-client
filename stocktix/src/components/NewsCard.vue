<template>
  <div class="card mt-4 ml-4 mr-4 mb-4 col-3" style="height: 70%;">
    <img :src="news.urlToImage" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title"><b>{{news.title}}</b></h5>
      <p class="card-text">{{news.description}}</p>
      <br>
      <a :href="news.url" 
      target="_blank" rel="noopener noreferrer"
      class="btn btn-dark rounded-pill">Read more</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewsCard',
  props: ["news"]
}
</script>

<style>

</style>