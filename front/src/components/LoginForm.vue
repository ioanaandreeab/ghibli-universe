<template>
  <div class="p-md-4 login-form">
    <Card>
      <template #title>
        Login
      </template>
      <template #content>
        <div class="p-fluid">
          <div class="p-field">
            <span class="p-float-label">
              <InputText id="email" type="text" v-model="formData.email" />
              <label for="email">Email</label>
            </span>
          </div>
          <div class="p-field">
            <span class="p-float-label">
              <InputText
                id="pass"
                type="password"
                v-model="formData.password"
              />
              <label for="pass">Password</label>
            </span>
          </div>
          <div class="p-field">
            <Button label="Login" @click="login" />
          </div>
        </div>
      </template>
      <template #footer>
        <p>
          Don't have an account? Sign up
          <router-link to="/auth/register">here.</router-link>
        </p>
      </template>
    </Card>
  </div>
</template>

<script>
import InputText from "primevue/inputtext";
import Card from "primevue/card";
import Button from "primevue/button";
import axios from "axios";

export default {
  name: "LoginForm",
  components: {
    InputText,
    Card,
    Button,
  },
  data() {
    return {
      formData: {
        password: "",
        email: "",
      },
      baseURL: "/api/auth",
    };
  },
  methods: {
    validateData: function() {
      let isValid = false;
      if (this.formData.email === "" || this.formData.password === "") {
        this.$toast.add({
          severity: "error",
          summary: "Input error",
          detail: "All fields should be filled in.",
          life: 2000,
        });
      } else {
        isValid = true;
      }
      return isValid;
    },
    login: function() {
      if (this.validateData()) {
        axios
          .post(this.baseURL + "/login", this.formData)
          .then((res) => {
            localStorage.setItem("token", res.data.token);
            this.$store.commit('setUserId',res.data.userId);
            this.$router.push("/dashboard");
          })
          .catch((err) =>
            this.$toast.add({
              severity: "error",
              summary: "Login error",
              detail: err.response.data.message,
              life: 2000,
            })
          );
      }
    },
  },
};
</script>

<style scoped>
.p-card {
  background: rgba(255, 255, 255, 0.5);
}

.login-form {
  position: relative;
  top: 10%;
}
</style>
