import "./../css/Header.css";
import logo from "./../Images/house-logo.jpg";

const Header = () =>
{
    return(
        <header id="main-header">
            <img id="logo" src={logo} alt="Logo" />
            <h1>Me when</h1>
        </header>
    )
}

export default Header;