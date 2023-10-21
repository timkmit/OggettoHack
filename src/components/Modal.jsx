import { useState,useEffect } from 'react';
import '../../src/components/modal.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeMeet } from '../store/meetSlice';
function Modal({ isOpen, onClose, id }) {
  const dispatch = useDispatch();
  const allEvents = useSelector(store=>store.meet.events);
  console.log(allEvents);
  const event = allEvents.find((event)=>event.id==id);
  const [changble, setChangble] = useState(false);
  const [eventName,setEventName]=useState('');
  const [eventTopic,setEventTopic] = useState('');
  const [eventAuthor,setEventAuthor] = useState('');
  const [eventDate,setEventDate] = useState('');
  // const [eventMembers, setEventMembers] = useState([]);
  useEffect(()=>{
    if(id){
      setEventName(event.title);
      setEventTopic(event.description);
      setEventAuthor(event.speaker.profile_id);
      // setEventDate(event.date);
      // setEventMembers(event.feedback);
      setChangble(true);
      // console.log(eventMembers);
    }
  },[id])
  if (!isOpen) {
    return null;
  }
  const changeOrAdd = ()=>{
    const newMeet={
      id:id,
      name: eventName,
      topic: eventTopic,
      author: eventAuthor,
      materials: '',
      qa: [],
      date: eventDate,
      feedback: eventMembers,
      actual:true
    }
    if(changble){
      console.log(newMeet);
      dispatch(changeMeet(newMeet));
    }
  }
  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <input type="text" onChange={(e)=>setEventName(e.target.value)} value={eventName} />
          <button onClick={onClose} className="close-button">
            Закрыть
          </button>
        </div>
        <div className="modal-content">
          <input type="text" onChange={(e)=>setEventTopic(e.target.value)} value={eventTopic} />
          <input type="text" onChange={(e)=>setEventAuthor(e.target.value)} value={eventAuthor} />
          <input type="text" onChange={(e)=>setEventDate(e.target.value)} value={eventDate}  />
          <h3>Материалы</h3>
          <p>{event.materials}</p>
          <div className='modal-members'>
            <h3>Участники</h3>
            <button onClick={changeOrAdd}>Добавить/Изменить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
