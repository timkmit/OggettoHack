import '../MainPage/style.css'
import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back.png";
import * as colors from '../../img/colors.jsx'
import {Button} from '../../components/Button';
//TODO: сделать митинги в теле боди, добавить футер с инфой как у них
function MainPage() {
    return ( 
        <>
        <header style={headerStyle}>
      <div style={logoStyle}>
      <picture>
            <source media="(max-width: 768px)" srcSet={imgLogoMobile} />
            <source media="(min-width: 769px)" srcSet={imgLogoDesktop} />
            <img
              src={imgLogoDesktop}
              alt="Лого"
              style={{
                height: 'auto',
                minWidth: '4rem',
                maxWidth: '12rem', 
              }}
            />
          </picture>
      </div>
      <div >
    <Button text="Регистрация"/>
      </div>
    </header>

    <body style={bodyStyle}>
        <h1 style={{paddingLeft: '8%', paddingRight: '25%', paddingTop: '4%', fontSize:'66px'}}>Твоя платформа для проведения well-being мероприятий</h1>
        
    </body>
        </>
     );
}

const bodyStyle = {
    paddingTop: '2rem',
    backgroundImage: `url(${imgLogoDesktopBack})`,
    backgroundSize: 'cover',
    height: '1000px'
}

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