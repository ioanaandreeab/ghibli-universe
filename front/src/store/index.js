import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

export default createStore({
  state: {
    userId:null
  },
  mutations: {
    setUserId (state, value) {
      state.userId = value;
    }
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({
        storage: window.sessionStorage,
    })]
});
