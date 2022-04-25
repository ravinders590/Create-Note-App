import React from 'react';
import CreateNote from './CreateNote';
import './Note.css'

const Note = ({changecolumn,showItems,task,handleForm}) => {

    
  return (
    <>
    <section className='note-wrapper'>
        <div className='note-container'>
            <div className='note-row'>
                <div className='note-coloumn'>
                    <form>
                        <div className={`form-group ${showItems}`}>
                            <input type="text" name="title" placeholder='Title*' required className='form-control' onChange={handleForm} value={task.title} />
                        </div>
                        <div className='form-group'>
                            <textarea rows={changecolumn} name="note" cols="100" placeholder='Take a notes...' required  className='form-control task-textarea' onChange={handleForm} value={task.note} ></textarea>
                        </div>
                        <div  className={`form-group text-right ${showItems}`}>
                            <button type='submit' className='primary-btn'>Close</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
    <CreateNote/>
    </>
  )
}

export default Note