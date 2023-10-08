import style from './index.module.css'
import AdmHeader from '../../components/admin_header';
import Input from '../../components/input';
import { FiLink2 } from 'react-icons/fi'
import { useState } from 'react';

function Admin_Social() {
    const [inputLinkedin, setInputLinkedin] = useState("")
    const [inputEmail, setInputEmail] = useState("")

    return ( 
        <main className={style.main}>
            <AdmHeader />
            <div className={style.main_content}>
                <h1 className={style.title}>Minhas Redes Sociais</h1>
                <form action="" className={style.form}>
                    <label>Link Linkedin</label>
                    <Input
                        value={inputLinkedin}
                        onChange={e => setInputLinkedin(e.target.value)}
                        placeholder='Digite a url...'
                    />
                    <label>Link Email</label>
                    <Input
                        value={inputEmail}
                        onChange={e => setInputEmail(e.target.value)}
                        placeholder='Digite a url...'
                    />
                    <button className={style.submit_button} type="submit">Salvando <FiLink2 size={20}/></button>
                </form>
            </div>
        </main>
     );
}

export default Admin_Social;