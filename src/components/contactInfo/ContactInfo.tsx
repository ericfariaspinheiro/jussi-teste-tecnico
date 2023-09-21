import React from 'react'
import './ContactInfo.css'

const Newsletter: React.FC = () => {

    return (
        <div className="contactInfo">
            <div className="contactInfoWrapper">
                <strong className="contactInfoTitle">Essa loja foi construída usando uma das nossas soluções da plataforma VTEX. tenha a sua.</strong>
                <p className="contactInfoSubTitle">Entre em contato</p>
                <p className="contactInfoMail">comercial@jussi.com.br</p>
            </div>
        </div>
    )
}

export default Newsletter
