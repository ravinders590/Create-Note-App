
import React,{useState,useEffect} from 'react'
import CreateNote from './app/CreateNote';
import './app/Note.css'


function App() {

  const [task, settask] = useState({
    title:'',
    note:''
  })
  const [notes, setNotes] = useState((localStorage.hasOwnProperty('task') === true) ? JSON.parse(localStorage.getItem('task')) : []);
  const [changecolumn,setChangecolumn] = useState(1);
  const [showItems,setshowitem] = useState('d-none');

  

  const mouseENter = (e)=>{
    var specific = document.querySelector('.note-wrapper');
    var isCLick = specific.contains(e.target);
    if(isCLick){
      setChangecolumn(4);
      setshowitem('d-block');
      
    }else{
      setChangecolumn(1);
      setshowitem('d-none');
      
      setNotes([...notes,task]);
      console.log(notes); 
      settask({
        title:'',
        note:''
      });
    }
  }
  const handleForm = (e)=>{
    const task_title = e.target.name;
    const note = e.target.value;
    settask({...task,[task_title]:note});
    // console.log(notes);
  }

  const DeleteItems = (index)=>{
      const updateUserData = notes.filter((elem)=>{
          return elem.index !== index
      });
      setNotes(updateUserData);
  }

  useEffect(() => {
      localStorage.setItem('task',JSON.stringify(notes));
  }, [notes])

  return (
    <>
    <div className='wrapper' onClick={mouseENter} >
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
      <div className='createNote-wrapper'>
        <div className='createNote-container'>
          {
            notes.map((currElem,index)=>{
              const {title,note} = currElem;
              return <CreateNote key={index} id={index} title={title} notes={note} DeleteItems={DeleteItems} />
            })
          }
          </div>
      </div>
      
    </div>
    </>
  );
}

export default App;
