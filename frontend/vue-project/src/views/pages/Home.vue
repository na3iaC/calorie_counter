<template>
  <div class="container">
    <img src="/images/Log2.jpg" alt="Logo" class="logo-img" />
    <!-- <h1>Calorie counter</h1> -->
    <h2>Do you want to know many calories you had today?</h2>
    <button @click="navigateToListItems" class="start">
      Click here to start
    </button>
    <h3>Eat healthy, live healthy, enjoy your life!</h3>
  </div>
</template>

<script>
export default {
  methods: {
    navigateToListItems() {
      // Use Vue Router's $router.push() method to navigate to the List_Items route
      this.$router.push("/list-items");
    },
  },
};
</script>

<style scoped>
/* Component styles... */
.container {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
}
/* .container h1 {
  margin-top: -15px;
} */
.container h2 {
  margin-top: 20px;
  margin-bottom: 60px;
}
.container img {
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center;
  width: 40%;
  margin-top: -40px;
}
.container button {
  position: relative;
  width: 1000px; /* Match the width of the search button */
  height: 60px; /* Match the height of the search button */
  border-radius: 4px;
  background-color: #51b3c7; /* Adjust background color as needed */
  color: #ffffff;
  margin-top: 25px;
}
.container h3 {
  margin-top: 10px;
  color: rgb(163, 163, 163);
}
</style>
