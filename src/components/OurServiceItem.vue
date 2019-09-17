<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <img src="../assets/img-strategy.png" alt="">
        <h2>Product Strategy</h2>
        <p>We’ll work with you to take all your great ideas and turn them into a focused, goal-oriented product strategy that we can execute on successfully together.</p>
      </div>
    </div>
  </div> 
</template>
<script>
export default {
  name: 'OurWorkItem',
  components: { },
  props: {
    
  }, 
  methods : { 
    
  },
  data: function() {
    return { 
      
    }
  }
}
</script>

<style scoped lang="scss">
  $color: #111;
  $primary: #FFAB9D;
  // Small tablets and large smartphones (landscape view)
  $screen-sm-min: 576px;
  // Small tablets (portrait view)
  $screen-md-min: 768px;
  // Tablets and small desktops
  $screen-lg-min: 992px;
  // Large tablets and desktops
  $screen-xl-min: 1200px;
  .container {
    padding: 20px;
    -webkit-box-shadow: 0 7px 28px 0 rgba(0,0,0,0.1);
    box-shadow: 0 7px 28px 0 rgba(0,0,0,0.1);
  }
  img {
    display: block;
    margin: 0 auto;
    max-height: 320px;
  }
  h2 {
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
  }
  p {
    font-family: 'Montserrat', sans-serif; 
    font-size: 0.875rem;
    line-height: 0.875rem;
    font-weight: 500;
  }

  @media (min-width: #{$screen-md-min}) {
      
  }
   
</style>
