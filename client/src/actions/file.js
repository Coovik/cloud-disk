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
         // alert(e.response.data.message)
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
export const uploadFile = (file, dirId) => {
   return async dispatch => {
      try {
         const formData = new FormData()
         formData.append('file', file)
         if (dirId) {
            formData.append('parent', dirId)
         }
         const res = await instance.post('/upload', formData, {
            headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
            onUploadProgress: progressEvent => {
               const totalLength = progressEvent.event.lengthComputable ? progressEvent.total : progressEvent.event.target.getResponseHeader('content-length') || progressEvent.target.getResponseHeader('x-decompressed-content-length')
               console.log('total ', totalLength)
               if (totalLength) {
                  let progress = Math.round((progressEvent.loaded * 100) / totalLength)
                  console.log(progress)
               }
            }
         })
         dispatch(addFile(res.data))
      } catch (e) {
         alert(e.response.data.message)

      }
   }
}