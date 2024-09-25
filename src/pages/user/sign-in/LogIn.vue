<template>
    <div class="d-flex justify-content-center p-5">
      <small-card>
        <h3>Dear unknown user, please login</h3>
        <form @submit.prevent="login">
          <div class="form-group row">
            <label class="col-4 col-form-label">Login</label>
            <div class="col-8">
              <input
                class="form-control"
                placeholder="username"
                v-model.trim="username"
              />
            </div>
          </div>
          <div class="d-flex justify-content-center">
            <button class="btn btn-success m-3" type="submit">Let me in!</button>
          </div>
        </form>
      </small-card>
    </div>
  </template>
  
  <script>
  import { mapActions, mapState } from "pinia";
  import { useAuthStore } from "/src/store/auth.js";
  export default {
    data() {
      return {
        username: "",
      };
    },
    computed: {
      ...mapState(useAuthStore, ["landingUrl"]),
    },
    methods: {
      ...mapActions(useAuthStore, ["setUsername"]),
      login() {
        this.setUsername(this.username);
        this.$router.push({ path: "/home" });
      },
    },
  };
  </script>
  