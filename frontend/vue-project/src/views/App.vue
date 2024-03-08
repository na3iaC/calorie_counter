<template>
  <nav class="navbar bg-success bg-opacity-25">
    <div class="navbar-left"><router-link to="/home">
      <img src="/images/log3.png" alt="Logo" class="logo-img" /></router-link>
      <h1 class="fst-italic fw-light">Calorie counter</h1>
    </div>
    <div class="navbar-right">
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link to="/" class="nav-link">Search</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/home" class="nav-link">Home</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/about" class="nav-link">About us</router-link>
    </li>
    <li class="nav-item">
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </li>
  </ul>
</div>
  </nav>
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