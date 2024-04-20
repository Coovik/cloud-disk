import axios from 'axios'
import { setFiles } from '../reducers/fileReducer'

const instance = axios.create({
   baseURL: 'http://localhost:4000/api/files',
})

export const getFiles = dirId => {
   return async dispatch => {
      try {
         const res = await instance.get(dirId ? '?parent=' + dirId : '', {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
         })
         dispatch(setFiles(res.data))
      } catch (e) {
         alert(e.response.data.message)
      }
   }
}