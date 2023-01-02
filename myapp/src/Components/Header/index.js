import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { NumericFormat  } from 'react-number-format';
import app from '../../firebase';

import { collection, getFirestore, query, where, getDocs, doc } from 'firebase/firestore';

const Header = () => {
  const userFirebase = useSelector((state) => state.user);

  const [currentUser, setCurrentUser] = useState([{
    accessToken: '',
    createAt: '',
    email: '',
    id: '',
    lastLogin: '',
    photoUrl: ''
  }]);
  const [currentSaldo, setCurrentSaldo] = useState(0.0);

  useEffect(() => {
    const userLocalStore = JSON.parse(localStorage.getItem('users'));
    console.log(userFirebase.length);
    if(userFirebase.length > 0)
      setCurrentUser(userFirebase)
    else{
      const user = [userLocalStore]
      setCurrentUser(user);
    }

    getDocumentsWallet();
  }, [])

  async function getDocumentsWallet(){
    if(app){
      const db = getFirestore(app);
      if(db){
        const walletCollection = collection(db, 'Carteira');
        const walletResult = query(walletCollection, where('email', '==', 'dcutiyama@gmail.com'));
        console.log('result = ', walletResult);

        const querySnapshot = await getDocs(walletResult);

        querySnapshot.docs.map((e) => {
          console.log("Document data:", e.data());
          const wallet = e.data();
          setCurrentSaldo(wallet.saldo);
        })

      }
    }
  }

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-transparent">
        <Link className="navbar-brand px-4" to="/">
          IWallet
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto justify-content-end">
            <li className="nav-item">
              <Link className="nav-link" id="navCOBRARPAGAR" to="/CobrarPagar">
                Cobrar/Pagar
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                id="navCOMPRARRECARGA"
                to="/CompraRecarga"
              >
                Compra/Recarga
              </Link>
            </li>
          </ul>
        </div>
        <div className="px-5">
          <div className="navbar-nav mr-auto">
            <div className="dropdown">
              <span>{currentUser[0].email}</span>
              <div className="dropdown-content">
                <Link to='/Profile'>
                  <NumericFormat 
                    value={currentSaldo}
                    displayType="text"
                    thousandSeparator="."
                    decimalScale={2}
                    decimalSeparator=","
                    prefix="R$"
                    renderText={(value) => <span>{value}</span>}
                    />
                </Link>
                <Link to="/Login">Log Out</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
