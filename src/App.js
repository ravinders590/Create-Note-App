import Note from './app/Note';
import {useState,useEffect} from 'react'


function App() {

  const [task, settask] = useState({
    title:'',
    note:''
  })

  const [notes,setNotes] = useState([]);
  const [changecolumn,setChangecolumn] = useState(1);
  const [showItems,setshowitem] = useState('d-none');

  const [allTask, setTaskData] = useState((localStorage.hasOwnProperty('task') === true) ? JSON.parse(localStorage.getItem('task')) : []);

  const mouseENter = (e)=>{
    var specific = document.querySelector('.note-wrapper');
    var isCLick = specific.contains(e.target);
    if(isCLick){
      setChangecolumn(4);
      setshowitem('d-block');
      
    }else{
      setChangecolumn(1);
      setshowitem('d-none');
      
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
  }

  useEffect(() => {
    localStorage.setItem('task',JSON.stringify(allTask));
}, [allTask])

  return (
    <>
    <div className='wrapper' onClick={mouseENter} >
    <Note changecolumn={changecolumn} showItems={showItems} handleForm={handleForm}  task={task}/>
    </div>
    </>
  );
}

export default App;
