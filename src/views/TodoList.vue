<template>
  <div class="container">
    <!-- header -->
    <div class="row mt-5 justify-content-between align-items-center m-auto">
      <div class="col-md-4 col-12 px-md-0 px-5 mb-md-0 mb-3">
        <img src="../assets/img/tasktracker-logo.png" alt="logo" class="w-100 px-md-8 px-2">
      </div>
      <div class="col-md-6 col-7 m-auto d-md-flex justify-content-md-end align-items-center text-center">
        <p class="mx-md-4 mx-2 fw-bold fs-5 mb-md-0 mb-3">Hi! {{ username }}</p>
        <!-- <button class="btn btn-outline-primary" @click.prevent="logout">登出</button> -->
        <a href="" class="text-secondary text-decoration-none" @click.prevent="logout">登出</a>
      </div>
    </div>
    <!-- Todo -->
    <div class="row mt-4">
      <!-- addTodo -->
      <div class="col-md-8 col-11 m-auto d-flex justify-content-center align-items-center">
        <input type="text" class="form-control-lg w-75 border border-primary text-center" placeholder="Add New Todo Now!" v-model="newTodo">
        <a href="#" @click.prevent="addTodo"><i class="bi bi-plus-square fs-1 text-primary ms-2"></i></a>
      </div>
      <!-- todoList -->
      <div class="col-md-8 col-10 m-auto mt-5 d-md-flex justify-content-md-between">
        <div class="card border-primary me-md-3 mb-3 mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Personal</div>
          <div class="card-body text-primary">
            <button type="button" class="btn btn-outline-primary d-flex flex-column w-100 py-2 px-3 mb-3" v-for="item in todos" :key="item.id" @click="deleteTodo(item.id)">{{ item.content }}</button>
          </div>
        </div>
        <div class="card border-primary me-md-3 mb-3 mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Family</div>
          <div class="card-body text-primary">
            <button type="button" class="btn btn-outline-primary d-flex flex-column w-100 py-2 px-3 mb-3" v-for="item in todos" :key="item.id" @click="deleteTodo(item.id)">{{ item.content }}</button>
          </div>
        </div>
        <div class="card border-primary mb-3 mx-auto">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Work</div>
          <div class="card-body">
            <button type="button" class="btn btn-outline-primary d-flex flex-column w-100 py-2 px-3 mb-3" v-for="item in todos" :key="item.id" @click="deleteTodo(item.id)">{{ item.content }}</button>
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

<script>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import router from '@/router'

export default {
  name: 'app',
  setup () {
    const api = 'https://todoo.5xcamp.us'
    const token = localStorage.getItem('token')
    const username = localStorage.getItem('username')

    const logout = () => {
      axios.delete(`${api}/users/sign_out`, {
        headers: {
          Authorization: token
        }
      }).then((Response) => {
        logoutAlert()
        console.log(Response)
        setTimeout(() => router.push('/'), 1500)
      })
    }

    const todos = ref([])
    const getTodo = () => {
      const tokenKey = {
        headers: {
          Authorization: token
        }
      }
      axios.get(`${api}/todos`, tokenKey).then((Response) => {
        todos.value = Response.data.todos
        console.log(Response.data.todos)
      })
    }
    onMounted(() => {
      getTodo()
    })

    const newTodo = ref('')
    const addTodo = () => {
      if (newTodo.value === '') {
        addAlert()
        return
      }
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
      axios.post(`${api}/todos`, todo, tokenKey)
        .then((Response) => {
          addSuccessAlert()
          const obj = {}
          obj.id = Response.data.id
          obj.content = Response.data.content
          todos.value.unshift(obj)
        })
        .catch((Error) => console.log(Error))
      newTodo.value = ''
    }

    const editTodo = (todoId) => {
      const editedTodo = {
        todo: {
          content: newTodo.value
        }
      }
      const tokenKey = {
        headers: {
          Authorization: token
        }
      }
      axios.put(`${api}/todos/${todoId}`, editedTodo, tokenKey)
        .then((Response) => {
          console.log(Response)
        })
    }

    const deleteTodo = (todoId) => {
      const tokenKey = {
        headers: {
          Authorization: token
        }
      }
      axios.delete(`${api}/todos/${todoId}`, tokenKey)
        .then((Response) => {
          console.log(Response)
          deleteAlert()
          setTimeout(() => getTodo(), 1500)
        })
    }

    // alert
    const addAlert = () => {
      Swal.fire({
        text: '新增欄位不得空白！',
        confirmButtonText: 'OK',
        confirmButtonColor: '#A7C4B5',
        width: 300
      })
    }
    const addSuccessAlert = () => {
      Swal.fire({
        title: 'Add Success!',
        showConfirmButton: false,
        timer: 1000,
        width: 300
      })
    }
    const logoutAlert = () => {
      Swal.fire({
        title: 'Logout Success!',
        showConfirmButton: false,
        timer: 1500,
        width: 400
      })
    }
    const deleteAlert = () => {
      Swal.fire({
        title: 'Delete Success!',
        showConfirmButton: false,
        timer: 1500,
        width: 400
      })
    }

    return {
      // data
      username,
      newTodo,
      todos,
      // fn
      getTodo,
      addTodo,
      logout,
      editTodo,
      deleteTodo,
      // alert
      addAlert,
      addSuccessAlert,
      logoutAlert,
      deleteAlert
    }
  }
}
</script>

<style>
.container{
  /* max-width: 100vw; */
  .row{
    min-height: 5vh;
  }
}
</style>
