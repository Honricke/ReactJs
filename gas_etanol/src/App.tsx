import { useState, FormEvent } from 'react';
import './App.css'

interface ResultObj{
  title: string
  apreco: number
  gpreco: number
}

const App = () => {
  const [alcool, setAlcool] = useState(1)
  const [gasolina, setGasolina] = useState(1)
  const [result, setResult] = useState<ResultObj>()

  function calcular(event: FormEvent){
    event.preventDefault()

    let calculo = (alcool/gasolina)

    calculo <= 0.7 ? setResult({title: "Álcool",
    apreco: alcool,
    gpreco: gasolina}):
    setResult({title: "Gasolina",
    apreco: alcool,
    gpreco: gasolina}); 
  }

  return(
    <main className='container'>
      <img className='imgLogo' src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-red-gasoline-pump-icon-circle-png-image_2059801.jpg" alt="tanque de gasolina" />
      <h1 className='title'>Qual melhor opção?</h1>
      <form className='form' onSubmit={calcular}>
        <label className='label'>Álcool (preço por litro):</label>
        <input 
          className='inputText'
          type='number'
          min={1}
          step={0.01}
          value={alcool}
          onChange={(e) => setAlcool(Number(e.target.value))}
          required
          />

        <label className='label'>Gasolina (preço por litro):</label>
        <input 
          className='inputText'
          type='number'
          min={1}
          step={0.01}
          value={gasolina}
          onChange={(e) => setGasolina(Number(e.target.value))}
          required
          />

        <input type='submit' className='inputSubmit'></input>
      </form>

      {result && Object.keys(result).length > 0 && (
        <section className="result">
          <h2 className='result-title'>Compensa Usar {result?.title}</h2>
          <span>Álcool: R$ {result?.apreco}</span>
          <span>Gasolina: R$ {result?.gpreco}</span>
        </section>
      )}
    </main>
  )
}

export default App;