<template>
    <div>
        <h1>Search</h1>
        <div class="search-main">
            <form @submit.prevent="searchFoods" class="search-form">
        <input type="text" v-model="searchInput" placeholder="Enter search text">
        <button type="submit" class="search-button" aria-label="Search"><i class="bi bi-search"></i></button>
    </form>
        <em v-if="loading">Loading items...</em>
        <div>
            <ul v-if="foods.length">
            <li v-for="food in foods" :key="food.food_id">
                <div class="food-container">
                    <router-link :to="'/food/' + food.food_id" class="food-link">
                    {{ food.foodname }}
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
import { foodService } from "../../services/foods.service"
export default {
    data() {
        return {
            foods: [],
            error: "",
            loading: false,
            searchInput: ""
        }
    },
    methods: {
        searchFoods() {
        this.loading = true;
        foodService.search(this.searchInput)
            .then(foods => {
                this.foods = foods;
                this.loading = false;
            })
            .catch(error => {
                this.error = error;
                this.loading = false;
            });
    }
    }
}
</script>