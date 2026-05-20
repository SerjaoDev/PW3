import { useState } from "react"
import { updateItem, saveItems, loadItems, addItem } from "../lib/db"

export default function Data() {
    const [listaDeDados, setListaDeDados] = useState(loadItems())
    const [texto, setTexto] = useState("")
    const [editando, setEditando] = useState(false);
    const [idEditado, setIdEditado] = useState(0);

    function atualizarValor(){
        if(!editando){
            return;
        }
        const atualizacoes = {text: texto};

        setListaDeDados(
            updateItem(
                idEditado, 
                atualizacoes
            )
        );
    }

    function addItemFront(evento) {
        evento.preventDefault()
        addItem(texto)
        setListaDeDados(loadItems())
        setTexto("")
    }

    function ativarEdicao(id, valorOriginal){
        setEditando(true);
        setIdEditado(id);
        setTexto(valorOriginal);
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
                value={editando ? "Atualizar" : "Adicionar"}
                onClick={() => {
                    if(editando){
                        console.log("Editando");
                        atualizarValor();
                    }else{
                        console.log("Adicionando");
                        addItemFront();
                    }
                }}
            />

            <p>Aqui estão os dados</p>
            <table>
                <thead>
                    <tr>
                        <th>indice</th>
                        <th>valor</th>
                        <th>Operações</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        listaDeDados.length === 0 ? (
                            <tr>
                                <td colSpan="3">Nenhum dado encontrado</td>
                            </tr>
                        ) : (
                            listaDeDados.map(
                                (dado, indice) => (
                                    <tr key={dado.id}>
                                        <td>{dado.id}</td>
                                        <td>{dado.text}</td>
                                        <td>
                                        <button
                                        onClick={
                                            () => {
                                                ativarEdicao(
                                                    dado.id,
                                                    dado.text
                                                )
                                            }
                                        }
                                        >✏️</button>
                                        </td>
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