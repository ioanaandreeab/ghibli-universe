<template>
  <div class="home">
      <Homeview/>
  </div>
</template>

<script>
import Homeview from "../components/Homeview";

export default {
  name: "Home",
  components: {
    Homeview
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

html, 
body {
  height: 100%;
  width: 100%;
}
</style>

<style scoped>
.home {
  width: 100%;
  height: 100%;
  background: url("../assets/totoro.gif");
  background-repeat: no-repeat;
  background-size: cover;
}
</style>