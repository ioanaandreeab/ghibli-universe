<template>
  <div class="container">
      <LoginForm/>
  </div>
</template>

<script>
import LoginForm from "../components/LoginForm";
export default {
  name: "Login",
  components: {
      LoginForm
  }
};
</script>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    background: url("../assets/login_background.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}
</style>

