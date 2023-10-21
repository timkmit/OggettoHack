import '../UserPage/style.css'

import React, { useState } from 'react';

import { useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import * as colors from '../../img/colors.jsx'

import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back-big.jpg";



function UserPage() {

    const { id } = useParams();

    const [activeEvents, setActiveEvents] = useState(true);

    const meetings = useSelector(store => store.meet.events);

    const filteredMeetings = meetings.filter((meeting)=>+id===meeting.id);

    console.log(meetings);

    return (  
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
        <div style={mainDivOfPage}>
        <div>
    {console.log(id)}
    {filteredMeetings.map((meeting) => (
        <div key={meeting.id}>
            {/* Здесь отображайте информацию о событии */}
            <p>{meeting.name}</p>
            <p>{meeting.date}</p>
            {/* Другие поля события */}
        </div>
    ))}
</div>

        </div>
    </div>
        </>
    );
}

const mainDivOfPage = {
    margin: '0 auto',
    height: '500px',
    width: '1000px',
    backgroundColor: 'rgba(191, 191, 191, 0.6',
}


const bodyStyle = {
    paddingTop: '2rem',
    backgroundImage: `url(${imgLogoDesktopBack})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    minHeight: '1400px',
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

export default UserPage;