<template>
  <div class="navbar-main" >
    <Navbar/>

  
  </div>
</template>

<script>


import Navbar from './views/Navbar.vue'


export default {
  components:{
    Navbar,
    
  }
}
</script>


<style lang="scss">
// @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@100&display=swap');
body{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: Roboto Mono ;
 
}



</style>