<script setup lang="ts">
import { ref } from 'vue'
import useContents from '../composables/useContents'
import router from '../router'

const { createContent } = useContents()
const url = ref<string>('')
const comment = ref<string>('')
const rating = ref<number>(0)

const handleSubmit = async () => {
  try {
    await createContent({
      videoUrl: url.value,
      comment: comment.value,
      rating: rating.value,
    })

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
      <label class="px-5">Video Url:</label>
      <input
        v-model="url"
        type="text"
        class="border-solid border-2 rounded-xl p-1"
        required
      />
    </div>
    <div class="m-4 w-[330px] flex justify-between items-center">
      <label class="px-5">Comment:</label>
      <input
        v-model="comment"
        type="text"
        class="border-solid border-2 rounded-xl p-1"
        required
      />
    </div>
    <div class="m-4 w-[330px] flex justify-between items-center">
      <label class="px-5">Rating:</label>
      <input
        v-model="rating"
        type="number"
        min="0"
        max="5"
        class="border-solid border-2 rounded-xl p-1"
      />
    </div>
    <button class="mt-5 bg-white rounded-xl px-3 py-1 hover:bg-slate-200">
      Submit
    </button>
  </form>
</template>
