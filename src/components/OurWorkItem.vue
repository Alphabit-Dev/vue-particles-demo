<template>
  <div class="container work-card" v-observe-visibility="{
      callback: visibilityChanged,
      throttle,
      intersection: {
        threshold,
      },
    }">
    <div class="row">
      <div class="col-md-6 image-area"
        v-bind:class="{ active: isActive, 'order-md-2': 'order-md-1' }">
        <!-- Section with image of the proyect -->
        <img src="../assets/work_roku_image.jpeg" alt="">
      </div>
      <div class="col-md-6 information-area"
        v-bind:class="{ active: isActive, 'order-md-1': 'order-md-2' }">
        <!-- Section with information of the project -->
        <h3>Virgin Pulse</h3>
        <h4>design - development - product strategy</h4>
        <p>We worked with the leader in corporate health and fitness to make health tracking even easier with an intuitive watch app.</p>
        <div>
          <a class="cta" href="">
            <span>Read More</span>
            <svg width="13px" height="10px" viewBox="0 0 13 10">
              <path d="M1,5 L11,5"></path>
              <polyline points="8 1 12 5 8 9"></polyline>
            </svg>
          </a> 
        </div>
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
    id: String,
    isActive: Boolean,
    imagePosition: String
  }, 
  methods : { 
    visibilityChanged (isVisible, entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('transition-in');
      }
    },
  },
  data: function() {
    return { 
      throttle: 200,
      threshold: 0.5  
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
  
  @mixin hide-animation-x($time) {
    opacity: 0;
    transform: translateX(-50%);
    transition-timing-function: ease-in;
    transition: $time;
  };

  @mixin show-animation-x($time) {
    transition: $time;
    transition-timing-function: ease-out;
    transform: translateX(0);
    opacity: 1;
  }

  .work-card {
    margin-bottom: 60px;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
  h3 {
    @include hide-animation-x(1s);
    font-family: 'Montserrat', sans-serif; 
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-weight: 700;
    letter-spacing: 0.1rem;
    &:before {
      content: " ";
      width: 78px;
      height: 8px;
      display: block;
      background-color: #a71728;
      margin-bottom: 15px;
    }
  }
  h4 {
    @include hide-animation-x(0.5s);
    font-family: 'Montserrat', sans-serif; 
    font-size: 0.7rem;
    line-height: 0.7rem;
    font-weight: 700;
    color: #a71728;
    margin: 20px 0;
  }
  p {  
    @include hide-animation-x(0.3s);
    font-family: 'Montserrat', sans-serif; 
    font-size: 1rem;
    line-height: 1.4rem;
  }
  .information-area {
    padding: 0 50px;
    a {
      text-decoration: none;
      color: #111;
    }
    .cta {
      display: inline-block;
      position: relative;
      padding: 19px 22px;
      transition: all 0.2s ease;
      &:before {
        content: "";
        position: absolute;
        top: 6px;
        left: 0;
        display: block;
        border-radius: 50%;
        background: rgba(167, 23, 40, 1);
        width: 40px;
        height: 40px;
        transition: all 0.3s ease;
      }
      span {
        font-family: 'Montserrat', sans-serif;          
        position: relative;
        font-size: 1rem;
        line-height: 1rem;
        font-weight: 700;
        letter-spacing: 0.1em;
        text-transform: uppercase;
      }
      svg {
        position: relative;
        top: 0;
        margin-left: 10px;
        fill: none;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke: #111;
        stroke-width: 2;
        transform: translateX(-5px);
        transition: all 0.3s ease;
      }
      &:hover:before {
        width: 100%;
        // background: rgba(167, 23, 40, 0.5);
        border-radius: 4px;;

      }
      &:hover span {
        color: #fff;
      }
      &:hover svg {
        transform: translateX(0);
        stroke: #fff;
      }
      &:active {
        transform: scale(0.96);
      }
    }
  }
  .image-area {
    display: flex;
    justify-content: center;
    margin-bottom: 25px;
    img {
      max-width: 250px;
    }
  }
  .transition-in {
    h3 {
      @include show-animation-x(1s);
    }
    h4 {
      @include show-animation-x(0.5s);
    }
    p {
      @include show-animation-x(0.3s); 
    }
  }

  @media (min-width: #{$screen-md-min}) {
    .work-card {
      max-width: 900px;
      margin: auto;
      margin-bottom: 60px;
    }
    .information-area {
      margin: auto;
    }
    .image-area {
      img {
        max-width: 100%;
      }
    }  
  }
   
</style>
