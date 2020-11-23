<template>
  <div v-if="falg=='d'">
    <sign-in></sign-in>
  </div>
  <div v-else-if="falg=='z'"><registration></registration></div>
  <div v-else-if="falg=='y'"><home-page></home-page></div>

</template>

<script>
  import HomePage from "./common/HomePage";
  import SignIn from "./common/SignIn";
  import Registration from "views/registration/Registration";

  export default {
    name: "MainR",
    data(){
      return {
        falg:'d',
        username:''
      }
    },
    components:{
      HomePage,
      SignIn,
      Registration
    }
  }
</script>

<style scoped>

</style>
