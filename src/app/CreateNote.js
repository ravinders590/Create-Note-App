import React from 'react'
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import Link from '@mui/material/Link';


const CreateNote = () => {
  return (
    <>
    <div className='createNote-wrapper'>
        <div className='createNote-container'>
            <div className='card-column'>
                <div className='card-item'>
                    <div className='card-heading'>
                        Title
                    </div>
                    <div className='card-description'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </div>
                    <div className='delete-icon'>
                        <Link href="#"><DeleteOutlineOutlinedIcon/></Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default CreateNote