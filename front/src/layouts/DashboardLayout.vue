<template>
    <div class="main">
        <MenuBar :model="items" />
        <slot/>
    </div>
</template>

<script>
import MenuBar from "primevue/menubar";
export default {
    name:"DashboardLayout",
    components: {
        MenuBar
    },
    data() {
        return {
            items: [
                {
                    label: 'Dashboard', 
                    icon: 'pi pi-fw pi-briefcase',
                    to: '/dashboard'
                },
                {
                    label: 'My reviews', 
                    icon: 'pi pi-fw pi-star-o',
                    to: '/reviews'
                },
                {
                    label: 'My watchlist', 
                    icon: 'pi pi-fw pi-tag',
                    to:'/watchlist'
                },
                {
                   label:'Logout',
                   icon:'pi pi-fw pi-power-off',
                   command:() => {
                       sessionStorage.clear();
                       localStorage.clear();
                       this.$toast.add({
                        severity: "success",
                        summary: "Success",
                        detail: "Logged out",
                        life: 2000
                        });
                       this.$router.push("/");
                   }
                }
            ]
        }
    }
}
</script>

<style scoped>
.main {
    height:100%;
    width:100%;
}
</style>