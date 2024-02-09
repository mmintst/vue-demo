<script setup lang="ts">
import useContent from '../composables/useContent'
import Youtube from 'vue3-youtube'
interface IContentPageProps {
  id: string
}

const { id } = defineProps<IContentPageProps>()
// const props = defineProps<IContentPageProps>()

const { content, error } = useContent(id)
// const { content, error } = useContent(props.id)
</script>

<template>
  <div v-if="!content">Loading...</div>
  <div
    v-if="content"
    class="flex flex-col justify-center items-center bg-white rounded-3xl mx-auto my-20 gap-4 max-w-3xl p-8"
  >
    <p>{{ content.videoTitle }}</p>
    <p>{{ content.creatorName }}</p>
    <div class="overflow-hidden rounded-3xl">
      <Youtube :src="content.videoUrl" />
    </div>
    <p>{{ content.comment }}</p>
    <p>by {{ content.postedBy.name }}</p>
    <p>Rating: {{ content.rating }}</p>
  </div>
  <div v-else-if="error">{{ error }}</div>
</template>
