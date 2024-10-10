<template>
  <div class="container mb-3">
    <!-- header -->
    <div class="row mt-5 justify-content-between align-items-center m-auto mb-md-0 mb-5">
      <div class="col-md-4 col-12 px-md-0 px-5 mb-md-0 mb-4">
        <img src="../assets/img/tasktracker-logo.png" alt="logo" class="logo px-lg-4 py-lg-2 px-md-5 py-md-4 px-2 d-block mx-auto">
      </div>
      <div class="col-md-6 col-7 m-auto d-flex justify-content-md-end justify-content-center align-items-center text-center">
        <p class="mx-md-4 mx-3 fw-bold fs-5">Hi! {{ username }}</p>
        <a href="" class="text-secondary text-decoration-none" @click.prevent="logout">登出</a>
      </div>
    </div>
    <!-- addTodo input -->
    <form class="col-md-8 col-11 m-auto d-flex justify-content-center align-items-center" @submit.prevent="addTodo">
      <input type="text" class="form-control w-75 border border-primary text-center p-2" placeholder="Add New Todo Now!" v-model="newTodo">
      <button class="btn btn-outline-primary ms-2"><i class="fa-solid fa-plus"></i></button>
    </form>
    <!-- Todo -->
    <div class="todos row mt-4">
      <!-- todoList -->
      <div class="col-md-9 col-11 mx-auto mt-5 p-0 d-md-flex justify-content-md-between">
        <div class="card border-primary me-md-3 mb-4 mx-auto w-100 shadow">
          <ul class="card-header fs-4 fw-bold d-flex justify-content-center">
            <li class="px-md-5 px-2 py-3 mx-lg-5"><a href="#" class="text-center px-3 text-decoration-none"  :class="{ visited: status == 'all' }" @click.prevent="status = 'all'">All</a></li>
            <li class="px-md-5 px-2 py-3 mx-lg-5"><a href="#" class="text-center px-3 text-decoration-none" :class="{ visited: status == 'undo' }" @click.prevent="status = 'undo'">Undo</a></li>
            <li class="px-md-5 px-2 py-3 mx-lg-5"><a href="#" class="text-center px-3 text-decoration-none" :class="{ visited: status == 'done' }" @click.prevent="status = 'done'">Done</a></li>
          </ul>
          <div class="card-body text-primary px-4">
            <ul v-if="todos.length > 0">
              <li class="d-flex align-items-center rounded shadow-sm py-2 px-2 mb-2 w-100"
                v-for="item in filteredTodos"
                :key="item.id"
                :class="{ 'bg-primary': item.completed_at !== null }"
                @click.prevent="doneTodo(item.id)">
                <div class="row w-100 justify-content-between">
                  <div class="col-10 d-flex align-items-center">
                    <button class="btn p-0 rounded"><i class="bi bi-check-circle-fill text-light fs-4"></i></button>
                    <p class="px-3"
                    :class="{ 'text-light': item.completed_at !== null }">{{ item.content }}</p>
                  </div>
                  <div class="col-2 d-flex align-items-center justify-content-end">
                    <!-- <a href=""><i class="fa-solid fa-pencil d-inline-block ms-2"
                      :class="{ 'text-light': item.completed_at !== null }"
                      @click.prevent.stop=""></i></a> -->
                    <a href=""><i class="fa-regular fa-trash-can ms-2"
                      :class="{ 'text-light': item.completed_at !== null }"
                      @click.prevent.stop="deleteTodo(item.id)"></i></a>
                  </div>
                </div>
              </li>
            </ul>
            <ul v-else>
              <li class="fs-5 text-secondary text-center">Nothing Todo...</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- footer -->
      <div class="footer col-md-9 col-11 mx-auto p-0" v-show="todos.length > 0">
        <ul class="d-flex justify-content-between align-items-center">
          <li class="me-md-3">尚有 <strong class="fw-bold">{{ undone.length }}</strong> 項待辦</li>
          <li class="btn btn-outline-primary me-md-3" @click.prevent="deleteAll">清除已完成項目</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from 'vue'
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
          // console.log(Response.data.todos)
        })
        .catch((Error) => console.log(Error))
    }
    onMounted(() => {
      getTodo()
    })
    // Todos filter
    const filters = {
      all: (todos) => todos,
      undo: (todos) => todos.filter((todo) => todo.completed_at === null),
      done: (todos) => todos.filter((todo) => todo.completed_at !== null)
    }
    // Todos status
    const status = ref('all')
    const filteredTodos = computed(() => filters[status.value](todos.value))
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
          newTodo.value.focus()
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
    const deleteAll = () => {
      const options = {
        headers: {
          Authorization: token
        }
      }
      const doneUrl = todos.value.filter((todo) => todo.completed_at !== null)
      if (doneUrl.length === 0) {
        errorAlert()
      } else {
        doneUrl.forEach((todo) => {
          const url = `${api}/todos/${todo.id}`
          axios.delete(url, options)
            .then(res => getTodo())
            .catch(error => {
              console.log(error)
            })
          deleteAlert()
        })
      }
      // console.log('doneUrl', doneUrl)
      // const url1 = `${api}/todos/82f2eef2b33dc7f9d671167e37a2e885`
      // const url2 = `${api}/todos/82fd863de55c4011dadcb250ce6c881e`

      // const promise1 = axios.delete(url1, options)
      // const promise2 = axios.delete(url2, options)

      // Promise.all([promise1, promise2])
      //   .then((res) => {
      //     console.log(res)
      //     getTodo()
      //   })
    }

    // 未完成待辦數量
    const undone = computed(() => todos.value.filter((todo) => todo.completed_at === null))

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
    const errorAlert = () => {
      Swal.fire({
        title: 'Todo undo!',
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
      filters,
      status,
      filteredTodos,

      // methods
      getTodo,
      addTodo,
      logout,
      editTodo,
      deleteTodo,
      doneTodo,
      deleteAll
    }
  }
}
</script>

<style>
.container{
  .todos{
    min-height: 75vh;
  }
  .logo{
    width: 264px;
    height: 135px;
  }
  .btn{
    --bs-btn-active-color: #fff;
    --bs-btn-hover-color: #fff;
  }
  .visited{
    border: 2px solid #A7C4B5;
    border-radius: 8px;
  }
}
</style>
