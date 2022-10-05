import React from 'react'
import {Link} from 'react-router-dom'
function Footer() {
    return(
        <div>
            <footer className="footer">
                <div className="nameFooter">
                    <p>© 2022 G-genius</p>
                </div>
                <div className="footerMenu">
                    <div className="footerButtons">
                        <Link to="/about" className="footerBtn"> Обо мне </Link>
                        <Link to="/portfolio" className="footerBtn"> Портфолио </Link>
                        <Link to="/Tutorial" className="footerBtn"> Тутуриалы </Link>
                        <Link to="/contacts" className="footerBtn"> Контакты </Link>
                    </div>
                </div>
            </footer>

        </div>

    )
}
export default Footer