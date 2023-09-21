import React from 'react'
import './JussiSession.css'
import imageJussi from '../../assets/imgs/imageJussi.png'

const JussiSession: React.FC = () => {

    return (
        <div className="JussiSessions">
            <div className="JussiSessionsWrapper">
                <div className="JussiSessionsInfo">
                    <div className="JussiSessionsInfoWrapper">
                        <strong className="JussiSessionsTitle">Olá, somos a Jüssi</strong>
                        <p className="JussiSessionsContent">
                        A Jüssi é uma agência integrante do grupo global WPP que vem há 10 anos consolidando o pensamento voltado para produtos e resolução de problemas. Nosso área dedicada exclusivamente para Produtos Digitais é organizada em 6 especialidades: Product Managamenet, User Experience Design, SEO, Tecnologia, Agile e User Behavior Analytics.
                        </p>
                        <a href="#" className="JussiSessionsLink">Conheça a Jüssi</a>
                    </div>
                </div>
                <div className="JussiSessionsImg">
                    <img src={imageJussi} alt="Imagem da Jussi" />
                </div>
            </div>
        </div>
    )
}

export default JussiSession
