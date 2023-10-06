import { useEffect, useState } from 'react';
import { useParams  } from 'react-router-dom'
import style from './index.module.css'

interface CoinProps{
    delta_1h: string,
    delta_7d: string,
    delta_24h: string,
    delta_30d: string,
    high_24h: string,
    last_updated_timestamp: number,
    low_24h: string,
    market_cap: string,
    markets: {
        symbol: string,
        volume_24h: string,
        price: string,
        exchanges: {
            symbol: string,
            volume_24h: string,
            price: string,
        }[]
    }[],
    name: string,
    price: string,
    rank: number,
    remaining: number,
    show_symbol: string,
    symbol: string,
    total_volume_24h: string,
    formatedMarket: string,
    formatedPrice: string,
    formatedLow: string,
    formatedHigh: string,
    formatedDelta: string
}

function Moeda() {
    const { id } = useParams() 
    //@ts-ignore
    const [info, setInfo] = useState<CoinProps>({})

    useEffect(() => {
        fetch('https://sujeitoprogramador.com/api-cripto/coin/?key=b63862b3f98fc0b2&pref=BRL&symbol='+id)
        .then(response => response.json())
        .then((data: CoinProps) => {
            let price = Intl.NumberFormat('pt-BR',{
                style: 'currency',
                currency: 'BRL'
            })
            data.formatedMarket = price.format(Number(data.market_cap))
            data.formatedPrice = price.format(Number(data.price))
            data.formatedLow = price.format(Number(data.low_24h))
            data.formatedHigh = price.format(Number(data.high_24h))
            data.formatedDelta = data.delta_24h.replace(',',".")
            setInfo(data)        
        })
        .catch((err) => console.log(err))
    },[])

    return ( 
        <main>
            <h2>Bitcoin</h2>
            <span>BTC</span>

            {info.formatedPrice && (
                <section className={style.content}>
                    <p><strong>Preço: </strong>{info.formatedPrice}</p>
                    <p><strong>Maior Preço 24h: </strong>{info.formatedHigh}</p>
                    <p><strong>Menor Preço 24h: </strong>{info.formatedLow}</p>
                    <p><strong>Delta 24h: </strong><span className={Number(info.formatedDelta) >= 0 ? style.green : style.red}>{info.formatedDelta}</span></p>
                    <p><strong>Valor Mercado: </strong>{info.formatedMarket}</p>
                </section>
            )}
        </main>
    );
}

export default Moeda;