<template>
<div class="container mt-4">
  <div class="row justify-content-center align-items-center">
    <div class="col-md-6 text-center m-auto">
      <img src="../assets/img/tasktracker-logo.png" alt="to-do-list" class="w-75 mt-5">
      <h2 class="text-secondary fs-3 mt-md-5 mt-4">Welcome to Online TodoList!</h2>
    </div>
    <div class="main col-md-6 m-auto mt-md-3 mt-5 d-flex justify-content-center align-items-center">
      <img src="../assets/img/to-do-list.png" alt="to-do-list" class="w-100">
    </div>
    <router-link to="/login" class="text-light fs-5 py-2 d-inline-block fw-bold text-decoration-none btn btn-primary w-75 mt-md-3 mt-5">登入</router-link>
  </div>
</div>
</template>

<style>
h1{
  font-family: "Lilita One", sans-serif;
  font-size: 60px;
}
h2{
  font-family: "Playwrite DE Grund", cursive;
}
.main{
  max-width: 600px;
}
</style>
