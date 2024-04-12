<template>
  <section class="full-screen-bg bg-success bg-opacity-25"  >
    <div class="container-fluid d-flex justify-content-center align-items-center h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-12">
          <div class="mb-4">
            <img
              src="/images/banner1.jpg"
              class="img-fluid"
              alt="Banner Image"
              style="opacity: 0.75;"
            />
          </div>
  <!-- <div class="card" style="width: 80rem; margin-top: 50px; margin-right: 80px;"> -->
    <div class="card mx-auto" style="max-width: 80rem;">
    <div class="card-header fw-bold">
    Item details
  </div>
  <ul class="list-group list-group-flush">
    <div v-if="loading">Loading...</div>
    <div v-else>
      <li class="list-group-item">Food Category: {{ foodCategory }}</li>
      <li class="list-group-item">Food Item: {{ foodItem }}</li>
      <li class="list-group-item">Per 100 Grams: {{ per100Grams }}</li>
      <li class="list-group-item">Calories per 100 Grams: {{ calsPer100Grams }}</li>
      <li class="list-group-item">KJ per 100 Grams: {{ kjPer100Grams }}</li>
      <p v-if="error" class="error">{{ error }}</p>
    
    </div>
     </ul>
       <button type="submit" @click="addItemToCart" class="btn btn-outline-success">Add to <i class="bi bi-basket"></i></button>
      <!-- Bind click event to method -->
  </div>
</div>
</div>
</div>
  </section>
</template>


<script>
import { foodService } from "../../services/foods.service";

export default {
  data() {
    return {
      foodId: "", // Store the foodId
      foodCategory: "",
      foodItem: "",
      per100Grams: "",
      calsPer100Grams: "",
      kjPer100Grams: "",
      error: "",
      loading: false,
    };
  },
  mounted() {
    this.foodId = this.$route.params.foodId; // Get the foodId from route params
    this.fetchItemDetails(); // Fetch item details when component is mounted
  },
  methods: {
    fetchItemDetails() {
      this.loading = true;
      foodService
        .details_item(this.foodId)
        .then((foodDetails) => {
          // Assign response to data properties
          this.foodCategory = foodDetails.FoodCategory;
          this.foodItem = foodDetails.FoodItem;
          this.per100Grams = foodDetails.per100grams;
          this.calsPer100Grams = foodDetails.Cals_per100grams;
          this.kjPer100Grams = foodDetails.KJ_per100grams;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },

    addItemToCart() {
      const selectedFood = {
        foodId: this.foodId,
        foodCategory: this.foodCategory,
        foodItem: this.foodItem,
        per100Grams: this.per100Grams,
        calsPer100Grams: this.calsPer100Grams,
        kjPer100Grams: this.kjPer100Grams,
        quantity: 1
      };
      // Retrieve existing selected foods from localStorage or initialize as empty array
      let selectedFoods =
        JSON.parse(localStorage.getItem("selectedFoods")) || [];

      // Add the current selected food to the array
      selectedFoods.push(selectedFood);

      // Store selectedFoods array in localStorage
      localStorage.setItem("selectedFoods", JSON.stringify(selectedFoods));
     
     this.$router.push("/list")

    console.log(selectedFoods)
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
