<template>
  <div class="container mt-md-5 mt-3">
    <div class="row mt-5 flex-sm-colum-reverse justify-content-center align-items-center">
      <div class="col-md-4 mt-md-5 mt-3 ms-md-5">
        <h3 class="fs-3 fw-bold text-center mb-md-4 mb-2">登入會員</h3>
        <form>
          <div class="p-md-0 p-3">
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-3" id="floatingInput" name="email" placeholder="name@example.com" required>
              <label for="floatingInput" class="">帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-4" name="psw" id="psw" placeholder="密碼" required>
              <label for="psw">密碼</label>
            </div>
            <button class="btn btn-primary text-light w-100 mb-4">登入</button>
            <p class="text-center">首次使用 ｜ <router-link to="/signup" class="text-secondary">立即註冊</router-link></p>
          </div>
        </form>
      </div>
      <div class="col-md-5 col-10">
        <img src="../assets/img/girl-list-2.png" alt="list-girl" class="w-100">
      </div>
    </div>
  </div>
</template>

<style>
.row{
  min-height: 80vh;
}
</style>
