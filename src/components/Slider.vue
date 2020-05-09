<template>
	<div>
     <mdb-carousel
    :interval="8000"
    slide
    :items="items"
    controlls
  ></mdb-carousel>
  <div class="carousel-caption">
   <h4 class="withus">- With us -</h4>
   <h3 class="ahead h3-responsive">You Are Always One Step Ahead</h3>
   <p class="strategy">Strategies of our attorneys will help you solve very complex legal issues.</p>
   <router-link to="#" class="btn request_consult" href="#" role="button">Request a Free Consultation</router-link>
  </div>
</div>
</template>


<script>
export default {
	name: 'Slider'
}
</script>
<script>
  import { mdbCarousel } from "mdbvue";
  export default {
    name: "CarouselPage",
    components: {
      mdbCarousel
    },
    data() {
      return {
        items: [
          {
            img: true,
            src:
              "images/maincourt.jpg"
          },
          {
            img: true,
            src:
              "images/choose.jpg"
          },
          {
            img: true,
            src:
              "images/new.jpg"
          }
        ]
      };
    }
  };
</script>




<style lang="scss">
  @import "../../public/sass/style.scss";
</style>