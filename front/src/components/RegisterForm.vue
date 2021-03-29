<template>
      <div class="p-md-4 register-form">
			<Card>
                <template #title>
                    Register
                </template>
                <template #content>
                    <div class="p-fluid">
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="email" type="email" v-model="formData.email" />
                            <label for="email">Email</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="firstname" type="text" v-model="formData.firstName" />
                            <label for="firstname">First name</label>
                        </span>
                    </div>
                    <div class="p-field">
                        <span class="p-float-label">
                            <InputText id="lastname" type="text" v-model="formData.lastName" />
                            <label for="lastname">Last name</label>
                        </span>
                    </div>
                    <div class="p-field">
                    <span class="p-float-label">
                        <InputText id="pass" type="password" v-model="formData.password" />
                        <label for="pass">Password</label>
                    </span>
                    </div>
                    <div class="p-field">
                    <span class="p-float-label">
                        <InputText id="confirmPass" type="password" v-model="formData.confirmPass" />
                        <label for="confirmPass">Confirm password</label>
                    </span>
                    </div>
                    <div class="p-field">
                        <Button @click="register" label="Create account" />
                    </div>
                    </div>
                </template>
                <template #footer>
                    <p> Already have an account? Sign in <router-link to="/auth/login">here.</router-link></p>
                </template>
			</Card>
      </div>
</template>

<script>
import InputText from 'primevue/inputtext';
import Card from "primevue/card";
import Button from "primevue/button";
import {regex_email, regex_name} from "../utils/validations";
import axios from "axios";

export default {
  name: "RegisterForm",
  components: {
      InputText,
      Card,
      Button,
  },
  data() {
      return {
          formData: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPass: ""
          },
          baseURL: "/api/auth"
      }
  },
  methods: {
      validateData: function() {
        let isValid = false;
        if(this.formData.firstName === "" || this.formData.lastName === "" || this.formData.email === "" || this.formData.password === "" ||
        this.formData.confirmPass === "") {
            this.$toast.add({severity:'error', summary: 'Input error', detail:'All fields should be filled in.', life: 2000});
        } else if (!this.formData.email.match(regex_email)) {
            this.$toast.add({severity:'error', summary: 'Input error', detail:"Email should have a proper format. (ex: user@example.com)", life: 2000});
        } else if (!this.formData.firstName.match(regex_name)) {
            this.$toast.add({severity:'error', summary: 'Input error', detail:"Firstname should contain only letters and start with a capital letter", life: 2000});
        } else if (!this.formData.lastName.match(regex_name)) {
            this.$toast.add({severity:'error', summary: 'Input error', detail:"Lastname should contain only letters and start with a capital letter", life: 2000});            
        } else if (this.formData.password !== this.formData.confirmPass) {
            this.$toast.add({severity:'error', summary: 'Input error', detail:"Passwords should match", life: 2000});
        } else {
            isValid = true;
        }
        return isValid;
      },
      register: function() {
          if(this.validateData()) {
            let userData = {...this.formData};
            delete userData.confirmPass;
            axios.post(this.baseURL + "/register", userData).then(() => {
                this.$toast.add({severity:'success', summary: 'Successful registration', detail:"You must now login", life: 2000});
                this.$router.push("/auth/login");
            }).catch(err => this.$toast.add({severity:'error', summary: 'Register error', detail:err.message, life: 2000}));
            
          }
      }
  }
};
</script>

<style scoped>
.p-card {
    background: rgba(255,255,255,0.5);
}

.register-form {
    position: relative;
    top: 10%;
}
</style>

