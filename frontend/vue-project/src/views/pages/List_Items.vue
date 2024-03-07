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

      <div class="container">
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
          <div class="rectangle">Your Food</div>
          <div class="rectangle1">
            <div class="rectangle2"></div>
            -------
          </div>
          <button type="submit" class="add-food">Add Food</button>
        </div>
        <div v-if="error" class="error-message">{{ error }}</div>
        <button type="submit" class="cal-calories">
          Calculate your calories today
        </button>
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
.search-main {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
}

.search-form {
  display: flex;
  width: 100%; /* Full width */
  max-width: 1000px; /* Maximum width for the form */
  margin-top: 20px; /* Adjust margin as needed */
}

.search-form input[type="text"] {
  flex: 1; /* Grow to fill available space */
  padding: 10px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Add border for visual separation */
  border-radius: 4px; /* Add border radius for rounded corners */
  background-color: #a1a1a1; /* Change background color as needed */
  margin-right: 10px; /* Adjust margin between input and button */
}

.search-form input[type="text"]::placeholder {
  color: #000000; /* Change the color to your desired value */
}

.search-button {
  padding: 10px; /* Adjust padding as needed */
  border: 1px solid #ccc; /* Add border for visual consistency */
  border-radius: 4px; /* Add border radius for rounded corners */
  background-color: #a1a1a1; /* Change background color as needed */
  cursor: pointer;
}

.search-button i {
  font-size: 1.2rem; /* Adjust icon size as needed */
}

.container {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center items horizontally */
  margin-top: 5px; /* Adjust margin as needed */
}
.rectangle {
  position: relative;
  width: 500px; /* Match the width of the search button */
  height: 40px; /* Match the height of the search button */
  /* border-radius: 4px; */
  background-color: #a1a1a1; /* Adjust background color as needed */
  margin-top: 20px; /* Adjust margin between input and rectangle */
  display: flex;
  justify-content: center;
  align-items: center;
}

.add-food {
  background-color: #000;
  color: #fff;
  width: 90px;
  height: 30px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  margin-top: 5px;
  margin-left: 480px;
}
</style>
