import style from './index.module.css'
import Input from '../../components/input'
import { useState } from 'react'

function Login() {    
    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    function logar(e: FormDataEvent){
        e.preventDefault()
    }

    return ( 
        <main className={style.main}>
            <h1 className={style.title}>
                Dev<span>Link</span>
            </h1>
            <form action="logar">
                <Input 
                    placeholder='Digite seu login'
                    value={login}
                    onChange={e => setLogin(e.target.value)}
                />
                <Input 
                    type='password'
                    placeholder='Digite seu senha'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                />
                <button className={style.submit_button} type='submit'>Entrar</button>
            </form>
        </main>
     );
}

export default Login;