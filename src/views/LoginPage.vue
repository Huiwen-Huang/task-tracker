<template>
  <div class="container mt-md-5 mt-3">
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

export default {
  name: 'app',
  setup () {
    const router = useRouter()
    const api = 'https://todoo.5xcamp.us'
    const userEmail = ref('')
    const userPsw = ref('')

    let token = ''

    const login = () => {
      const obj = {
        user: {
          email: userEmail.value,
          password: userPsw.value
        }
      }
      axios.post(`${api}/users/sign_in`, obj).then((Response) => {
        token = Response.headers.authorization
        console.log(Response, token)
        localStorage.setItem('token', token)
        router.push('/todo')
      }).catch((Error) => console.log(Error.response))

      userEmail.value = ''
      userPsw.value = ''
    }

    const newTodo = ref('')
    const addTodo = () => {
      const todo = {
        todo: {
          content: newTodo.value
        }
      }
      const tokenKey = {
        headers: {
          Authorization: token
        }
      }
      axios.post(`${api}/todos`, todo, tokenKey).then((Response) => console.log(Response)).catch((Error) => console.log(Error.response.data))
    }
    const getTodo = () => {
      axios.get(`${api}/todos`, {
        headers: {
          Authorization: token
        }
      }).then((Response) => {
        console.log(Response)
        const body = document.querySelector('body')
        const alltodo = document.querySelector('.alltodo').textContent = Response.data.todos.join(' ')
        body.appendChild(alltodo)
      }).catch((Error) => console.log(Error.response.data))
    }
    // onMounted(() => {
    //   axios.get(`${api}/todos`, {
    //     headers: {
    //       Authorization: token
    //     }
    //   }).then((Response) => console.log(Response))
    // })
    return {
      userEmail,
      userPsw,
      login,
      getTodo,
      addTodo,
      newTodo
    }
  }
}
</script>

<style>
.row{
  min-height: 80vh;
}
</style>
