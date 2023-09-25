import { useParams } from 'react-router-dom'

function Sobre(){
    const { id } = useParams()

    return (
        <div>
            Página Sobre {id}
        </div>
    )
}

export default Sobre;