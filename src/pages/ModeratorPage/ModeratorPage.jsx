import React, { useState } from 'react';

import '../ModeratorPage/style.css'

import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back.png";
import * as colors from '../../img/colors.jsx'


const MEETINGS =[

{id: 1, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 2, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 3, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 4, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 5, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 6, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 7, name: "Созвон с чиксами", actual: true, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 8, name: "Созвон с пиццой", actual: true, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 9, name: "Созвон с пиццой", actual: false, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 10, name: "Созвон с чиксами", actual: false, author: "Вика Матильдова", date: "21.10.2023", topic: "Животноводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },
{id: 11, name: "Созвон с пиццой", actual: false, author: "Витя Матильдов", date: "21.10.2023", topic: "Пиццаводство", materials: "url", 
qa: [{id: 1, text: "blablalbla"}, {id:2, text: "damn so cool"}], feedback: [ {id: 1, text:"kirill"}, {id:2, text:"danya"}] },

];


function ModeratorPage() {

    const [activeEvents, setActiveEvents] = useState(true);
    const [showAddButton, setShowAddButton] = useState(true);

    const toggleActiveEvents = () => {
        setActiveEvents(!activeEvents);
    };

    const filteredMeetings = MEETINGS.filter((meeting) => meeting.actual === activeEvents);

    return ( 
        <>
            <>
        <header style={headerStyle}>
      <div style={logoStyle}>
      <picture>
            <source media="(max-width: 768px)" srcSet={imgLogoMobile} />
            <source media="(min-width: 769px)" srcSet={imgLogoDesktop} />
            <a href="/">
            <img
              src={imgLogoDesktop}
              alt="Лого"
              style={{
                height: 'auto',
                minWidth: '4rem',
                maxWidth: '14rem', 
              }}
            />
            </a>
          </picture>
      </div>
      
    </header>

    <div style={bodyStyle}>
        
        <a style={{paddingLeft: '8%', paddingRight: '25%', paddingTop: '1%', fontSize:'36px', fontWeight: '600'}}>Редактирование событий</a>

        <div style={meetingsStyle}>
        <div>
          <a
            style={{ 
              textDecoration: activeEvents ? 'none' : 'none',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: activeEvents ? 'bold' : 'normal' }}
            onClick={toggleActiveEvents}
          >
            Активные
          </a>{' / '}
          <a
            style={{ 
              textDecoration: activeEvents ? 'none' : 'none',
              fontSize: '18px',
              cursor: 'pointer',
              fontWeight: activeEvents ? 'normal' : 'bold' }}
            onClick={toggleActiveEvents}
          >
            Завершенные
          </a>
        </div>

        <div style={{ ":hover": meetingDivHoverStyle }}>
          {filteredMeetings.map((meeting) => (
            <div key={meeting.id} style={{ ...meetingDivStyle }}>
              <a
                href={meeting.materials}
                style={{
                  textDecoration: 'none',
                  fontSize: '22px'
                }}
              >
                {meeting.name} {' '}
              </a>
              - 
              <a style={{ fontSize: '22px' }}>{meeting.topic}</a>
              <a style={{ fontSize: '22px' }}>{meeting.date}, {meeting.author}</a>
            </div>
          ))}
        </div>

        {activeEvents && showAddButton && (
        <div style={buttonAddStyle}>
          <a>+Добавить</a>{/*TODO: сделать модальное окно чтобы добавлять */}
        </div>
      )}
      </div>

        

    </div>
        </>
        </>
     );
}

const buttonAddStyle = {
    paddingTop: '15px',
    fontWeight: 'bold',
    cursor: 'pointer'
};

const meetingDivStyle = {
    backgroundColor: 'rgba(191, 191, 191, 0.2',
    cursor: 'pointer',
    transition: 'background-color 0.3s',
    marginTop: '5px',
    textDecoration: 'none',
    color: 'inherit',
    paddingTop: '10px',
    paddingDown: '10px',
    padding: '5px',
    borderRadius: '5px'
  };
  
  const meetingDivHoverStyle = {
    backgroundColor: 'red',
  };


  const meetingsStyle = {
    backgroundColor: 'rgba(999, 999, 999, 0.5',
    width: '1100px',
    height: '600px',
    margin: '0 auto',
    marginTop: '50px',
    borderRadius: '10px',
  };

const bodyStyle = {
    paddingTop: '2rem',
    backgroundImage: `url(${imgLogoDesktopBack})`,
    backgroundSize: 'cover',
    height: '1000px'
};

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    color: '#fff',
    marginLeft: '8%',
    marginRight: '8%',

  };
  
  const logoStyle = {
    flex: 1, 
    
  };

export default ModeratorPage;