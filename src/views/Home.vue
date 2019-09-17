<template>
<div>
  <div class="home">
    <div class="body">
      <div class="content">
        <div class="nav-container">
          <div class=navs>
              <a class="scene" href="#our_work_section">
                <div class="box">
                  <span class="box__face box__face--front">ABOUT</span>
                  <span class="box__face box__face--top">ABOUT</span>  
                </div>
              </a>
              <a class="scene">
                <div class="box">
                  <span class="box__face box__face--front">WORKS</span>
                  <span class="box__face box__face--top">WORKS</span>  
                </div>
              </a>
          </div>
        </div>
        <div class="container-particles">
          <!-- particles.js container -->
          <vue-particles 
            color="#b8b7b7"
            :particleOpacity="1"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            linesColor="#fff"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="repulse"
            :clickEffect="true"
            clickMode="push"
          ></vue-particles>
        </div>
        <div class="our-message-container">
          <p class="lbl-description">WE ARE</p>
          <h2 class="lbl-title"></h2>
        </div>
      </div>
    </div>  
    <div class="link-logo-container">
      <a href="">
        <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 452 450"><title>Artboard 1</title>
          <path d="M280.48,332.36c-10.58,19.73-19.93,37.15-31.33,58.42-17.73-18.22-34.12-34.39-49.47-51.49-2.53-2.82-2.3-10.58-.33-14.55,7.57-15.21,16.37-29.81,23.65-42.76l-64.87-62.55c-10.27,5.93-24.2,13.19-37.24,21.8-9.22,6.09-16.53,5.52-24-2.06-13.46-13.71-27-27.36-42.47-43.06L112,164.65,70.18,126c33.34-5.3,62.78-11,92.51-13.93,7-.69,14.93,8.14,24.18,13.63,46.41-24.44,94.57-49.79,142.71-75.18C347.67,41,366.06,32,383.66,21.56c9.8-5.78,15.77-3.84,23.3,3.91,20.37,21,20.72,20.61,7.56,46.32C384.75,129.93,355.14,188.16,325,246.11c-4.73,9.12-6.77,15.84,2.38,23.54,3.56,3,6.16,10,5.55,14.62-3.72,28.7-8.48,57.26-13.42,89.27Zm18.73-151.29c0-18.33-17.61-35.77-36.11-35.73-19.52,0-36.68,17.38-36.65,37,0,18.58,17.47,36.14,35.74,36C281.08,218.19,299.19,200,299.21,181.07Zm58.38-68.86c0-14.2-12.11-26.07-26.14-25.58-13.18.45-24.79,12.38-24.81,25.49,0,14,12.15,25.64,26.4,25.24A25.14,25.14,0,0,0,357.59,112.21Z"/>
          <path d="M82.51,394.34c13.55-10.67,24.3-12.15,39.92-2.22C194.69,438.06,289.59,430.2,354.16,375,419.9,318.86,442.06,229,409.85,149.1c-8.51-21.09-8.51-21.09,3.91-41.42,41.72,47.25,60.65,172.77-19.46,263.37C313.41,462.55,172.35,473.48,82.51,394.34Z"/>
          <path d="M51.73,360.55c-51-52.09-78.63-176.81-2.09-274.5C128.23-14.26,259.9-18.46,336.38,30.45c-12.71,10-23.58,14.74-41.16,7.86-77.73-30.4-165.59-7-219.65,56.09C21.28,157.82,11.49,248.27,53.31,320,62.57,335.9,63.24,347.53,51.73,360.55Z"/>            
          <path class="path-fire" d="M51.36,393.35C65.46,364.77,77.83,339.3,90.58,314a269.69,269.69,0,0,1,16.72-29.55c8.56-12.71,17.62-26.89,35.72-24.45,19.15,2.58,31.9,16.34,37.6,33.22,3,9,.09,22.59-5.13,31-5.57,9-16.18,16-26,21.06C117.94,361.64,85.75,376.65,51.36,393.35Z"/>
          <path class="path-fire-z" d="M51.36,393.35C65.46,364.77,77.83,339.3,90.58,314a269.69,269.69,0,0,1,16.72-29.55c8.56-12.71,17.62-26.89,35.72-24.45,19.15,2.58,31.9,16.34,37.6,33.22,3,9,.09,22.59-5.13,31-5.57,9-16.18,16-26,21.06C117.94,361.64,85.75,376.65,51.36,393.35Z"/>
        </svg>
        <svg style="width:0;height:0;position:absolute;" aria-hidden="true" focusable="false">
          <linearGradient id="my-cool-gradient" x2="1" y2="1">
            <stop offset="0%" stop-color="#ff0000" />
            <stop offset="50%" stop-color="#ff6a00" />
            <stop offset="100%" stop-color="#ffdd00" />
          </linearGradient>
        </svg>
      </a>
    </div>
  </div>
  <div class="our-work-section" id="our_work_section">
    <div class="our-work-section-title">
      <h2>Our Work</h2>
    </div>
    <our-work-item
      v-for="btn in btns"
      v-bind:key="btn.id"
      v-bind:title="btn.title" 
      v-bind:isActive="btn.isActive" 
    />
  </div>
  <div class="our-services-section">
    <agile :initial-slide="3" :dots="false" :infinite="true" :autoplay-speed="1000" :slidesToShow="1" centerPadding="10%" :centerMode="true" :responsive="responsiveCarouselSettings">
      <!-- <img class="slide" src="https://images.unsplash.com/photo-1506260408121-e353d10b87c7?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1524260855046-f743b3cdad07?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1526080676457-4544bf0ebba9?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1426170042593-200f250dfdaf?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/>
      <img class="slide" src="https://images.unsplash.com/photo-1529815481058-55e5b656f6d6?ixlib=rb-1.2.1&amp;q=85&amp;fm=jpg&amp;crop=entropy&amp;cs=srgb&amp;w=1600&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE0NTg5fQ"/> -->
      <our-service-item
        v-for="btn in btns"
        v-bind:key="btn.id"
        v-bind:title="btn.title" 
        v-bind:isActive="btn.isActive" 
      />
    </agile>
  </div>
