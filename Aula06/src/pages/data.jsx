import { useState } from "react"

export default function Data() {

    const [listaDeDados, setListaDeDados] = useState([])
    const [texto, setTexto] = useState("")

    function addItem(evento) {
        evento.preventDefault()

        const novaListaDeDados = [
            ...listaDeDados,
            texto
        ]
        setListaDeDados(novaListaDeDados)
        setTexto("") 
    }

    return (
        <div>
            <h1>Dados</h1>
            <input
                type="text"
                value={texto}
                onChange={
                    (evento) => setTexto(evento.target.value)
                }
            />
            <input
                type="button"
                value="Adicionar"
                onClick={addItem}
            />

            <p>Aqui estão os dados</p>
            <table>
                <thead>
                    <tr>
                        <th>Índice</th>
                        <th>Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    listaDeDados.map((item, index) =>
                    (
                        <tr key={index}>
                            <td>{index}</td>
                            <td>{item}</td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
        </div>
    )
}