import '../MainPage/style.css'
import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back.png";
import * as colors from '../../img/colors.jsx'
import {Button} from '../../components/Button';
import { Link } from 'react-router-dom';
//TODO: сделать митинги в теле боди, добавить футер с инфой как у них
function MainPage() {
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
      <div >
      <Link to="/registration">
        <Button text="Регистрация" />
      </Link>
    
      </div>
    </header>

    <div style={bodyStyle}>
        <h1 style={{paddingLeft: '8%', paddingRight: '25%', paddingTop: '4%', fontSize:'66px'}}>Твоя платформа для проведения well-being мероприятий</h1>
        

        <div style={meetingsStyle}>
            <div style={{marginLeft: '10px'}}> 
            <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
              <h5>-------------------------------------------</h5>
            </div>
              
              
        </div>
    </div>
        </>
     );
}

const meetingsStyle = {
    backgroundColor: 'rgba(211, 211, 211, 0.5',
    width: '1100px',
    height: '600px',
    margin: ' 0 auto',
    marginTop: '50px',
    borderRadius: '10px'
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
  
  

export default MainPage;