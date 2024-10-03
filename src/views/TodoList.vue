<template>
  <div class="container">
    <!-- header -->
    <div class="row mt-5 justify-content-between align-items-center m-auto">
      <div class="col-md-4 col-12 px-md-0 px-5 mb-md-0 mb-3">
        <img src="../assets/img/tasktracker-logo.png" alt="logo" class="w-100 px-md-8 px-2">
      </div>
      <div class="col-md-6 col-7 m-auto d-md-flex justify-content-md-end align-items-center text-center">
        <p class="mx-md-4 mx-2 fw-bold fs-5 mb-md-0 mb-3">Hi! {{ username }}</p>
        <a href="" class="text-secondary text-decoration-none" @click.prevent="logout">登出</a>
      </div>
    </div>
    <!-- Todo -->
    <div class="row mt-4">
      <!-- addTodo -->
      <form class="col-md-8 col-11 m-auto d-flex justify-content-center align-items-center" @submit.prevent="addTodo">
        <select class="form-select form-select-sm w-25 px-4 py-2 me-3" v-model="todoCategory">
          <option value="category" selected disabled>Todo Category</option>
          <option value="personal">Personal</option>
          <option value="family">Family</option>
          <option value="work">Work</option>
        </select>
        <input type="text" class="form-control-lg w-75 border border-primary text-center" placeholder="Add New Todo Now!" v-model="newTodo">
        <button class="btn"><i class="bi bi-plus-square fs-1 text-primary ms-2"></i></button>
      </form>
      <!-- todoList -->
      <div class="col-md-10 col-10 m-auto mt-5 d-md-flex justify-content-md-between">
        <div class="card border-primary me-md-3 mb-3 mx-auto w-25">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Personal</div>
          <div class="card-body text-primary">
            <ul v-if="todos.length > 0">
              <li class="d-flex align-items-center"
                v-for="item in todos"
                :key="item.id">
                <button type="button" class="btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3"
                :class="{ 'active': item.completed_at !== null }"
                @click.prevent="doneTodo(item.id)">
                  <i class="bi bi-check-circle-fill text-light fs-4"></i>
                  <p class="px-3">{{ item.content }}</p>
                </button>
                <a href=""><i class="fa-solid fa-pencil d-inline-block mb-3 ms-2"></i></a>
                <a href=""><i class="fa-regular fa-trash-can d-inline-block mb-3 ms-2" @click.prevent="deleteTodo(item.id)"></i></a>
              </li>
            </ul>
            <ul v-else>
              <li class="fs-5 text-secondary text-center">Nothing Todo...</li>
            </ul>
          </div>
        </div>
        <div class="card border-primary me-md-3 mb-3 mx-auto w-25">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Family</div>
          <div class="card-body text-primary">
            <ul v-if="todos.length > 0">
              <li class="d-flex align-items-center"
                v-for="item in todos"
                :key="item.id">
                <button type="button" class="btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3"
                :class="{ 'active': item.completed_at !== null }"
                @click.prevent="doneTodo(item.id)">
                  <i class="bi bi-check-circle-fill text-light fs-4"></i>
                  <p class="px-3">{{ item.content }}</p>
                </button>
                <a href=""><i class="fa-solid fa-pencil d-inline-block mb-3 ms-2"></i></a>
                <a href=""><i class="fa-regular fa-trash-can d-inline-block mb-3 ms-2" @click.prevent="deleteTodo(item.id)"></i></a>
              </li>
            </ul>
            <ul v-else>
              <li class="fs-5 text-secondary text-center">Nothing Todo...</li>
            </ul>
          </div>
        </div>
        <div class="card border-primary mb-3 mx-auto w-25">
          <div class="card-header fs-4 fw-bold p-3 text-center text-secondary">Work</div>
          <div class="card-body">
            <ul v-if="todos.length > 0">
              <li class="d-flex align-items-center"
                v-for="item in todos"
                :key="item.id">
                <button type="button" class="btn btn-outline-primary d-flex align-items-center w-100 py-1 px-2 mb-3"
                :class="{ 'active': item.completed_at !== null }"
                @click.prevent="doneTodo(item.id)">
                  <i class="bi bi-check-circle-fill text-light fs-4"></i>
                  <p class="px-3">{{ item.content }}</p>
                </button>
                <a href=""><i class="fa-solid fa-pencil d-inline-block mb-3 ms-2"></i></a>
                <a href=""><i class="fa-regular fa-trash-can d-inline-block mb-3 ms-2" @click.prevent="deleteTodo(item.id)"></i></a>
              </li>
            </ul>
            <ul v-else>
              <li class="fs-5 text-secondary text-center">Nothing Todo...</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-md-8 col-10 m-auto mt-3 mb-3">
        <ul class="d-flex justify-content-between align-items-center">
          <li>尚有 {{ undone.length }} 項待辦</li>
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
    const todoCategory = ref('Todo Category')
    localStorage.setItem('todoCategory', todoCategory)
    const logout = () => {
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.delete(`${api}/users/sign_out`, options)
        .then((Response) => {
          logoutAlert()
          console.log(Response)
          setTimeout(() => router.push('/'), 1500)
        })
    }
    const todos = ref([])
    const getTodo = () => {
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.get(`${api}/todos`, options)
        .then((Response) => {
          todos.value = Response.data.todos
          console.log(Response.data.todos)
        })
        .catch((Error) => console.log(Error))
    }
    onMounted(() => {
      getTodo()
    })
    // 尚有 xx 待辦 待研究！
    const undone = todos.value.filter((todo) => todo.completed_at === null)
    const newTodo = ref('')
    const addTodo = () => {
      if (newTodo.value === '') {
        addAlert()
        return
      }
      const todo = {
        todo: {
          content: newTodo.value.trim()
        }
      }
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.post(`${api}/todos`, todo, options)
        .then((Response) => {
          addSuccessAlert()
          const obj = {}
          obj.id = Response.data.id
          obj.content = Response.data.content
          todos.value.unshift(obj)
          getTodo()
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
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.put(`${api}/todos/${todoId}`, editedTodo, options)
        .then((Response) => {
          console.log(Response)
        })
        .catch((Error) => console.log(Error))
    }
    const doneTodo = (todoId) => {
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.patch(`${api}/todos/${todoId}/toggle`, {}, options)
        .then((Response) => {
          toggleAlert()
          getTodo()
        })
        .catch((Error) => console.log(Error))
    }
    const deleteTodo = (todoId) => {
      const options = {
        headers: {
          Authorization: token
        }
      }
      axios.delete(`${api}/todos/${todoId}`, options)
        .then((Response) => {
          console.log(Response)
          deleteAlert()
          setTimeout(() => getTodo(), 1500)
        })
        .catch((Error) => console.log(Error))
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
    const toggleAlert = () => {
      Swal.fire({
        title: 'Todo Status Change.',
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
      undone,
      todoCategory,

      // methods
      getTodo,
      addTodo,
      logout,
      editTodo,
      deleteTodo,
      doneTodo
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
