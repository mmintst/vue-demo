<script setup lang="ts">
import usePagination from '../composables/usePagination'
import { ContentsDTO } from '../types/dto'
import ContentCard from './ContentCard.vue'
import PaginationBar from './PaginationBar.vue'

interface IContentListProps {
  contents: ContentsDTO
}

const { contents } = defineProps<IContentListProps>()

const { currentPage, contentsPerPage, displayedContents, changePage } =
  usePagination(contents)
</script>

<template>
  <div class="flex flex-col items-center">
    <div class="grid grid-cols-4 my-8 mx-8">
      <ContentCard
        v-for="content in displayedContents"
        :key="content.id"
        :content="content"
      />
    </div>
    <PaginationBar
      :content-count="contents.data.length"
      :contents-per-page="contentsPerPage"
      :current-page="currentPage"
      class="m-8"
      @change-page="changePage"
    />
  </div>
</template>
