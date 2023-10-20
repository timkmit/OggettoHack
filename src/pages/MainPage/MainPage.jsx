import '../MainPage/style.css'
import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import * as colors from '../../img/colors.jsx'
import {Button} from '../../components/Button';

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
        </>
     );
}

const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.WHITE,
    color: '#fff',
    marginLeft: '10%',
    marginRight: '10%',
  };
  
  const logoStyle = {
    flex: 1, 
    
  };
  
  

export default MainPage;