<template>
  <div class="our-services-section">
    <div class="our-services-section-title">
      <h2>Our Services</h2>
    </div>
    <agile :options="carouselSettings">
      <our-service-item :serviceNumber="1"/>
      <our-service-item :serviceNumber="2"/>
      <our-service-item :serviceNumber="3"/>
      <our-service-item :serviceNumber="4"/>
    </agile>
  </div>
</template>
<script>
  import OurServiceItem from "../components/OurServiceItem.vue";
  export default {
    components: { 
      OurServiceItem
    },
    data() {
      return {
        carouselSettings: {
          slidesToShow: 1,
          infinite: true,
          dots: true,
          responsive: [
            {
              breakpoint: 500,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 3
              }
            },
            {
              breakpoint: 1000,
              settings: {
                slidesToShow: 4,
              }
            }
          ]
        }
      };
    },
    mounted() { 
      
    },
    beforeDestroy () { 
      
    },
    methods : {
      
    }
  };
</script>
<style lang="scss">
  // Small tablets and large smartphones (landscape view)
  $screen-sm-min: 576px;
  // Small tablets (portrait view)
  $screen-md-min: 768px;
  // Tablets and small desktops
  $screen-lg-min: 992px;
  // Large tablets and desktops
  $screen-xl-min: 1200px;
  .our-services-section {
    .our-services-section-title {
      padding-top: 40px;
      padding-bottom: 40px;
      h2 {
        font-family: 'Montserrat', sans-serif;
        text-align: center;
        font-size: 2rem;
        line-height: 2rem;
        font-weight: 700;
        letter-spacing: 0.2rem;
        color: #000;
      }
    }
    .agile__actions { 
      .agile__nav-button {
        display: block;
        position: absolute;
        top: calc( 50% - 75px );
        background-color: #fff;
        border: none;
        border-radius: 2px;
        box-shadow: 0 1px 3px #888;
        height: 100px;
        width: 30px;
        &--prev{
          left: 0;
        }
        &--next{
          right: 0;
        }
      } 
    }
    .agile__dots {
      bottom: 10px;
      left: 50%;
      position: absolute;
      -webkit-transform: translateX(-50%);
      transform: translateX(-50%);
    }
    .agile__dot {
      margin: 0 10px;
    }
    .agile__dot button {
      background-color: black;
      border: 1px solid #fff;
      border-radius: 50%;
      cursor: pointer;
      display: block;
      height: 10px;
      font-size: 0;
      line-height: 0;
      margin: 0;
      padding: 0;
      transition-duration: 0.3s;
      width: 10px;
    }
    .agile__dot--current button, .agile__dot:hover button {
      background-color: gray;
    }
  }
  @media (min-width: #{$screen-md-min}) {
    .our-services-section {
      .agile:hover {
        .agile__actions { 
          .agile__nav-button { 
            display: block;
          }
        }
      }
      .agile__actions { 
        .agile__nav-button { 
          display: none;
        }
      }
    }  
  }
</style>