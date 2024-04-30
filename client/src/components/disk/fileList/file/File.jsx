import { useDispatch, useSelector } from 'react-redux'
import fileIcon from '../../../../assets/img/file-icon.svg'
import foderIcon from '../../../../assets/img/folder-icon.svg'
import { pushToStack, setCurrentDir } from '../../../../reducers/fileReducer'
import './File.sass'

export const File = ({ file }) => {
   const dispatch = useDispatch()
   const currentDir = useSelector(state => state.file.currentDir)
   const openDirHandler = () => {
      dispatch(pushToStack(currentDir))
      dispatch(setCurrentDir(file._id))
   }
   return <>
      <div className='file' onClick={file.type === 'dir' ? () => openDirHandler() : ''} >
         <img src={file.type === 'dir' ? foderIcon : fileIcon} alt='' className='file_img' />
         <div className='file_name'>{file.name}</div>
         <div className='file_date'>{file.date.slice(0, 10)}</div>
         <div className='file_size'>{file.size}</div>
      </div>
   </>
}