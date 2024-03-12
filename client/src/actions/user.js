import axios from 'axios'

const instance = axios.create({
   baseURL: 'http://localhost:4000/api/auth/',
})

export const registration = async (email, password) => {
   try {
      const res = await instance.post(`registration`, {
         email,
         password
      })
      alert(res.data.message)
   } catch (e) {
      alert(e.response.data.message)
   }
}