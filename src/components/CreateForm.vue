<script setup lang="ts">
import { ref } from 'vue'

const name = ref<string>('')
const comment = ref<string>('')

const handleSubmit = async () => {
  try {
    console.log('name: ', name.value, 'comment: ', comment.value)

    name.value = ''
    comment.value = ''
  } catch (err) {
    console.log(err)
  }
}
</script>

<template>
  <form @submit.prevent="handleSubmit">
    <div>
      <label>Name :</label>
      <input v-model="name" type="text" required />
    </div>
    <div>
      <label>Comment :</label>
      <input v-model="comment" type="text" required />
    </div>
    <button>Submit</button>
  </form>
</template>
