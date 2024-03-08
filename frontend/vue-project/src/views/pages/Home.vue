<template>
  <section class="vh-100 bg-success bg-opacity-25">
  <!-- input an image-->
<div class="container-fluid h-custom">
  <div class="row d-flex justify-content-center align-items-center h-100">
    <div class="col-md-8 col-lg-5 col-xl-4">
      <img src="/images/diet.jpg"
        class="img-fluid mb-4" alt="Sample image" style="margin-top: 100px; width: 100%; height: auto;">
    </div>

    <!--move the content to the right-->
    <div class="col-md-6 col-lg-5 col-xl-4 mt-2 ml-4" style="margin-left: 100px;" >
  <div>

      <h1 class="fs-1 fw-normal ms-5">Daily calorie counter</h1>
      <br /><br />
      <h6 class="fs-4">How many calories to eat a day</h6>
      <br>
  <p class="fs-5">The recommended daily calorie intake for the average person is:</p>
  <p class="fs-5">2,500kcal for men</p>
  <p class="fs-5">2,000kcal for women</p>
  <p class="fs-5">To calculate how many calories you had taken today</p>
  <br><br>

  <button class="btn btn-outline-success btn-lg ms-5 mr-5"
            style="padding-left: 2.5rem; padding-right: 2.5rem;"><router-link to="/">Click here to start
            <i class="bi bi-emoji-sunglasses"></i></router-link>
          </button>
     
</div>
</div>
</div>
</div>

</section>
  </template>