<template>
    <section class="vh-100 bg-success bg-opacity-25">
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center h-100">
                
                <!-- <div class="col-md-12"> -->
        <div class="col-md-12">
          <div class="mb-4">
            <img
              src="/images/banner1.jpg"
              class="img-fluid"
              alt="Banner Image"
              style="opacity: 0.75;"
            />
          </div>
          
                    <ul v-if="selectedFoods.length" class="list-group">
                        <li
                            v-for="(selectedFood, index) in selectedFoods"
                            :key="selectedFood.foodId"
                            class="list-group-item"
                        >
                            <div class="container">
                                <div class="row">
                                    <div class="col">
                                
                                <span>{{ selectedFood.foodItem }} - Quantity: {{ selectedFood.quantity }}</span>
                                </div>
                                <div class="col">
                                <button @click="increaseQuantity(index)" class="btn btn-outline-secondary-sm">
                                        <i class="bi bi-plus-circle"></i>
                                    </button>
                                    <button @click="decreaseQuantity(index)" class="btn btn-secondary-sm">
                                        <i class="bi bi-dash-circle"></i>
                                    </button>
                                    </div>
                                    <div class="col">
                                <span>Calories: {{ calculateCalories(selectedFood) }}</span>
                                </div>
                                <div class="col-auto">
                                    <button @click="deleteItem(index)" class="btn btn-danger-sm me-2">
                                        <i class="bi bi-trash"></i>
                                    </button>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-if="selectedFoods.length" class="total-calories d-flex justify-content-end mt-3 fs-5">
                        <i class="bi bi-shop-window fs-5 me-2"></i>
                        Total Calories: {{ calculateTotalCalories() }}
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

export default {
    data() {
        return {
            selectedFoods: [], 
        };
    },
    mounted() {
      
        const selectedFoodsJSON = localStorage.getItem("selectedFoods");
        if (selectedFoodsJSON) {
            this.selectedFoods = JSON.parse(selectedFoodsJSON);
        }
    },
    methods: {
        deleteItem(index) {
        
            this.selectedFoods.splice(index, 1);
    
            localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods));
        },
        increaseQuantity(index) {
      
            this.selectedFoods[index].quantity++;
        
            localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods));
        },
        decreaseQuantity(index) {
            if (this.selectedFoods[index].quantity > 1) { // quantity cannot less than 1
      this.selectedFoods[index].quantity--;
  
      localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods));
      }
  },
        calculateCalories(selectedFood) {     const cals = parseInt(selectedFood.calsPer100Grams.split(" ")[0]);
            
            return cals;
        },
        calculateTotalCalories() {
           
            return this.selectedFoods.reduce((totalCalories, selectedFood) => {
             
                const cals = parseInt(selectedFood.calsPer100Grams.split(" ")[0]);
                return totalCalories + (cals * selectedFood.quantity);
            }, 0);
        },
    },
};
</script>

<style scoped>
.total-calories {
    margin-top: 10px;
    font-weight: bold;
}
  .custom-btn {
    margin-right: 5px; /* Adjust the margin as needed */
    }
</style>