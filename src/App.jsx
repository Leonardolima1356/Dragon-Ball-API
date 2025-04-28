import { Menu } from "./components/menu"
import imagem from "./assets/images/imagem.png"
import style from "./App.module.css"
import { useState } from 'react'

import logoFacebook from './assets/images/facebook.png'
import logoTwitter from './assets/images/twitter.png'
import logoSite from './assets/images/icon_ball.png'
import logoYoutube from './assets/images/youtube.png'


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

    <div className={style.videoContainer}>
    {botao && (
        <button className={style.btVideo} onClick={() => setBotaoVideo(true)} aria-label="Assistir vídeo">
            <span className={style.btText}>Quero ver!!!</span>
        </button>
    )}
    
    {botaoVideo && (
        <div className={style.videoWrapper}>
            <iframe width="400" height="350" 
                src="https://www.youtube.com/embed/U3oMwgVpXXU?si=wq8LHt_Y_pCx_pVd&autoplay=1" title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className={style.videoIframe}></iframe>
        </div>
    )}
</div>
    </section>
    <footer className={style.footer}>
        <div className={style.socialIcons}>
          <a href="https://www.facebook.com/ToeiAnimationOfficial/?locale=pt_BR" aria-label="Facebook">
            <img src={logoFacebook} alt="Facebook" className={style.socialLogo}/></a>
          <a href="https://x.com/db_official_en" aria-label="Twitter">
            <img src={logoTwitter} alt="Facebook" className={style.socialLogo}/></a>
          <a href="https://en.dragon-ball-official.com/" aria-label="Official Site">
            <img src={logoSite} alt="Facebook" className={style.socialLogo}/></a>
          <a href="https://www.youtube.com/@dragonball_official" aria-label="YouTube">
            <img src={logoYoutube} alt="Facebook" className={style.socialLogo}/></a>
        </div>
      </footer>
    </>
  )
}

export default App
