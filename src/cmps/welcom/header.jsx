import logo from '../assets/img/logo.svg'
import iconHamburger from '../assets/img/icon-hamburger.svg'

export function Header() {
    return (
        <header className="header">
            <div className="nav-bar">
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <nav className="page-link">
                    <div>
                        home
                    </div>
                    <div >
                        about
                    </div>
                </nav>
            </div>
            <div className="contact-us-btn">
                contact-us
            </div>
            <div className="burger-logo">
                        <img src={iconHamburger} alt="icon-hamburger" />
                    </div>
        </header>
    )
}