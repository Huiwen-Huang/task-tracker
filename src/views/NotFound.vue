<template>
  <div class="container-fluid px-lg-5">
    <div class="row justify-content-center align-items-center px-lg-5">
      <div class="col-md-8 col-12 p-0 px-lg-5">
        <img src="../assets/img/404 Error.png" alt="404 not found" class="w-100 d-block px-lg-8 m-auto">
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    const backToHome = () => {
      let timerInterval
      Swal.fire({
        title: 'Page Not Found!',
        html: '即將在 <b></b> 秒後返回首頁...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const timer = Swal.getPopup().querySelector('b')
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })
      setTimeout(() => router.push('/'), 2000)
    }

    onMounted(() => {
      setTimeout(() => backToHome(), 1000)
    })

    return {
      backToHome
    }
  }
}
</script>

<style>
  .row{
    min-height: 100vh;
  }
</style>
