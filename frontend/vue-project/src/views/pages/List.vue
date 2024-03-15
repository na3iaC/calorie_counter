<template>
    <section class="vh-100 bg-success bg-opacity-25">
        <div class="container-fluid">
            <div class="row justify-content-center align-items-center h-100">
                <div class="col-md-12">
               
                    <ul v-if="selectedFoods.length" class="list-group">
                        <li
                            v-for="(selectedFood, index) in selectedFoods"
                            :key="selectedFood.foodId"
                            class="list-group-item"
                        >
                            <div class="d-flex justify-content-between align-items-center">
                                <span>{{ selectedFood.foodItem }} - Quantity: {{ selectedFood.quantity }}</span>
                                <span>Calories: {{ calculateCalories(selectedFood) }}</span>
                                <div>
                                    <button @click="deleteItem(index)" class="btn btn-danger me-2">
                                        Delete
                                    </button>
                                    <button @click="increaseQuantity(index)" class="btn btn-primary">
                                        +
                                    </button>
                                    <button @click="decreaseQuantity(index)" class="btn btn-primary">
                                        -
                                    </button>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <div v-if="selectedFoods.length" class="total-calories">
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
      
      this.selectedFoods[index].quantity--;
  
      localStorage.setItem("selectedFoods", JSON.stringify(this.selectedFoods));
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
</style>