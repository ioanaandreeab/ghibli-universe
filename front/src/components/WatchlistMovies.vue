<template>
    <div>
        <p v-if="movies.length === 0">You have no movies in the watchlist.</p>
        <DataView :value="movies" :layout="layout">
            <template #grid="slotProps">
                <div class="p-col-12 p-md-4">
                    <Card key="slotProps.data.title">
                        <template #header>
                            <img alt="movie image" :src="slotProps.data.poster">
                        </template>
                        <template #title>
                            {{slotProps.data.title}}
                        </template>
                        <template #content>
                            {{slotProps.data.description}}
                            <div>Critics score: <b>{{slotProps.data.rt_score}}</b></div>
                        </template>
                        <template #footer>
                            <Button icon="pi pi-times" label="Remove from watchlist" class="p-button-danger" style="margin-left: .5em" @click="openModalRemove(slotProps.data)"/>
                        </template>
                    </Card>
                </div>
            </template> 
        </DataView>

        <Dialog header="Confirm action" :visible="displayModalRemove" :style="{width: '350px'}" :modal="true">
            <div class="confirmation-content">
                <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
                <span>Are you sure you want to remove {{movie.title}} from the watchlist?</span>
            </div>
            <template #footer>
                <Button label="No" icon="pi pi-times" @click="closeModalRemove" autofocus/>
                <Button label="Yes" icon="pi pi-check" @click="removeMovieFromWatchlist" />
            </template>
        </Dialog>
    </div>
</template>

<script>
import axios from "axios";
import DataView from "primevue/dataview";
import Card from "primevue/card";
import Button from "primevue/button";
import Dialog from "primevue/dialog";

export default {
  name: "MovieReviewsList",
  components: {
      DataView,
      Card,
      Button,
      Dialog,
  },
  data() {
    return {
        userId:this.$store.state.userId,
      movies: [],
      movie: null,
      layout: 'grid',
        displayModalRemove: false,
    }
  },
  mounted() {
      this.getWatchlist();
  },
  methods: {
        getWatchlist: function() {
            axios.get(`/api/users/${this.userId}/watchlist`).then(res=> this.movies = res.data.movies);
        },
        openModalRemove: function(movie) {
            this.movie = movie;
            this.displayModalRemove = true;
        },
        closeModalRemove: function() {
            this.displayModalRemove = false;
            this.movie = [];
        },
        removeMovieFromWatchlist: function() {
            axios.delete(`/api/users/${this.userId}/watchlist/${this.movie.watchlistId}`,
                {headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }}).then(()=> {
                    this.$toast.add({
                    severity: "success",
                    summary: "Success",
                    detail: "Movie deleted from watchlist",
                    life: 2000,
                    });
                    this.getWatchlist();
                    this.displayModalRemove = false;
                }).catch(err => 
                    this.$toast.add({
                    severity: "error",
                    summary: "Remove movie from watchlist error",
                    detail: err.response.data.message,
                    life: 2000,
            }));
        },
    }
};
</script>

<style scoped>
.p-card {
  margin:5%;
  border-radius: 10px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, .1);
}

.p-card:hover {
  box-shadow: 2px 8px 45px rgba(0, 0, 0, .15);
  transform: translate3D(0, -2px, 0);
}

.p-card .p-card-title {
  text-transform: uppercase!important;
}

.reviews-list {
    margin-top: 2%;
}

</style>

