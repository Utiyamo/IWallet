import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-transparent">
                <Link className="navbar-brand px-4" to='/'>IWallet</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto justify-content-end">
                        {/* <li className="nav-item">
                            <Link className='nav-link' id='navHOME' to='/'>Home</Link>
                        </li> */}
                        <li className="nav-item">
                            <Link className='nav-link' id="navCOBRARPAGAR" to='/CobrarPagar'>Cobrar/Pagar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' id="navCOMPRARRECARGA" to='/CompraRecarga'>Compra/Recarga</Link>
                        </li>
                    </ul>
                </div>
                <div className='px-5'>
                    <ul className='navbar-nav mr-auto'>
                        <li className='nav-item'>
                            <Link className='nav-link' id='navLOGIN' to='/Login'>Log In</Link>

                        </li>
                        <li className='nav-item'>
                            <Link className='nav-link' id='navSIGNUP' to='/Signup'>Signup</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Header;