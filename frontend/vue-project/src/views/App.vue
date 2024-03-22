<template>
  <nav class="navbar bg-success bg-opacity-25">
    <div class="navbar-left">
      <router-link to="/home">
        <img src="/images/log3.png" alt="Logo" class="logo-img" />
      </router-link>
      <h1 class="fst-italic fw-light">Calorie counter</h1>
    </div>
    <div class="navbar-right">
      <ul class="nav justify-content-end">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Search</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/list" class="nav-link">List</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <router-view />
</template>

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

.navbar-right ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.navbar-right ul li {
  margin-left: 20px;
}

.navbar-right router-link {
  color: #ffffff;
  text-decoration: none;
}
/* Black line separator */
/*.navbar::after {
  content: "";
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 0;
  height: 3px;
  background-color: #000;
}*/
</style>
