import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = () => {
    const userFirebase = useSelector(state => state.user);

    const [currentUser, setCurrentUser] = useState(userFirebase);

    useEffect(() => {
        console.log('userSelector in header => ', userFirebase);
        setCurrentUser(userFirebase);
    }, [userFirebase]);
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-transparent">
                <Link className="navbar-brand px-4" to='/'>IWallet</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto justify-content-end">
                        <li className="nav-item">
                            <Link className='nav-link' id="navCOBRARPAGAR" to='/CobrarPagar'>Cobrar/Pagar</Link>
                        </li>
                        <li className="nav-item">
                            <Link className='nav-link' id="navCOMPRARRECARGA" to='/CompraRecarga'>Compra/Recarga</Link>
                        </li>
                    </ul>
                    <div className='px-5'>
                        {currentUser &&
                            <ul className='navbar-nav mr-auto'>
                                <li className='nav-item'>
                                    <Link className='nav-link' id='navLOGIN' to='/Login'>Log In</Link>

                                </li>
                                <li className='nav-item'>
                                    <Link className='nav-link' id='navSIGNUP' to='/Signup'>Signup</Link>
                                </li>
                            </ul>
                        }
                        {!currentUser &&
                            <div className='navbar-nav mr-auto'>
                                <span>{currentUser.email}</span>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header;