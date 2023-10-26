import logo from '../../assets/logo-horizontal.svg'
import './LogoNav.css';

function Logo() {

    return (
        <div className='logo-container'>
            <img src={logo} alt='logo de canopilogger'></img>
        </div>
    )
}

export default Logo
