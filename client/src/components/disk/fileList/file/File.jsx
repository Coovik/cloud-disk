import fileIcon from '../../../../assets/img/file-icon.svg'
import foderIcon from '../../../../assets/img/folder-icon.svg'
import './File.sass'

export const File = ({ file }) => {
   return <>
      <div className='file'>
         <img src={file.type === 'dir' ? foderIcon : fileIcon} alt='' className='file_img' />
         <div className='file_name'>{file.name}</div>
         <div className='file_date'>{file.date.slice(0, 10)}</div>
         <div className='file_size'>{file.size}</div>
      </div>
   </>
}