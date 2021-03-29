<template>
  <div class="container">
      <RegisterForm/>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm";
export default {
  name: "Register",
  components: {
      RegisterForm
  }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background: url("../assets/register_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

