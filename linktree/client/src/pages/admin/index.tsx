import style from './index.module.css'
import AdmHeader from '../../components/admin_header';
import Input from '../../components/input';
import { useState } from 'react'
import { FiLink2 } from 'react-icons/fi'
import { BsFillTrashFill } from 'react-icons/bs'
import LinkLine from '../../components/link_line';

interface LinkType{
    text: string,
    cor: string,
    bg_cor: string,
    link?: string
}

function Admin() {
    const [bgLinkColor, setBgLinkColor] = useState("#000")
    const [LinkColor, setLinkColor] = useState("#ffffff")
    const [nome, setNome] = useState("")
    const [url, setUrl] = useState("")

    const [links, setLinks] = useState<LinkType[]>([
        {
            text: "Meu canal no Youtube",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        },
        {
            text: "Meu canal no Youtube 2",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        },
        {
            text: "Meu canal no Youtube 3",
            link: "https://react-icons.github.io/react-icons/search?q=link",
            cor: "#000",
            bg_cor: "#fff"   
        }
    ])

    function remover(item: LinkType){
        const new_link = links.filter(link => link.text != item.text)
        setLinks(new_link)
    }

    return ( 
        <main className={style.main}>
            <AdmHeader />
            <div className={style.main_content}>
                <form className={style.form} action="">
                    <label>Nome do link</label>
                    <Input 
                        placeholder="Nome do seu link"
                        value={nome}
                        onChange={e => setNome(e.target.value)}
                    />
                    <label>Url do link</label>
                    <Input 
                        placeholder="Digite a url..."
                        value={url}
                        onChange={e => setUrl(e.target.value)}
                    />
                    <div className={style.color_select}>
                        <label>Fundo do link&nbsp;&nbsp;
                            <input 
                                type="color"
                                value={bgLinkColor}
                                onChange={e => setBgLinkColor(e.target.value)}
                                />
                        </label>
                        <label>Cor do link&nbsp;&nbsp;
                            <input 
                                type="color"
                                value={LinkColor}
                                onChange={e => setLinkColor(e.target.value)}
                            />
                        </label>
                    </div>
                    {nome && (
                        <div className={style.preview_box}>
                            <label>Veja como está ficando</label>
                            <LinkLine 
                                text={nome}
                                bg_cor={bgLinkColor}
                                cor={LinkColor}
                            />              
                        </div>
                    )}
                    <button className={style.submit_button} type='submit'>Cadastrar <FiLink2 size={20}/></button>
                </form>
                <h2 className={style.title}>Meus Links</h2>
                <section className={style.link_container}>
                    {links && links.map((link,i) => (
                        <div key={i} className={style.box_line}>
                            <LinkLine 
                                text={link.text}
                                bg_cor={link.bg_cor}
                                cor={link.cor}
                            />
                            <span className={style.icon} onClick={() => remover(link)}>
                                <BsFillTrashFill size={15}/>
                            </span>
                        </div>
                    ))}
                </section>
            </div>
        </main>
     );
}

export default Admin;