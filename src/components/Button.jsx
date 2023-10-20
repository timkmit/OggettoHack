import * as colors from '../img/colors.jsx'

export function Button(props) {
    return ( 
        <>
            <button style={buttonStyle}>{props.text}</button>
            
        </>
     );
}
//TODO: исправить ошибку в пропсах, но и так все воркает
const buttonStyle = {
    borderRadius: '2rem',
    backgroundColor: colors.YELLOW,
    border: 'none',
    height: '3.5rem',
    width: '11rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    paddingRight: '-1rem'
  };

export function SmallButton(props) {
    return ( 
        <>
            <button style={smallButtonStyle}>{props.text}</button>
        </>
     );
}

const smallButtonStyle = {
    borderRadius: '2rem',
    backgroundColor: colors.YELLOW,
    border: 'none',
    height: '3.5rem',
    width: '11rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 'bold',
    fontSize: '1.2rem',
    paddingRight: '-1rem'
  };