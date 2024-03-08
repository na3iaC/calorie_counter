<template>
  <div>
    <h1>Items Page</h1>
    <!-- Add your list items content here -->
    
    <div class="container">
      <div class="rectangle">Your Food</div>
      <div class="rectangle1">
        <div class="rectangle2"></div>
        -------
      </div>
      <button @click="navigateToListItems" class="add-food">Add Food</button>
    </div>
    <div v-if="error" class="error-message">{{ error }}</div>

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
