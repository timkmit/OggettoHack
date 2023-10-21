import { useState,useEffect } from 'react';
import '../../src/components/modal.css'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeMeet } from '../store/meetSlice';
import {changeEvent} from '../store/meetSlice';
function Modal({ isOpen, onClose, id }) {
  const dispatch = useDispatch();
  const allEvents = useSelector(store=>store.meet.events);
  console.log(allEvents);
  const event = allEvents.find((event)=>event.id==id);
  const [changble, setChangble] = useState(false);
  const [eventName,setEventName]=useState('');
  const [eventTopic,setEventTopic] = useState('');
  const [eventAuthor,setEventAuthor] = useState('');
  const [eventStatus, setEventStatus] = useState('');
  // const [eventMembers, setEventMembers] = useState([]);
  useEffect(()=>{
    if(id){
      setEventName(event.title);
      setEventTopic(event.description);
      // setEventStatus(event.active);
      if(event.speaker){
        setEventAuthor(event?.speaker?.profile?.first_name + ' ' + event?.speaker?.profile?.last_name);
      }
      setChangble(true);
    }
  },[id])
  const handleSelectChange=(e)=>{
    setEventStatus(!!e.target.value)
  }
  if (!isOpen) {
    return null;
  }
  const changeOrAdd = ()=>{
    const newEvent = structuredClone(event)
    newEvent.title=eventName;
    newEvent.description = eventTopic;
    newEvent.active=eventStatus;
    if(changble){
      console.log(newEvent);
      dispatch(changeEvent(newEvent));
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
          <select defaultValue='choice' onChange={handleSelectChange}>
            <option disabled  value="choice">Выбор статуса</option>
            <option value="true">Активно</option>
            <option value="">Завершено</option>
          </select>
          <div className='modal-members'>
            <h3>Участники</h3>
            {event.guests.map((guest)=> <div key= {guest.id}><p>{guest.profile.first_name + " " + guest.profile.last_name}</p></div>)}
            <button onClick={changeOrAdd}>Добавить/Изменить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
