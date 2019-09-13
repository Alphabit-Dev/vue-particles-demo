<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 order-md-2">
        <!-- Section with image of the proyect -->
        <div><img src="https://www.rocketinsights.com/images/img-overview-virgin-pulse.png" alt=""></div>
      </div>
      <div class="col-xs-12 col-md-6 order-md-1">
        <!-- Section with image of the proyect -->
        <h3>Virgin Pulse</h3>
        <h4>design - development - product strategy</h4>
        <p>We worked with the leader in corporate health and fitness to make health tracking even easier with an intuitive watch app.</p>
        <a href="">Read more about roku</a> 
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'OurWorkItem',
  components: { },
  props: {
    title: String,
    id: String
  }, 
  data: function() {
    return { }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h3 {
    font-size: 2rem;
    line-height: 2rem;
  }
  h4 {
    font-size: 0.7rem;
    line-height: 0.7rem;
    color: red;
  }
  p { 
    font-size: 1rem;
    line-height: 1rem;
  }
</style>
