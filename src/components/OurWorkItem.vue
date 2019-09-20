<template>
  <div class="container work-card" v-observe-visibility="{
      callback: visibilityChanged,
      throttle,
      intersection: {
        threshold,
      },
    }">
    <div class="row">
      <!-- Section with image of the proyect -->
      <div class="col-md-6 image-area"
        v-bind:class="[isInfoColFirst ? 'order-md-2' : 'order-md-1']">
        <span class="cube middle mobile-hidden"></span>
        <span class="cube top mobile-hidden"></span>
        <span class="cube bottom mobile-hidden"></span>
        <img src="../assets/work_roku_image.jpeg" alt="">
      </div>
      <!-- Section with information of the project -->
      <div class="col-md-6 information-area"
        v-bind:class="[isInfoColFirst ? 'order-md-1' : 'order-md-2']">
        <span class="svg-triangle-container">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 586 524" style="enable-background:new 0 0 586 524;" xml:space="preserve">
            <pattern  x="95" y="-63" width="12" height="12" patternUnits="userSpaceOnUse" id="New_Pattern" viewBox="0 -12 12 12" style="overflow:visible;">
              <g>
                <rect y="-12" class="st0" width="12" height="12"/>
                <circle class="st1" cx="6" cy="-6" r="1.5"/>
              </g>
            </pattern>
            <pattern  id="SVGID_1_" xlink:href="#New_Pattern" patternTransform="matrix(1 0 0 1 -99 0)">
            </pattern>
            <polygon class="st2" points="1.5,7 288.5,522 589.5,3 "/>
          </svg>
        </span>
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
    isInfoColFirst: Boolean
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
  /* Safari 4.0 - 8.0 */
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    8.33%, 25% {
      transform: rotate(180deg);
    }
    33.33%, 50% {
      transform: rotate(0deg);
    }
    58.33%, 75% {
      transform: rotate(180deg);
    }
    83.33%, 100% {
      transform: rotate(0deg);
    }
  }
  .mobile-hidden {
    display: none !important;
  }
  .work-card {
    margin-bottom: 60px;
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
    &:hover {
      .cta:before {
        animation: spin 7s infinite;
      }
    }
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
        display: none;
        width: 0;
        height: 0;
        border-left: 30px solid transparent;
        border-right: 30px solid transparent;
        border-top: 60px solid #a71728;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: -80px;
        margin-top: -18px;
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
    &.order-md-2 {
      .svg-triangle-container { 
        margin-left: 176px !important;
      }
      h3 {
        &:before {
          border-left: 30px solid transparent;
          border-right: 30px solid transparent;
          border-bottom: 60px solid #a71728;
          border-top: none;
          right: 0;
          left: unset;
          margin-top: -35px;
          margin-left: 0;
        }
      }
    }
    .svg-triangle-container {
      display: block;
      position: absolute;
      width: 350px;
      top: 0;
      left: 0;
      margin-left: -176px;
      margin-top: -55px;
      opacity: .4;
      .st0{ fill:none; }
      .st1{ fill:#B3B3B3; }
      .st2{ fill:url(#SVGID_1_); }
    }
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
        // border-radius: 50%;
        background: rgba(167, 23, 40, 1);
        width: 20px;
        height: 20px;
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
        text-decoration: underline;
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
        height: 50px;
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
    &.order-md-1 {
      .cube {
        left: 0;
        right: unset;
        &.top {
          margin-top: -30px;
          margin-left: 19px;
        }
        &.bottom {
          margin-top: 30px;
          margin-left: -19px;
        }
      }
    } 
    img {
      max-width: 250px;
    }
    .cube {
      display: block;
      width: 5px;
      height: 5px;
      background-color: #a71728;
      position: absolute;
      top: 0;
      right: 0;
      &.top {
        margin-top: -30px;
        margin-right: 19px;
      }
      &.bottom {
        margin-top: 30px;
        margin-right: -19px;
      }
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
    .mobile-hidden {
      display: block !important;
    }
    .work-card {
      max-width: 900px;
      margin: auto;
      margin-bottom: 60px;
    }
    .information-area {
      margin: auto;
      h3 {
        &:before {
          display: block;
        }
      }
    }
    .image-area {
      img {
        max-width: 100%;
      }
    }  
  }   
</style>
