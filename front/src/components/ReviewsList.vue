<template>
  <div class="card">
    <DataTable :value="reviews" removableSort>
        <Column field="movie.title" header="Movie Title" sortable="true">
            <template #body="slotProps">
                {{slotProps.data.movie.title}}
            </template>
        </Column>
        <Column field="stars" header="Rating" sortable="true">
            <template #body="slotProps">
                <Rating v-model=slotProps.data.stars readonly :cancel="false"></Rating>
            </template>
        </Column>
        <Column field="reviewText" header="Review text" sortable="false">
            <template #body="slotProps">
                {{slotProps.data.reviewText}}
            </template>
        </Column>
    </DataTable>
</div>
</template>

<script>
import axios from "axios";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Rating from "primevue/rating";

export default {
  name: "Reviewsist",
  components: {
    DataTable,
    Column,
    Rating
  },
  data() {
    return {
      reviews: [],
      userId:this.$store.state.userId,
    }
  },
  methods: {
  },
  mounted() {
      axios.get(`/api/reviews/user/${this.userId}`).then(res=> {
          this.reviews = res.data.reviews;
          });
  }
};
</script>

<style scoped>

</style>

