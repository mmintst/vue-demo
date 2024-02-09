<script setup lang="ts">
import ContentList from '../components/ContentList.vue'
import useContents from '../composables/useContents'

const { contents, error } = useContents()
</script>

<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="contents">
    <ContentList :contents="contents" />
  </div>
</template>
