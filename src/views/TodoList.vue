<template>
  <div class="container">
    <div class="row mt-5 justify-content-between align-items-center m-auto">
      <div class="col-md-4 col-12 px-md-0 px-5 mb-md-0 mb-3">
        <img src="../assets/img/tasktracker-logo.png" alt="logo" class="w-100 px-md-8 px-2">
      </div>
      <div class="col-md-6 col-7 m-auto d-md-flex justify-content-md-end align-items-center text-center">
        <p class="mx-md-4 mx-2 fw-bold mb-md-0 mb-3">Hi! {user}</p>
        <router-link to="/" class="btn btn-outline-primary">登出</router-link>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-md-8 col-11 m-auto d-flex justify-content-center align-items-center">
        <input type="text" class="form-control-lg w-75 border border-primary text-center" placeholder="Add New Todo Now!">
        <a href="#"><i class="bi bi-plus-square fs-1 text-primary ms-2"></i></a>
      </div>
      <div class="col-md-8 col-10 m-auto mt-5 d-md-flex justify-content-md-between">
        <div class="card border-primary me-md-3 mb-3 mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Personal</div>
          <div class="card-body text-primary">
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
          </div>
        </div>
        <div class="card border-primary me-md-3 mb-3 mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Family</div>
          <div class="card-body text-primary">
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
          </div>
        </div>
        <div class="card border-primary mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Work</div>
          <div class="card-body text-primary">
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
            <p class="border rounded p-3 mb-3">This is todo list This is todo list</p>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-10 m-auto mt-3 mb-3">
        <ul class="d-flex justify-content-between align-items-center">
          <li>尚有 5 項待辦</li>
          <li class="btn btn-outline-primary">清除已完成項目</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style>
.container{
  /* max-width: 100vw; */
  .row{
    min-height: 5vh;
  }
}
</style>
