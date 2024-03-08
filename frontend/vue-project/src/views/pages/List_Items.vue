<template>
  <div>
    <h1>Items Page</h1>
    <!-- Add your list items content here -->
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
      <div class="rectangle">Your Food</div>
      <div class="rectangle1">
        <div class="rectangle2"></div>
        -------
      </div>
      <button @click="navigateToListItems" class="add-food">Add Food</button>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>
    <button type="submit" class="cal-calories">
      Calculate your calories today
    </button>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToListItems() {
      // Use Vue Router's $router.push() method to navigate to the List_Items route
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
/* Component styles... */
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

.rectangle1 {
  position: relative;
  width: 500px;
  height: 400px;
  /* border-radius: 4px; */
  background-color: #51b3c7;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.rectangle2 {
  width: 400px;
  height: 300px;
  border-radius: 4px;
  background-color: #a1a1a1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
.cal-calories {
  position: relative;
  width: 1000px; /* Match the width of the search button */
  height: 30px; /* Match the height of the search button */
  border-radius: 4px;
  background-color: #000000; /* Adjust background color as needed */
  color: #ffffff;
  margin-top: 10px; /* Adjust margin between input and rectangle */
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