</div>
</template>

<script>
  import OurWorkItem from "../components/OurWorkItem.vue";
  import OurServiceItem from "../components/OurServiceItem.vue";
  import { log } from 'util';
  export default {
    components: { 
      OurWorkItem,
      OurServiceItem
    },
    data() {
      return {
        btns : [
          {
            id: "001",
            title: "Title 1",
            isActive: true,
            informationPosition: "2"
          },
          {
            id: "002",
            title: "Title 2",
            isActive: false,
            informationPosition: "2"
          },
          {
            id: "003",
            title: "Title 3",
            isActive: true,
            informationPosition: "2"
          },
          {
            id: "004",
            title: "Title 4",
            isActive: false,
            informationPosition: "2"
          }
        ],
        responsiveCarouselSettings: [
          {
            breakpoint: 700,
            settings: {
              slidesToShow: 3,
              centerPadding: "10%",
              centerMode: true
            }
          },
          {
            breakpoint: 1000,
            settings: {
              slidesToShow: 5,
              centerPadding: "10%",
              centerMode: true
              }
            }
          ]
      };
    },
    mounted() { 
      this.createInteractInterval();
    },
    beforeDestroy () { 
      this.stopIteractInterval();
    },
    methods : {
      createInteractInterval: function() {   
        log("Function - createInteractInterval()")
        this.labelsArray = [
          "bold",
          "creative",
          "interactive",
          "fun",
          "alphabit"
        ];
        this.iLblPositionInArray = 0;         
        this.interactLabelInterval = setInterval( function() {
            if (this.iLblPositionInArray >= this.labelsArray.length) {
              this.iLblPositionInArray = 0
            }
            let newStr = this.labelsArray[this.iLblPositionInArray];
            document.getElementsByClassName('lbl-title')[0].innerHTML = newStr;
            this.iLblPositionInArray++;
        }.bind(this), 100);
      },
      stopIteractInterval: function() {
        clearInterval(this.interactLabelInterval);
      },
      animateWorkCards: function() {
      }
    }
  };
</script>

