<template>
  <div>
    <!-- <h1>Search</h1> -->
    <div class="search-main">
      <form @submit.prevent="searchFoods" class="search-form">
        <input
          type="text"
          v-model="searchInput"
          placeholder="Enter search text"
        />
        <button type="submit" class="search-button" aria-label="Search">
          <i class="bi bi-search"></i>
        </button>
      </form>
      <em v-if="loading">Loading items...</em>
      <div>
        <ul v-if="foods.length">
          <li v-for="food in foods" :key="food.food_id">
            <div class="food-container">
              <router-link :to="'/food/' + food.food_id" class="food-link">
                {{ food.FoodItem }}
              </router-link>
            </div>
          </li>
        </ul>
        <div v-if="error" class="error-message">{{ error }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { foodService } from "../../services/foods.service";
export default {
  data() {
    return {
      foods: [],
      filteredFoods: [],
      error: "",
      loading: false,
      searchInput: "",
    };
  },
  methods: {
    searchFoods() {
      this.loading = true;
      foodService
        .search(this.searchInput)
        .then((foods) => {
          this.foods = foods;
          this.loading = false;
        })
        .catch((error) => {
          this.error = error;
          this.loading = false;
        });
    },
  },
};
</script>

<style scoped>
.search-form {
  display: flex;
  width: calc(100% - 40px); /* Adjust width to match the black separator */
  margin: 0 auto; /* Center the form horizontally */
  margin-top: 50px;
}

.search-form input[type="text"] {
  flex: 1; /* Grow to fill available space */
  padding: 10px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Add border for visual separation */
  border-radius: 4px; /* Add border radius for rounded corners */
  background-color: #a1a1a1; /* Change background color as needed */
}
.search-form input[type="text"]::placeholder {
  color: #000000; /* Change the color to your desired value */
}

.search-button {
  margin-left: 10px; /* Adjust margin between input and button */
  padding: 10px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Add border for visual consistency */
  border-radius: 4px; /* Add border radius for rounded corners */
  background-color: #a1a1a1; /* Change background color as needed */
  cursor: pointer;
}

.search-button i {
  font-size: 1.2rem; /* Adjust icon size as needed */
}
</style>
