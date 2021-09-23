<template>
  <div>
    <NavBar />
    <SearchForum />
    <div v-if="!this.$store.state.commentForm">
      <img class="page-bg" src="https://ik.imagekit.io/xvfgr2ixls8/undraw_selection_re_ycpo_rJ4HcWx1W.png?updatedAt=1632395861914" alt="">
      <h2>Join our investment community!</h2>
    </div>
    <div class="mt-4">
    <h1 v-if="this.$store.state.stockToComment"><b>{{this.$store.state.stockToComment}}</b></h1>
    </div>
    <div v-if="this.$store.state.commentForm">
      <Comments
      v-for="data in forumData"
      :key="data.id"
      :data="data"
      />
      <CommentForm/>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import SearchForum from '@/components/SearchForum.vue'
import Comments from '@/components/Comments.vue'
import CommentForm from '@/components/CommentForm.vue'
export default {
  name: 'Forums',
    components: {
    NavBar,
    Footer,
    SearchForum,
    Comments,
    CommentForm
  },
  computed: {
    forumData () {
      return this.$store.state.forumData
    }
  }
}
</script>

<style>
.page-bg {
  height: 40%;
  width: 40%;
} 
</style>