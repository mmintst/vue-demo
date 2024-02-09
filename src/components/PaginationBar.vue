<script setup lang="ts">
import { computed } from 'vue'

interface IPaginationProps {
  contentCount: number
  contentsPerPage: number
  currentPage: number
}

const props = defineProps<IPaginationProps>()

const emit = defineEmits(['changePage'])

const handleChangePage = (page: number) => {
  emit('changePage', page)
}

const pageCount = computed(() =>
  Math.ceil(props.contentCount / props.contentsPerPage),
)
const pages = computed(() => {
  return Array.from({ length: pageCount.value }, (_, i) => i + 1)
})

console.log(pageCount.value)
console.log(pages.value)
</script>

<template>
  <div>
    <slot></slot>
    <div class="join">
      <!-- <button class="join-item btn btn-square bg-white border-transparent">
        «
      </button> -->
      <button
        v-for="page in pages"
        :key="page"
        type="button"
        :class="{ isActive: page === currentPage }"
        class="join-item btn btn-square bg-white border-transparent"
        @click="handleChangePage(page)"
      >
        {{ page }}
      </button>
      <!-- <button class="join-item btn btn-square bg-white border-transparent">
        »
      </button> -->
    </div>
  </div>
</template>
