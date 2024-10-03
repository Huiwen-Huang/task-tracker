<template>
  <div class="container mt-md-5 mt-4 d-flex align-items-center">
    <div class="row mt-5 flex-sm-colum-reverse justify-content-center align-items-center">
      <div class="col-md-4 mt-md-5 mt-3 ms-md-5">
        <h3 class="fs-3 fw-bold text-center mb-md-4 mb-2">登入會員</h3>
        <form @submit.prevent="login">
          <div class="p-md-0 p-3">
            <div class="form-floating mb-3">
              <input type="email" class="form-control mb-3" id="floatingInput" name="email" placeholder="name@example.com" v-model="userEmail" required>
              <label for="floatingInput" class="">帳號</label>
            </div>
            <div class="form-floating mb-3">
              <input type="password" class="form-control mb-4" name="psw" id="psw" placeholder="密碼" v-model="userPsw" required>
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

<script>
import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'
import Swal from 'sweetalert2'

export default {
  name: 'app',
  setup () {
    const router = useRouter()
    const api = 'https://todoo.5xcamp.us'
    const userEmail = ref('')
    const userPsw = ref('')

    let token = ''
    let username = ''

    const login = () => {
      const obj = {
        user: {
          email: userEmail.value,
          password: userPsw.value
        }
      }
      axios.post(`${api}/users/sign_in`, obj).then((Response) => {
        token = Response.headers.authorization
        username = Response.data.nickname
        console.log(Response, token)
        localStorage.setItem('token', token)
        localStorage.setItem('username', username)
        successAlert()
        setTimeout(() => router.push('/todo'), 1500)
      }).catch((Error) => {
        errorAlert()
        console.log(Error.response)
      })
      userEmail.value = ''
      userPsw.value = ''
    }

    const successAlert = () => {
      Swal.fire({
        title: 'Welcome to <br> TaskTracker!',
        showConfirmButton: false,
        timer: 1200
      })
    }
    const errorAlert = () => {
      Swal.fire({
        title: 'Error!',
        text: 'Please login again.',
        icon: 'error',
        iconColor: '#F3B562',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A7C4B5'
      })
    }

    return {
      userEmail,
      userPsw,
      login
    }
  }
}
</script>

<style>
.row{
  min-height: 80vh;
}
.swal2-title{
  line-height: 1.5;
}
</style>
