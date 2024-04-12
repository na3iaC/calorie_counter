<template>
  <section class="vh-100 bg-success bg-opacity-25">
    <div class="container-fluid">
      <div class="row justify-content-center align-items-end h-100">
        <div class="col-md-12">
          <div class="mb-4 position-relative">
            <img
              src="/images/Picture2.jpg"
              class="img-fluid"
              alt="Banner Image"
              style="opacity: 0.75;"
            />
            <!-- Search Form overlaid on the image with transparent background -->
            <form
              @submit.prevent="searchFoods"
              class="position-absolute bottom-0 start-50 translate-middle-x"
              style="z-index: 1; background-color: rgba(0, 0, 0, 0); width: 40%; " >
              <div class="input-group">
                <input
                  type="text"
                  v-model="searchInput"
                  class="form-control"
                  placeholder="Check before you eat for a healthier diet"
                  style="background-color: rgba(255, 255, 255, 0.5); " />
                <button type="submit" class="btn btn-outline-success">
                  <i class="bi bi-search"></i>
                </button>
              </div>
            </form>
          </div>

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
    //helolololo
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
.position-relative {
  position: relative;
}

.position-absolute {
  position: absolute;
}

.top-50 {
  top: 50%;
}

.start-50 {
  left: 50%;
}

.translate-middle {
  transform: translate(-50%, -50%);
}
</style>
