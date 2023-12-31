import imgLogoMobile from "../../img/oggetto-flat-logo.png";
import imgLogoDesktop from "../../img/oggetto-logo_tonal-hor-rus.png";
import imgLogoDesktopBack from "../../img/oggetto-flat-logo-back.png";
import * as colors from '../../img/colors.jsx'

import '../Registration/style.css'
import { ButtonReg } from "../../components/Button";



function Login() {
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
          <div style={formStyle}>
            <h2 style={{ textAlign: 'center', paddingTop: '10px', fontSize: '40px' }}>Вход</h2><br />
            <input style={inputStyle} placeholder="Email" /><br />
            <input style={inputStyle} placeholder="Пароль" /><br />
  
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <ButtonReg text="Войти" />
            </div>
            <a href="/registration" style={{display: 'flex', justifyContent: 'center', paddingTop: '10px'}}>Регистрация</a>
          </div>
        </div>
      </>
    );
  }
const inputStyle = {
    display: 'block', 
    margin: '0 auto',
    width: '26rem',
    height: '3.4rem',
    border: '1px solid lightgrey',
    borderRadius: '8px',
};

const formStyle = {
    margin: '0 auto',
    width: '800px',
    height: '350px',
    marginTop: '60px',
    backgroundColor: 'rgba(999, 999, 999, 0.5',
    borderRadius: '20px'
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

export default Login;