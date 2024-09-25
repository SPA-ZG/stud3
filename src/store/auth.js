import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    _landingUrl: "/",
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
    username: (state) => state.user,
    landingUrl: (state) => state._landingUrl,
  },
  actions: {
    setUsername(username) {
      this.user = username;
    },
    setLandingUrl(url) {
      this._landingUrl = url;
    },
  },
});
