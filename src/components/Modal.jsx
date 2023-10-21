import { useState,useEffect } from 'react';
import '../../src/components/modal.css'

import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { changeMeet } from '../store/meetSlice';

import * as colors from '../img/colors.jsx';

function Modal({ isOpen, onClose, id }) {
  const dispatch = useDispatch();
  const allEvents = useSelector(store=>store.meet.events);
  const event = allEvents.find((event)=>event.id==id);
  const [changble, setChangble] = useState(false);
  const [eventName,setEventName]=useState('');
  const [eventTopic,setEventTopic] = useState('');
  const [eventAuthor,setEventAuthor] = useState('');
  const [eventDate,setEventDate] = useState('');
  const [eventMembers, setEventMembers] = useState([]);
  useEffect(()=>{
    if(id){
      setEventName(event.name);
      setEventTopic(event.topic);
      setEventAuthor(event.author);
      setEventDate(event.date);
      setEventMembers(event.feedback);
      setChangble(true);
      console.log(eventMembers);
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
            <input
                type="text"
                onChange={(e) => setEventName(e.target.value)}
                value={eventName}
                style={inputEdit}/>
            <button onClick={onClose} className="close-button">
                Закрыть
            </button>
        </div>
        <div className="modal-content">
            {'Тема: '}<input
                type="text"
                onChange={(e) => setEventTopic(e.target.value)}
                value={eventTopic}
                style={inputEdit}/>
            <a
                style={{
                    paddingTop: '20px'
                }}>{'Автор: '}</a><input
                type="text"
                onChange={(e) => setEventAuthor(e.target.value)}
                value={eventAuthor}
                style={inputEdit}/>
            <a
                style={{
                    paddingTop: '20px'
                }}>{'Дата: '}</a><input
                type="text"
                onChange={(e) => setEventDate(e.target.value)}
                value={eventDate}
                style={inputEdit}/>
            <a
                style={{
                    paddingTop: '20px',
                    paddingBottom: '20px'
                }}>{'Материалы: '}</a>
            <a
                style={{
                    fontSize: '24px'
                }}>{event.materials}</a>
            <div className='modal-members'>
                <div
                    style={{
                        paddingTop: '20px',
                        paddingBottom: '20px'
                    }}>{'Участники: '}</div><p/> {
                    eventMembers.map(
                        (member) => <div className='modal-member' key={member.id}>
                            <p style={inputEdit}>{' -'}{member.text}</p>
                            <button style={inputPeopleEdit}>Удалить</button>
                        </div>
                    )
                }
                <button onClick={changeOrAdd} style={buttonEdit}>Сохранить изменения</button>
            </div>
        </div>
    </div>
</div>
  );
}

const inputPeopleEdit = {
  borderRadius: '2rem',
  backgroundColor: colors.RED,
  border: 'none',
  height: '1.4rem',
  marginTop: '0.3rem',
  color: colors.WHITE,
  fontSize: '10px',
  cursor: 'poiner'
};

const buttonEdit = {
  borderRadius: '2rem',
  backgroundColor: colors.YELLOW,
  border: 'none',
  height: '2.3rem',
  fontWeight: 'bold',
  marginTop: '2rem',
  cursor: 'poiner'
};

const inputEdit = {
  textDecoration: 'none',
  border: 'none',
  fontSize: '24px'
};

export default Modal;
