<template>
  <div id="app">
    <component :is="this.$route.meta.layout || 'div'">
      <router-view />
      <Toast />
    </component>
  </div>
</template>

<script>
import TabMenu from "primevue/tabmenu";
import Toast from "primevue/toast";
export default {
  data() {
		return {
			items: [
                {label: 'Home', icon: 'pi pi-fw pi-home', to: '/'},
                {label: 'Authentication', icon: 'pi pi-fw pi-cog', to: '/auth'}
            ]
		}
	},
  components: {
    TabMenu,
    Toast 
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1b1c1e;
  width: 100%;
  height: 100%;
}

.p-component {
  font-family: 'Raleway', sans-serif!important;
}

.p-dialog .p-dialog-header .p-dialog-header-icon {
  display: none;
}
</style>
