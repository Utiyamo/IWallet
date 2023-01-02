import { initializeApp } from 'firebase/app';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { appAdded, appToggled } from './Store/features/app/AppSlice';

import './App.css';

import Router from './router';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDMbqRyO46utjJnsTXHahRgy5nfRn7JUXQ",
    authDomain: "ibgedash.firebaseapp.com",
    projectId: "ibgedash",
    storageBucket: "ibgedash.appspot.com",
    messagingSenderId: "91649227715",
    appId: "1:91649227715:web:9685e46fc2282d39a1db76"
  };

  const dispatch = useDispatch();

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    dispatch(appAdded(app));
  }, [])

  return (
    <div className="App">
      <Router />
    </div>
  );
}

export default App;
