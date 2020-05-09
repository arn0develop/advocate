<template>
  <div id="app">
    <router-view/>
  </div>
</template>



<script>
export default {
  name: 'App',
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');

#app {
  font-family: 'Roboto' !important;
  text-align: center;
  color: #212121;
}
</style>