<style scoped lang="scss">
  $box-width: 200px;
  $box-height: 76px;
  $box-translate-z: 38px;
  
  .come-in {
    transform: translateY(150px);
    animation: come-in 0.8s ease forwards;
  }
  .come-in:nth-child(odd) {
    animation-duration: 0.6s;
  }
  .already-visible {
    transform: translateY(0);
    animation: none;
  }

  @keyframes come-in {
    to { transform: translateY(0); }
  }

  .home {
    background-color: #777;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
    width: 100vw;
    height: 100vh;
  }
  .body {
    background-color: #161616;
    background-position: center;
    height: calc(100% - 50px);
    margin: 25px;
    position: relative;
  }
  .link-logo-container {
    position:absolute;
    top: 9%;
    width: 100%;
    a {
      display: block;
      width: 120px;
      margin:auto;
      svg {
        fill: #fff;
        .path-fire,.path-fire-z { 
          transition: all .5s;       
         }
      }
      svg:hover {
        .path-fire { 
          -webkit-animation: movedown 50ms infinite; /* Safari 4.0 - 8.0 */
          animation: movedown 150ms infinite;
          animation-direction: alternate;
          // /fill: ; 
          fill:red;
        }
        .path-fire-z {
          -webkit-animation: movetop 50ms infinite; /* Safari 4.0 - 8.0 */
          animation: movetop 150ms infinite;
          animation-direction: alternate;
          fill:red;
        }
      }

      /* Safari 4.0 - 8.0 */
      @-webkit-keyframes movedown {
        to {
          transform: translateX(-58px) translateY(24px) skewX(13deg) skewY(-10deg);
          }
      }
      @-webkit-keyframes movetop {
        to {transform: translateX(58px) translateY(-24px) skewX(-13deg) skewY(10deg);}
      }

      @keyframes movedown {
        to {
          fill: url(#my-cool-gradient);
          transform: translateX(-58px) translateY(24px) skewX(13deg) skewY(-10deg);}
      }
      @keyframes movetop {
        
        to {
          fill: url(#my-cool-gradient);
          transform: translateX(58px) translateY(-24px) skewX(-13deg) skewY(10deg);}
      }
    }
  }
  .container-particles {
    z-index: 1;
  }
  .nav-container {
    .link-home {
      font-family: 'Montserrat', sans-serif;
      font-size: 3rem;
      font-weight: 700;
      letter-spacing: 0.1rem;
      color: #fff;
      text-decoration: none;
      margin: auto;
    }
    .navs {
      a {
        position: absolute;
        top: calc(50% - #{ $box-translate-z });
        z-index: 2;
      }
      a:nth-child(1) {
        left: 0;
        margin-left: -10px;
        
      }
      a:nth-child(2) {
        right: 0;
        margin-right: -10px;   
      }
      .scene {
        width: $box-width;
        height: $box-height;
        perspective: calc(#{ $box-width } + #{ $box-height });
      }
      .scene:hover {
        .box { transform: translateZ(-$box-translate-z) rotateX( -90deg ); }
      }
      .box {
        width: $box-width;
        height: $box-height;
        position: relative;
        transform-style: preserve-3d;
        transform: translateZ(-$box-translate-z);
        transition: transform 0.3s;
      }
      .box__face--top {
        position: absolute;
        width: $box-width;
        height: $box-height;
        background-color: #161616;
        border: 1px solid #5d5d5b;
        transform: rotateX( 90deg ) translateZ($box-translate-z);
        color: #fff;
      }
      .box__face--front {
        position: absolute;
        width: $box-width;
        height: $box-height;
        background-color: #161616;
        border: 1px solid #5d5d5b;
        transform: rotateY( 0deg ) translateZ($box-translate-z);
        color: goldenrod;
      }
      span {
        display: block;
        text-align: center;
        font-family: 'Montserrat', sans-serif;
        font-size: 1rem;
        line-height: $box-height;
        font-weight: 700;
        letter-spacing: 0.1rem;
      }

    }
  }
  .our-message-container {
    width: 100%;
    position: absolute;
    top: 40%;
    text-align: center;
    .lbl-description {
      font-family: 'Montserrat', sans-serif;
      font-size: 1.5rem;
      line-height: 1.5rem;
      font-weight: 700;
      letter-spacing: 0.2rem;
      color: goldenrod;
      margin-bottom: 30px;
      text-transform: uppercase;
    }
    .lbl-title {
      font-family: 'Montserrat', sans-serif;
      font-size: 4rem;
      line-height: 4rem;
      font-weight: 700;
      letter-spacing: 0.4rem;
      color: #fff;
      text-transform: uppercase;
    }
  }
  .our-work-section-title {
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

  .our-services-section {
    .agile__nav-button {
      background: transparent;
      border: none;
      color: #fff;
      cursor: pointer;
      font-size: 24px;
      height: 100%;
      position: absolute;
      top: 0;
      transition-duration: 0.3s;
      width: 80px;
    }
    .agile__nav-button:hover {
      background-color: rgba(0, 0, 0, 0.5);
      opacity: 1;
    }
    .agile__nav-button--prev {
      left: 0;
    }
    .agile__nav-button--next {
      right: 0;
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
      background-color: transparent;
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
      background-color: #fff;
    }

    .slide {
      display: block;
      height: 500px;
      -o-object-fit: cover;
        object-fit: cover;
      width: 100%;
    }

  }

</style>