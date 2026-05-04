import { useState } from "react"
import { saveItems, loadItems, addItem } from "../lib/db"

export default function Data() {
    const [listaDeDados, setListaDeDados] = useState(loadItems())
    const [texto, setTexto] = useState("")

    function addItemFront(e) {
        e.preventDefault()

        addItem(texto)
        setListaDeDados(loadItems())
        setTexto("")
    }

    return (
        <div>
            <h1>Dados</h1>
            <input
                type="text"
                value={texto}
                onChange={
                    (e) => setTexto(e.target.value)
                }
            />
            <input
                type="button"
                value="Adicionar"
                onClick={addItemFront}
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
                        listaDeDados.length === 0 ? (
                            <tr>
                                <td colSpan="2">Nenhum dado encontrado</td>
                            </tr>
                        ) : (
                            listaDeDados.map(
                                (dado, indice) => (
                                    <tr key={indice}>
                                        <td>{indice}</td>
                                        <td>{dado}</td>
                                    </tr>
                                )
                            )
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}