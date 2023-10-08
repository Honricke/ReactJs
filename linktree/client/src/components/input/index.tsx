import style from './index.module.css'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

function Input(props: InputProps) {    
    return (  
        <input
            className={style.inputs} 
            {...props}
        />
    );
}

export default Input;