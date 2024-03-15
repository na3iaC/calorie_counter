<template>
  <div class="container">
    <h1>Item details</h1>
    <div v-if="loading">Loading...</div>
    <div v-else>
      <p>Food Category: {{ foodCategory }}</p>
      <p>Food Item: {{ foodItem }}</p>
      <p>Per 100 Grams: {{ per100Grams }}</p>
      <p>Calories per 100 Grams: {{ calsPer100Grams }}</p>
      <p>KJ per 100 Grams: {{ kjPer100Grams }}</p>
      <p v-if="error" class="error">{{ error }}</p>
      <button type="submit" @click="addItemToCart">Add</button>
      <!-- Bind click event to method -->
    </div>
  </div>
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
