<template>
  <div>
    <DataView
      :value="movies"
      :layout="layout"
      :paginator="true"
      :rows="9"
      :sortOrder="sortOrder"
      :sortField="sortField"
    >
      <template #header>
        <div class="p-grid p-nogutter">
          <div class="p-col-6" style="text-align: left">
            <Dropdown
              v-model="sortKey"
              :options="sortOptions"
              optionLabel="label"
              placeholder="Sort By Critics Score"
              @change="onSortChange($event)"
            />
          </div>
        </div>
      </template>

      <template #grid="slotProps">
        <div class="p-col-12 p-md-4">
          <Card key="slotProps.data.title">
            <template #header>
              <img alt="movie image" :src="slotProps.data.poster" />
            </template>
            <template #title>
              {{ slotProps.data.title }}
            </template>
            <template #content>
              <br />
              <div>
                Critics score: <b>{{ slotProps.data.rt_score }}</b>
              </div>
            </template>
            <template #footer>
              <Button
                icon="pi pi-check"
                label="Add to watchlist"
                @click="addToWatchlist(slotProps.data)"
              />
              <Button
                icon="pi pi-info-circle"
                label="View more"
                class="p-button-success"
                style="margin-left: .5em"
                @click="openModalDetails(slotProps.data)"
              />
            </template>
          </Card>
        </div>
      </template>
    </DataView>
    <Dialog
      :visible="displayModalDetails"
      :style="{ width: '70vw' }"
      :modal="true"
    >
      <template #header>
        <h2>{{ movie.title }}</h2>
      </template>
      <div>
        {{ movie.description }}
      </div>
      <div class="reviews-list">
        <h4>Reviews</h4>
        <hr />
        <div>
          <ProgressSpinner v-if="reviewsLoading"></ProgressSpinner>
          <p v-else-if="reviews.length === 0 && !reviewsLoading">
            No reviews for this movie.
          </p>
          <div v-else v-for="review in reviews" :key="review.id">
            <img
              class="avatar"
              alt="user"
              :src="'https://robohash.org/' + review.userId"
            />
            {{ review.reviewText }}
            <div class="p-d-flex p-jc-between">
              <Rating v-model="review.stars" readonly :cancel="false"></Rating>
              <div>
                <Button
                  v-if="review.userId === userId"
                  icon="pi pi-pencil"
                  class="p-button-rounded p-button-warning p-button-text"
                  @click="openModalEditReview(review)"
                />
                <Button
                  v-if="review.userId === userId"
                  icon="pi pi-trash"
                  class="p-button-rounded p-button-danger p-button-text"
                  @click="openModalDeleteReview(review)"
                />
              </div>
            </div>
            <hr />
          </div>
        </div>
      </div>
      <template #footer>
        <Button
          label="Close"
          icon="pi pi-times"
          @click="closeModalDetails"
          class="p-button-text"
        />
        <Button
          label="Add review"
          icon="pi pi-plus"
          @click="openModalAddReview"
          autofocus
        />
      </template>
    </Dialog>

    <Dialog
      :visible="displayModalAddEditReview"
      :style="{ width: '50vw' }"
      :modal="true"
    >
      <template #header>
        <h2>{{ mode }} review</h2>
      </template>
      <h4>{{ movie.title }}</h4>
      <hr />
      <div class="p-fluid">
        <div class="p-field">
          <label for="reviewText">Description</label>
          <Textarea
            id="reviewText"
            v-model="review.reviewText"
            :autoResize="true"
            rows="5"
            cols="30"
          />
        </div>
        <div class="p-field">
          <label for="rating">Rating</label>
          <Rating v-model="review.stars" />
        </div>
      </div>
      <template #footer>
        <Button
          label="Close"
          icon="pi pi-times"
          @click="closeModalAddEditReview"
          class="p-button-text"
        />
        <Button
          label="Sumbit"
          icon="pi pi-check"
          @click="submitAction"
          autofocus
        />
      </template>
    </Dialog>

    <Dialog
      header="Confirm action"
      :visible="displayModalDeleteReview"
      :style="{ width: '350px' }"
      :modal="true"
    >
      <div class="confirmation-content">
        <i class="pi pi-exclamation-triangle p-mr-3" style="font-size: 2rem" />
        <span>Are you sure you want to delete the review?</span>
      </div>
      <template #footer>
        <Button label="No" icon="pi pi-times" @click="closeModalDeleteReview" />
        <Button
          label="Yes"
          icon="pi pi-check"
          @click="deleteReview"
          autofocus
        />
      </template>
    </Dialog>
  </div>
</template>

<script>
import axios from "axios";
import DataView from "primevue/dataview";
import Dropdown from "primevue/dropdown";
import Card from "primevue/card";
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import ProgressSpinner from "primevue/progressspinner";
import Rating from "primevue/rating";
import Textarea from "primevue/textarea";

