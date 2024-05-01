import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import './Disk.sass'
import { Popup } from './Popup'
import { FileList } from './fileList/FileList'
import { popFromStack, setCurrentDir } from '../../reducers/fileReducer'


export const Disk = props => {
   const dispatch = useDispatch()
   const currentDir = useSelector(state => state.file.currentDir)
   const stack = useSelector(state => state.file.stack)
   const backClickHandler = () => {
      dispatch(popFromStack())
      dispatch(setCurrentDir(stack.at(-1)))
   }
   const fileUploadHendler = (e) => {
      const files = [...e.target.files]
      files.forEach(file => dispatch(uploadFile(file, currentDir)))
   }
   const [popup, setPopup] = useState('none')
   useEffect(() => {
      dispatch(getFiles(currentDir))
   }, [currentDir])
   return <>
      <div className='disk'>
         <div className='disk_btns'>
            <button className='disk_back btn' disabled={stack.length == 0 && true} onClick={() => backClickHandler()} >Назад</button>
            <button className='disk_create btn' onClick={() => setPopup('flex')}>Создать папку</button>
            <div className='disk_upload btn'>
               <label htmlFor='disk_upload-input' className='disk_upload-label btn'>Загрузить файл</label>
               <input onChange={fileUploadHendler} type='file' className='disk_upload-input' id='disk_upload-input' />
            </div>
         </div>
         <FileList />
      </div>
      <Popup popup={popup} setPopup={setPopup} />
   </>
}