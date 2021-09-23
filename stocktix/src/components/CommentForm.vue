<template>
  <div class="cards-container-comment">
    <div class="card mt-5" style="width: 48rem; height: 14rem; background-color:#C0EC83">
      <div class="card-body mt-3" style="text-align: left">
        <form @submit.prevent="addComment">
          <textarea v-model="comment" required name="comment" cols="75" rows="4"></textarea>
          <button type="submit" class="btn-lg btn-dark rounded-pill mt-2">Post</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data() {
    return {
      comment: ''
    }
  },
  methods: {
    async addComment() {
      await this.$store.dispatch('addComment', {
        stockName: this.$store.state.stockToComment,
        comment: this.comment
      })
      await this.$store.dispatch('fetchForum', this.$store.state.stockToComment)
      this.comment = ''
    }
  },
}
</script>

<style>
.cards-container-comment {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: column;
}
</style>