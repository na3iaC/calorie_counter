<template>
  <div>
    <h1>Items Page</h1>

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
     
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>

.container {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  margin-top: 5px; 
}
.rectangle {
  position: relative;
  width: 500px; 
  height: 40px; 
 
  background-color: #a1a1a1;
  margin-top: 20px; 
  display: flex;
  justify-content: center;
  align-items: center;
}

.rectangle1 {
  position: relative;
  width: 500px;
  height: 400px;
  
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
  width: 1000px; 
  height: 30px; 
  border-radius: 4px;
  background-color: #000000; 
  color: #ffffff;
  margin-top: 10px; 
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
