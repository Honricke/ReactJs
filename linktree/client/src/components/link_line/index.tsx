import style from './index.module.css'
import {Link} from 'react-router-dom'

interface LinkProps{
    link?: string,
    text: string,
    cor: string,
    bg_cor: string
}

function LinkLine(props: LinkProps) {
    const link = props.link == undefined ? '' : props.link;

    return ( 
        <Link className={style.link} to={link}>
            <div style={{color: props.cor, backgroundColor: props.bg_cor}}>
                {props.text}
            </div>
        </Link>
     );
}

export default LinkLine;