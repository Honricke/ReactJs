import style from './index.module.css'
import { BsLinkedin } from 'react-icons/bs'
import { BiLogoGmail } from 'react-icons/bi'
import LinkLine from '../../components/link_line'
import { Link } from 'react-router-dom'
import { useState } from 'react'


function Home() {    
    const [links, setLinks] = useState([
        {
            text: "Meu canal no Youtube",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        },
        {
            text: "Meu canal no Youtube",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        },
        {
            text: "Meu canal no Youtube",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        }
    ])

    const social_links = {
        linkedin: "https://www.linkedin.com/in/henrique-bandeiraa/",
        email: "mailto:henriquebandeira307@gmail.com"
    }
    return ( 
        <main className={style.main}>
            <h1 className={style.title}>Henrique Bandeira</h1>
            <h3 className={style.subtitle}>Veja meus links 👇</h3>
            <section className={style.link_container}>
                {links && links.map(link => (
                        <LinkLine
                            text={link.text} 
                            link={link.link} 
                            cor={link.cor} 
                            bg_cor={link.bg_cor} 
                        />
                ))}
            </section>
            <section className={style.social}>
                <span>
                    <Link to={social_links.linkedin} target='_blank'>
                        <BsLinkedin size={30}/>
                    </Link>
                </span>
                <span>
                    <Link to={social_links.email} target='_blank'>
                        <BiLogoGmail size={30}/>
                    </Link>
                </span>
            </section>
        </main>
    );
}

export default Home;