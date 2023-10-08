import { useState, useEffect, FormEvent } from "react";
import { BiSearch } from 'react-icons/bi'
import style from './index.module.css'
import { Link, useNavigate } from 'react-router-dom'

interface CoinProps{
    name: string,
    delta_24h: string,
    price: string,
    rank: number,
    show_symbol: string,
    symbol: string,
    volume_24h: string,
    market_cap: string,
    formatedMarket: string,
    formatedPrice: string,
    formatedDelta: string
}

interface DataProps{
    coins: CoinProps[]
}

function Home() {
    const [input,setInput] = useState("")
    const [coins, setCoins] = useState<CoinProps[]>()
    const navigate = useNavigate()

    useEffect(() => {
        fetch('https://sujeitoprogramador.com/api-cripto/?key=b63862b3f98fc0b2')
        .then(response => response.json())
        .then((data: DataProps) => {
            let coins_data = data.coins.slice(0,15) 

            let price = Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL'
            })

            const formatedResult = coins_data.map(item => {
                const formated = {
                    ...item,
                    formatedPrice: price.format(Number(item.price)),
                    formatedMarket: price.format(Number(item.market_cap)),
                    formatedDelta: item.delta_24h.replace(",",".")
                }
                return formated
            })

            setCoins(formatedResult)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    function submit_form (e: FormEvent){
        e.preventDefault()
        if (input != ''){
            navigate('/moeda/'+input.toUpperCase())
        }
    }

    function filter_search(item: CoinProps){
        if (item.name.toLowerCase().includes(input.toLowerCase()) || item.symbol.toLowerCase().includes(input.toLowerCase()) || input == ''){
            return (
                <tr>
                    <td data-label="Moeda">
                        <Link className={style.link} to={'/moeda/'+item.symbol}>
                            <strong>{item.name}</strong> | {item.symbol}
                        </Link>
                    </td>
                    <td data-label="Mercado">{item.formatedMarket}</td>
                    <td data-label="Preço">{item.formatedPrice}</td>
                    <td data-label="Volume" className={Number(item.formatedDelta) > 0 ? style.td_win : style.td_loss}>
                        {item.formatedDelta}
                    </td>
                </tr>
            )
        }else{
            return false
        }
    }

    return ( 
        <main>
            <form className={style.search} onSubmit={submit_form}>
                <input 
                    type="text"
                    value={input}
                    onChange={e => setInput(e.target.value)}
                    placeholder="Digite o nome da moeda: Bitcoin..."
                 />
                 <button><BiSearch size={30} color="#fff"/></button>
            </form>
            <table className={style.table}>
                <thead className={style.table_head}>
                    <tr>
                        <th>MOEDA</th>
                        <th>VALOR MERCADO</th>
                        <th>PREÇO</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                <tbody className={style.table_body}>
                    {coins && coins.map(item => filter_search(item))}
                </tbody>
            </table>
        </main>
    );
}

export default Home;