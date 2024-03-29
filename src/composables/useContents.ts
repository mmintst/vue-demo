import { ref } from 'vue'
import { ContentsDTO, CreateContentDTO } from '../types/dto'
import axios from 'axios'

const useContents = () => {
  const contents = ref<ContentsDTO | null>(null)
  const error = ref<string>('')

  axios
    .get<ContentsDTO>('https://api.learnhub.thanayut.in.th/content')
    .then((res) => (contents.value = res.data))
    .catch((err) => (error.value = err))

  const createContent = async (contentBody: CreateContentDTO) => {
    const token = localStorage.getItem('token')

    try {
      await axios.post(
        'https://api.learnhub.thanayut.in.th/content',
        contentBody,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
          },
        },
      )
    } catch (err) {
      console.log(err)
    }
  }

  return { contents, error, createContent }
}

export default useContents
