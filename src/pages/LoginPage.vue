<script setup lang="ts">
import { ref } from 'vue'
import useAuthStore from '../stores/useAuthStore'
import router from '../router'

const store = useAuthStore()
const username = ref<string>('')
const password = ref<string>('')

const handleSubmit = async () => {
  try {
    await store.login({ username: username.value, password: password.value })

    router.push('/')
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <form
    class="flex flex-col items-center h-screen justify-center"
    @submit.prevent="handleSubmit"
  >
    <div class="m-4 w-[330px] flex justify-between items-center">
      <label class="px-5">Username</label>
      <input
        v-model="username"
        class="border-solid border-2 rounded-xl p-1"
        type="text"
        required
      />
    </div>
    <div class="m-4 w-[330px] flex justify-between items-center">
      <label class="px-5">Password</label>
      <input
        v-model="password"
        class="border-solid border-2 rounded-xl p-1"
        type="password"
        required
      />
    </div>
    <button class="mt-5 bg-white rounded-xl px-3 py-1 hover:bg-slate-200">
      Login
    </button>
  </form>
</template>
