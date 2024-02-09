import { ref, computed } from 'vue'
import { ContentsDTO } from '../types/dto'

const usePagination = (contents: ContentsDTO) => {
  const currentPage = ref<number>(1)
  const contentsPerPage = ref<number>(12)

  const displayedContents = computed(() => {
    const startIndex = (currentPage.value - 1) * contentsPerPage.value
    const endIndex = startIndex + contentsPerPage.value

    return contents.data.slice(startIndex, endIndex)
  })

  const changePage = (pageNumber: number) => {
    currentPage.value = pageNumber
  }

  return {
    currentPage,
    contentsPerPage,
    displayedContents,
    changePage,
  }
}

export default usePagination
