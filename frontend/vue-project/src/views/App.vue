<template>
  <div id="app">
    <nav class="navbar">
      <div class="navbar-left">
        <img src="/images/Log2.jpg" alt="Logo" class="logo-img" />
        <h1>Calorie counter</h1>
      </div>
      <div class="navbar-right">
        <router-link to="/home">Home</router-link>
        <router-link to="/list-items">Items</router-link>
        <router-link to="/">Search</router-link>

        <!-- <router-link to="/about">About us</router-link>
        <router-link to="/contact">Contact</router-link> -->
      </div>
    </nav>
  </div>
  <router-view />
</template>
<script></script>
<style>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: hsl(0, 0%, 100%);
  color: #000000;
  padding: 10px 20px;
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-left h1 {
  margin: 0;
  margin-left: 10px; /* Adjust margin as needed */
}

.navbar-left img {
  height: 100px; /* Adjust height as needed */
  width: auto; /* Maintain aspect ratio */
  margin-left: 50px; /* Adjust margin as needed */
}

.navbar-right {
  display: flex;
  align-items: center;
}

.navbar-right router-link {
  color: #ffffff;
  text-decoration: none;
  margin-left: 50px;
}
/* Create space between elements in the right side of the navbar */
.navbar-right > * {
  margin-right: 20px; /* Adjust the margin to create space between the elements */
}

/* Black line separator */
.navbar::after {
  content: "";
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  height: 3px;
  background-color: #000;
}
</style>
