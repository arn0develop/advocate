<template>
  <div>
    <Header/>
    <Slider/>
    <Cards/>
    <AboutAd/>
    <CountUp/>
    <Accordion/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header'
import Slider from '@/components/Slider'
import Cards from '@/components/Cards'
import AboutAd from '@/components/AboutAd'
import CountUp from '@/components/CountUp'
import Accordion from '@/components/Accordion'
import Footer from '@/components/Footer'
export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    Cards,
    AboutAd,
    CountUp,
    Accordion,
    Footer
  }
}
</script>



