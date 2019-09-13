<template>
  <div class="col-md-6">
      <h1>
        {{title}}
      </h1>
      <hero-btn 
        v-for="btn in btns"
        v-bind:key="btn.id"
        v-bind:title="btn.title" 
      ></hero-btn>
  </div> 
</template>
<script>
import HeroBtn from './HeroBtn.vue'
export default {
  name: 'Hero',
  components: {
    HeroBtn
  },
  props: {
    title: String
  }, 
  data: function() {
    return {
      btns: [
        { id:"1", title: 'btn one' },
        { id:"2", title: 'btn two' },
        { id:"3", title: 'btn three' }
      ]
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
