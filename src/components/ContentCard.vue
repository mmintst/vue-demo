<script setup lang="ts">
import { ContentDTO } from '../types/dto'

interface IContentCardProps {
  content: ContentDTO
}

defineProps<IContentCardProps>()
</script>

<template>
  <router-link
    :to="{ name: 'Content', params: { id: content.id } }"
    class="flex flex-col m-8 bg-white rounded-3xl overflow-hidden"
  >
    <img :src="content.thumbnailUrl" class="object-cover w-full aspect-video" />
    <div class="m-5 justify-between">
      <div>
        <p>{{ content.videoTitle }}</p>
        <p>{{ content.creatorName }}</p>
        <p>{{ content.comment }}</p>
      </div>
      <p class="text-right">{{ content.postedBy.name }}</p>
    </div>
  </router-link>
</template>
