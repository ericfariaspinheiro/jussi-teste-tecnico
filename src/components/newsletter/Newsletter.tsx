import React, { useState } from 'react'
import './Newsletter.css'

const Newsletter: React.FC = () => {
    const [email, setEmail] = useState<string>('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log(`Email submitted: ${email}`)
    }

    return (
        <div className="newsletter">
            <div className="newsletterWrapper">
                <strong className="newsletterTitle">receba novidades da nossa área de produtos digitais.</strong>

                <form onSubmit={handleSubmit}>
                    <input
                        type="email"
                        id="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit">CADASTRAR</button>
                </form>
            </div>
        </div>
    )
}

export default Newsletter
