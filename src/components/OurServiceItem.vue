<template>
  <div class="container">
    <div class="row">
      <div class="col-12 card">
        <img src="../assets/img-strategy.png" alt="">
        <h2>{{serviceNumber}}</h2>
        <h3>Product Strategy</h3>
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
    serviceNumber: Number
  }, 
  methods : { },
  data: function() {
    return { }
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
  .row {
    padding-left: 10px;
    padding-right: 10px;
    margin: 0;
  }
  .card {
    padding: 40px 25px;
    -webkit-box-shadow: 0 7px 28px 0 rgba(0,0,0,0.1);
    box-shadow: 0 7px 28px 0 rgba(0,0,0,0.1);
    margin-top: 20px;
    margin-bottom: 20px;
    border: none;
  }
  img {
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h2 {
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin-top: 20px;
    color: gray;
  }
  h3 {
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    margin-bottom: 20px;
    margin-top: 20px;
  }
  p {
    font-family: 'Montserrat', sans-serif; 
    font-size: 0.875rem;
    line-height: 1.2rem;
    font-weight: 500;
  }
  @media (min-width: #{$screen-md-min}) {
  }   
</style>
