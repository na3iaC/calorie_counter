<template>
  <section class="vh-100 bg-success bg-opacity-25">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-md-12">
          <div class="mb-4">
            <img
              src="/images/Picture2.jpg"
              class="img-fluid"
              alt="Banner Image"
            />
          </div>

          <!-- Search Form -->
          <form
            @submit.prevent="searchFoods"
            class="position-absolute top-50 start-50 translate-middle"
            style="z-index: 1; margin-top: 220px"
          >
            <div class="input-group">
              <input
                type="text"
                v-model="searchInput"
                class="form-control"
                placeholder="Enter search text"
              />
              <button type="submit" class="btn btn-primary">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>

          <!-- Loading indicator -->
          <p v-if="loading" class="text-muted">Loading items...</p>

          <!-- Food Items -->
          <ul v-if="foods.length" class="list-group">
            <li v-for="food in foods" :key="food.id" class="list-group-item">
              <router-link
                :to="'/food/' + food.id"
                class="text-decoration-none"
              >
                {{ food.FoodItem }}
              </router-link>
            </li>
           
          </ul>
         

          <!-- Error message -->
          <div v-if="error" class="alert alert-danger mt-3">{{ error }}</div>
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
      // Initialize selectedFood from route parameter or localStorage
     // selectedFoods: [], // Initialize selectedFoods array
      foods: [],
      error: "",
      loading: false,
      searchInput: "",
      //selectedFood: null, //variable to store selected food item
    };
  },
  // mounted() {
  //   // Retrieve selected foods from localStorage
  //   const selectedFoodsJSON = localStorage.getItem("selectedFoods");
  //   if (selectedFoodsJSON) {
  //     this.selectedFoods = JSON.parse(selectedFoodsJSON);
  //   }
  // },

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
    // deleteItem(index) {
    //   // Remove the selected item from the list
    //   this.selectedFoods.splice(index, 1);
    //   // Update localStorage
    //   localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods));
    // },
  },
};
</script>

<style scoped>
.input-group {
  margin-bottom: 20px; /* Add margin below the search form */
}

.input-group input[type="text"] {
  border-top-right-radius: 0; /* Remove border-radius from input in the input-group */
  border-bottom-right-radius: 0;
}

.input-group button {
  border-top-left-radius: 0; /* Remove border-radius from button in the input-group */
  border-bottom-left-radius: 0;
}

.list-group-item {
  cursor: pointer; /* Change cursor to pointer for list items */
}
</style>
