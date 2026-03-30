import { useState } from "react"

export default function Data(){

    const [listaDeDados, setListaDeDados] = useState([])
    const [texto, setTexto] = useState("")

    function addItem(e){
        e.preventDefault()
        const novaListaDeDados = [...ListaDeDados, e.target.value]
        setListaDeDados(novaListaDeDados)
        setTexto("")
    }

    return (
        <div>
            <h1>Dados</h1>
            <input text="text" value={texto} onChange={(e) => setTexto(e.target.value)} />
            <input type="button" value="Adicionar" onClick={} />
            <p>Aqui estão os dados</p>
            <ul>
                {
                    //Mapeia cada item da lista de dados para um elemento <li> que será exibido na página
                    listaDeDados.map((item, index) => (<li key={index}>{item}</li>))
                }
            </ul>
        </div>
    )
}