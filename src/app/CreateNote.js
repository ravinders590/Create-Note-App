import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from '@mui/material/Link';


const CreateNote = ({title,notes,DeleteItems,index}) => {
  return (
    <>
    
        <div className='card-column'>
            <div className='card-item'>
                <div className='card-heading'>
                    {title}
                </div>
                <div className='card-description'>
                {notes}
                </div>
                <div className='delete-icon'>
                    <Link href="#" onClick={()=>DeleteItems(index)}><DeleteOutlineOutlinedIcon/></Link>
                </div>
            </div>
        </div>
        
    </>
  )
}

export default CreateNote