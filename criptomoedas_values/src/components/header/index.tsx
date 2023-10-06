import './index.css'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.svg'

function Header() {
    const navigate = useNavigate()
    return (  
        <header className="header">
            <img onClick={() => navigate('/')} className="header-img" src={logo} alt="" />
        </header>
    );
}

export default Header;