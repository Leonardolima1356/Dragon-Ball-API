import { Menu } from "./components/menu"
import imagem from "./assets/images/imagem.png"
import style from "./App.module.css"
import { useState } from 'react'


function App() {
  const [botaoVideo, setBotaoVideo] = useState(false) 
  const [botao, setBotao] = useState(false)

  return (
    <>
   <Menu option01= 'Início' option02='Personagens da API'></Menu>
   <section className={style.s1}>
    <div className={style.inicio}>
      <img src={imagem} alt="imagem" className={style.fundo}/>
      
      <div className={style.wrapInfo}>
      <p className={style.textoDB}>
      Dragon Ball conta a história de Son Goku, um Saiyajin apaixonado por lutas e está
      constantemente lutando para superar seus próprios limites. Ao lado do Time Dragão,
      Goku está sempre lutando contra seus adversários e fazendo novos aliados por todos os lugares que passam.
      O mangá foi criado por Akira Toriyama e estreou na revista Weekly Shonen Jump em novembro de 1984. 2 anos mais tarde,
      recebeu a adaptação animada pela Toei Animation.
      </p>
        <button className={style.btP} onClick={ () =>{setBotao(true)}}>Quero ver o video</button>
      </div>
    </div>

    <div className={style.botaoVideo}>
    {botao && <button className={style.btVideo} onClick={ () => {setBotaoVideo(true); }}>Quero ver!!!</button>}
    {botaoVideo && <iframe width="400" height="350" src="https://www.youtube.com/embed/U3oMwgVpXXU?si=wq8LHt_Y_pCx_pVd" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
    picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>}
    </div>
    
    </section>
    </>
  )
}

export default App
