<template>
  <div id="app" v-scroll="onScroll" class="mt-5 h-60 scroll">
      <incoming-msg></incoming-msg>
      <incoming-msg></incoming-msg>
      <send-msg></send-msg>
      <incoming-msg></incoming-msg>
  <!-- <div class="card" 
    v-for="(card, index) in styledCards"
    :style="card.style"
    :key="index">     
    <div class="card__content">
      <h3>{{card.title}}</h3>
      <p>{{card.description}}</p>
    </div>
  </div> -->
</div>
</template>

<script>
import IncomingMsg from '../components/IncomingMsg.vue'
import SendMsg from '../components/SendMsg.vue'
export default {
    name: 'ChatRoom',
    data: function(){
        return {
            cards: [],
            scrollPosition: 0
        }
    },
    components: {
        IncomingMsg,
        SendMsg
    },
  filters: {
    // oneDecimal: function (value) {
    //   return value.toFixed(1)
    // },
    // toStars: function (value) {
    //   let result = ''
    //   while(result.length < value) {
    //     result+='★' 
    //   }
    //   return result
    // }
  },
  computed: {
    // styledCards () {
    //   return this.cards.map(this.calculateCardStyle)
    // }
  },
  methods: {
    // onScroll () {
    //   this.scrollPosition = window.scrollY
    // },
    // calculateCardStyle (card, index) {
    //   const cardHeight = 160 // height + padding + margin
      
    //   const positionY = index * cardHeight
    //   const deltaY = positionY - this.scrollPosition

    //   // constrain deltaY between -160 and 0
    //   const dY = this.clamp(deltaY, -cardHeight, 0)

    //   const dissapearingValue = (dY / cardHeight) + 1
    //   const zValue = dY / cardHeight * 50
    //   const yValue = dY / cardHeight * -20

    //   card.style = {
    //     opacity: dissapearingValue,
    //     transform: `perspective(200px) translate3d(0,${yValue}px, ${zValue}px)`
    //   }
    //   return card
    // },
    // clamp (value, min, max) {
    //   return Math.min(Math.max(min, value), max)
    // }
  }
}
</script>

<style>
/* body {
  background-color: #FEFEFE;
}
.card {
  height: 20px;
  background-color: white;
  padding: 5px;
  margin-bottom: 10px;
  font-family: Helvetica;
  box-shadow: 0px 3px 8px 0px rgba(0,0,0,0.5);
}

.card__image {
  display: inline-block;
  margin-right: 10px;
}

.card__content {
  display: inline-block;
  position: relative;
  vertical-align: top;
  width: calc(100% - 120px);
  height: 10px;
}

.card__content h3 {
  margin: 0;
}

.card__rating {
  position: absolute;
  bottom: 0;
}

.card__stars--active {
  color: #41377C;
}
.card__stars--inactive {
  color: #CCCCCC;
} */
.scroll {
   overflow-y: scroll
}
</style>