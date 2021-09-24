<template>
  <div class="cards-container-comment">
    <div class="card mt-5" style="width: 48rem; height: 10rem; background-color:#C0EC83">
      <div class="card-body" style="text-align: left">
        <h3><b>{{data.commentator}}</b></h3>
        
        <h5 class="mt-3"><i>{{data.comment}}</i></h5>
        <br>
        <h10>{{dateFormat}}</h10>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Comments',
  props: ["data"],
  computed: {
    dateFormat() {
      let theDate = this.data.createdAt.toLocaleString('id-ID').split('T')
      return theDate[1].split('.')[0].split(':')[0] + ':' + theDate[1].split('.')[0].split(':')[1] + ', ' + theDate[0]
    }
  }
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