export default {
  name: "MovieReviewsList",
  components: {
    DataView,
    Dropdown,
    Card,
    Button,
    Dialog,
    ProgressSpinner,
    Rating,
    Textarea,
  },
  data() {
    return {
      userId: this.$store.state.userId,
      movies: [],
      movie: null,
      layout: "grid",
      sortKey: null,
      sortOrder: null,
      sortField: null,
      sortOptions: [
        { label: "Critics Score High to Low", value: "!rt_score" },
        { label: "Critics Score Low to High", value: "rt_score" },
      ],
      displayModalDetails: false,
      displayModalAddEditReview: false,
      displayModalDeleteReview: false,
      reviews: [],
      review: {
        stars: 0,
        reviewText: "",
      },
      reviewsLoading: false,
      mode: "Add",
    };
  },
  mounted() {
    axios.get("/api/movies").then((res) => (this.movies = res.data.movies));
  },
  methods: {
    onSortChange: function(event) {
      const value = event.value.value;
      const sortValue = event.value;

      if (value.indexOf("!") === 0) {
        this.sortOrder = -1;
        this.sortField = value.substring(1, value.length);
        this.sortKey = sortValue;
      } else {
        this.sortOrder = 1;
        this.sortField = value;
        this.sortKey = sortValue;
      }
    },
    openModalDetails: function(movie) {
      this.displayModalDetails = true;
      this.movie = { ...movie };
      this.getReviewsPerMovie();
    },
    closeModalDetails: function() {
      this.displayModalDetails = false;
      this.reviews = [];
    },
    getReviewsPerMovie: function() {
      this.reviewsLoading = true;
      axios
        .get(`/api/reviews/${this.movie.id}`)
        .then((res) => {
          this.reviews = res.data.reviews;
          this.reviewsLoading = false;
        });
    },
    openModalAddReview: function() {
      this.mode = "Add";
      this.displayModalAddEditReview = true;
    },
    openModalEditReview: function(review) {
      this.mode = "Edit";
      this.review = review;
      this.displayModalAddEditReview = true;
    },
    closeModalAddEditReview: function() {
      this.displayModalAddEditReview = false;
      this.review = {
        reviewText: "",
        stars: 0,
      };
    },
    validateReview: function() {
      let isValid = false;
      if (this.review.reviewText === "" || this.review.stars === 0) {
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
    addReview: function() {
      if (this.validateReview()) {
        axios
          .post(
            `/api/reviews/${this.movie.id}/${this.userId}`,
            this.review,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then(() => {
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: "Review added",
              life: 2000,
            });
            this.getReviewsPerMovie();
            this.displayModalAddEditReview = false;
          })
          .catch((err) =>
            this.$toast.add({
              severity: "error",
              summary: "Add review error",
              detail: err.response.data.message,
              life: 2000,
            })
          );
      }
    },
    openModalDeleteReview: function(review) {
      this.review = review;
      this.displayModalDeleteReview = true;
    },
    closeModalDeleteReview: function() {
      this.displayModalDeleteReview = false;
      this.review = {
        reviewText: "",
        stars: 0,
      };
    },
    editReview: function() {
      if (this.validateReview()) {
        let reviewData = { ...this.review };
        delete reviewData.id;
        axios
          .put(
            `/api/reviews/${this.review.id}`,
            reviewData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
              },
            }
          )
          .then(() => {
            this.$toast.add({
              severity: "success",
              summary: "Success",
              detail: "Review updated",
              life: 2000,
            });
            this.getReviewsPerMovie();
            this.displayModalAddEditReview = false;
          })
          .catch((err) =>
            this.$toast.add({
              severity: "error",
              summary: "Edit review error",
              detail: err.response.data.message,
              life: 2000,
            })
          );
      }
    },
    deleteReview: function() {
      axios
        .delete(`/api/reviews/${this.review.id}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: "Review deleted",
            life: 2000,
          });
          this.getReviewsPerMovie();
          this.displayModalDeleteReview = false;
        })
        .catch((err) =>
          this.$toast.add({
            severity: "error",
            summary: "Delete review error",
            detail: err.response.data.message,
            life: 2000,
          })
        );
    },
    submitAction: function() {
      if (this.mode === "Add") {
        this.addReview();
      } else {
        this.editReview();
      }
    },
    addToWatchlist: function(movie) {
      axios
        .post(
          `/api/users/${this.userId}/watchlist`,
          { movieId: movie.id },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        )
        .then(() => {
          this.$toast.add({
            severity: "success",
            summary: "Success",
            detail: `Added ${movie.title} to watchlist`,
            life: 2000,
          });
        })
        .catch((err) =>
          this.$toast.add({
            severity: "error",
            summary: "Delete review error",
            detail: err.response.data.message,
            life: 2000,
          })
        );
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@700&display=swap");
.p-card {
  margin: 5%;
  border-radius: 10px;
  box-shadow: 2px 4px 25px rgba(0, 0, 0, 0.1);
}

.p-card:hover {
  box-shadow: 2px 8px 45px rgba(0, 0, 0, 0.15);
  transform: translate3D(0, -2px, 0);
}

.p-card .p-card-title {
  text-transform: uppercase !important;
}

.avatar {
  width: 40px;
}

.reviews-list {
  margin-top: 2%;
}
</style>
