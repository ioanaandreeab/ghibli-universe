<template>
  <div>
      <img alt="Ghibli Studio logo" src="../assets/ghibli_logo.png" />
      <Button @click="goToLogin">Discover the universe now </Button>
  </div>
</template>

<script>
import Button from "primevue/button";

export default {
  name: "Homeview",
  components: {
    Button
  },
  methods: {
      goToLogin: function() {
          this.$router.push("/auth/login");
      }
  }
};
</script>

<style scoped>

.p-button {
  margin: 5px;
}

div {
    width: 400px;
    position: absolute;
    left: 50%;
    top: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    text-align: center;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 5px;
    padding: 10px;
}

@media only screen and (max-width: 400px) {
  div {
    width: 70%;
  }
}

img {
    width: 100%;
}
</style>