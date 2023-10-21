import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import '../UserPage/style.css'

import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back-big.jpg";
import * as colors from '../../img/colors.jsx'
import axios from 'axios';



function UserPage() {
    let obj;
    const { id } = useParams();

    const fetchMeetupById = async () => {
        try {
          const response = await axios.get(`http://26.60.196.229:8080/meetups`);
          if (response.status === 200) {
            obj = response.data;
            console.log(`OJKFNAS:LJFHNAL:JSNFJLKPASHJNFOIPASHNJPFOJAHNSPIFJONASPIFJNASPIJFNPIAS${obj}`);
            return response.data; 
          }
        } catch (error) {
          console.error('Ошибка при запросе к серверу:', error);
        }
      };
      
    
      const meetupId = id; 
      fetchMeetupById(meetupId)
        .then((meetupData) => {
          console.log('Данные о мероприятии:', meetupData);
        })
        .catch((error) => {
          console.error('Ошибка при получении данных о мероприятии:', error);
        });
   

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
                {obj.data.data.meetups}
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