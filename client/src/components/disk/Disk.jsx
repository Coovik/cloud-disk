import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file'
import './Disk.sass'
import { Popup } from './Popup'
import { FileList } from './fileList/FileList'

export const Disk = props => {
   const dispatch = useDispatch()
   const currentDir = useSelector(state => state.file.currentDir)
   const [popup, setPopup] = useState('none')
   useEffect(() => {
      dispatch(getFiles(currentDir))
   }, [currentDir])
   return <>
      <div className='disk'>
         <div className='disk_btns'>
            <button className='disk_back'>Назад</button>
            <button className='disk_create' onClick={() => setPopup('flex')}>Создать папку</button>
         </div>
         <FileList />
      </div>
      <Popup popup={popup} setPopup={setPopup} />
   </>
}