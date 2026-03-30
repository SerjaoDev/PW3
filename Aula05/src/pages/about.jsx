import imagem from '../assets/Gil.png'
import imagem2 from '../assets/Inemafoo.jpg'

export default function About(){
    return (
        <div>
            <h1>Sobre nós</h1>
            <p>Abaixo as imagens</p>
            <img src={imagem} alt="Gil do Vigor"/>
            <img src={imagem2} alt="Inemafoo"/>
        </div>
    )
}