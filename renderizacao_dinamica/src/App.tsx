import { useEffect, useState } from 'react'
import './App.css'

interface Edit{
  state: boolean
  value: string
}

function App() {
  const [list, setList] = useState<string[]>([])
  const [input,setInput] = useState("")
  const [edit,setEdit] = useState<Edit>({state: false, value: ""}) 

  function adicionar(){
    if(input != "value"){
      if(!edit.state){
        setList([...list,input])
      }else{
        setList(list.map( item => item == edit.value ? input: item))
        setEdit({
          state: false,
          value: ""
        })
      }
      setInput("")
    }
  }

  function remover(value: string){
    const newArray = list.filter( item => item !== value)
    setList(newArray)
  }

  function editar(value: string){
    setEdit({
      state: true,
      value: value
    })
  }

  return (
    <>
      <input 
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={adicionar}>{edit.state ? "Editar": "Adicionar"}</button>
      
      {list.map( (item) => (
        <div key={item}>
          <p>{item}</p>
          <button onClick={() => editar(item)}>Editar</button>
          <button onClick={() => remover(item)}>Excluir</button>
        </div>
      ))}
    </>
  )
}

export default App
