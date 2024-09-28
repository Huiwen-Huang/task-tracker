<template>
  <div class="container mt-md-5 mt-3">
    <div class="row mt-5 justify-content-center align-items-center">
      <div class="col-md-5 col-10">
        <img src="../assets/img/girl-list.png" alt="list-girl" class="w-100">
      </div>
      <div class="col-md-4 mt-md-5 mt-3 ms-md-5">
        <h3 class="fs-3 fw-bold text-center mb-md-4 mb-2">註冊會員</h3>
        <form>
          <div class="p-md-0 p-3">
            <div class="form-floating mb-3">
              <input type="text" class="form-control mb-3" name="name" id="name" placeholder="使用者名稱" required>
              <label for="name">使用者名稱</label>
            </div>
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-3" id="floatingInput" name="email" placeholder="name@example.com" required>
              <label for="floatingInput">登入帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-3" name="psw" id="psw" placeholder="登入密碼" required>
              <label for="psw">登入密碼</label>
            </div>
            <div class="form-floating mb-md-3 mb-4">
              <input type="password" class="form-control mb-3" name="psw2" id="psw2" placeholder="再次確認密碼" required>
              <label for="psw">再次確認密碼</label>
            </div>
            <button class="btn btn-primary text-light w-100 mb-md-3 mb-4">註冊</button>
            <p class="text-center">已是會員 ｜ <router-link to="/login" class="text-secondary">直接登入</router-link></p>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style>
.row{
  min-height: 80vh;
}
.bg-img{
  background-image: url("../assets/img/girl-list.png");
  background-size: 110%;
  background-repeat: no-repeat;
  height: 300px;
}
</style>
