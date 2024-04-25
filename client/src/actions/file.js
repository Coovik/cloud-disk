import axios from 'axios'
import { addFile, setFiles } from '../reducers/fileReducer'

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
export const createDir = (name, dirId) => {
   return async dispatch => {
      try {
         const res = await instance.post('', { name, parent: dirId, type: 'dir' },
            {
               headers: { Authorization: 'Bearer ' + localStorage.getItem('token') }
            })
         dispatch(addFile(res.data))
      } catch (e) {
         alert(e.response.data.message)
      }
   }
}