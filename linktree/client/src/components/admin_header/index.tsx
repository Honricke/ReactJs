import { Link } from 'react-router-dom'
import style from './index.module.css' 
import { BiLogOut } from 'react-icons/bi'

function AdmHeader() {
    function logout(){
        
    }

    return (  
        <nav className={style.navbar}>
            <Link to='/'>
                Home
            </Link>
            <Link to='/admin'>
                Links
            </Link>
            <Link to='/admin/social'>
                Redes Sociais
            </Link>
            <BiLogOut onClick={logout} fill="red" size={25} className={style.icon}/>
        </nav>
    );
}

export default AdmHeader;