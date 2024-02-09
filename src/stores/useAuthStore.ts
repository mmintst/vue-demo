import { defineStore } from 'pinia'
import { ref } from 'vue'
import { LoginDTO, CredentialDTO } from '../types/dto'
import axios from 'axios'

const token = localStorage.getItem('token')
const user = localStorage.getItem('user')

const useAuthStore = defineStore('auth', () => {
  const isLoggedIn = ref<boolean>(!!token)
  const username = ref<string | null>(user)

  const login = async (loginBody: LoginDTO) => {
    try {
      const res = await axios.post<CredentialDTO>(
        'https://api.learnhub.thanayut.in.th/auth/login',
        loginBody,
        {
          headers: {
            'Content-Type': 'application/json',
          },
        },
      )

      isLoggedIn.value = true
      username.value = loginBody.username
      localStorage.setItem('token', res.data.accessToken)
      localStorage.setItem('username', loginBody.username)
    } catch (err) {
      console.log(err)
    }
  }

  return { isLoggedIn, username, login }
})

export default useAuthStore
