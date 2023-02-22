import "./Navbar.css"
import logo from "../../assets/images/white.svg"

function Header(){
    return(
        <header className="header">
            <nav className="nav__container">
                <div className="nav__left-container">
                    <img src={logo} alt="logo"/>
                </div>
                <div className="nav__right-container">
                    <span className="sign__in-link">Sign In</span>
                    <button className="primary__btn">Dukaan for PC</button>
                </div>
            </nav>
        </header>
    )
}

export {Header}