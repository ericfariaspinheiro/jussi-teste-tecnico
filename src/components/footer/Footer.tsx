import React from 'react'
import './Footer.css'

import wppCompanyLogo from '../../assets/svgs/wppCompanyLogo.svg'
import facebookIcon from '../../assets/svgs/facebookIcon.svg'
import instagramIcon from '../../assets/svgs/instagramIcon.svg'
import linkedinIcon from '../../assets/svgs/linkedinIcon.svg'

const Footer: React.FC = () => {

    return (
        <div className="footer">            
            <div className="footerWrapper">
                <div className="footerContent">
                    <img src={wppCompanyLogo} alt="WPP Company Logo" />

                    <div className="footerSocialLinks">
                        <a href="#">
                            <img src={facebookIcon} alt="Ícone do Facebook" />
                        </a>
                        <a href="#">
                            <img src={instagramIcon} alt="Ícone do Instagram" />
                        </a>
                        <a href="#">
                            <img src={linkedinIcon} alt="Íconde do LinkedIn" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
