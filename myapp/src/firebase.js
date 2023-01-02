'use strict'

import { deleteApp, initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDMbqRyO46utjJnsTXHahRgy5nfRn7JUXQ",
    authDomain: "ibgedash.firebaseapp.com",
    projectId: "ibgedash",
    storageBucket: "ibgedash.appspot.com",
    messagingSenderId: "91649227715",
    appId: "1:91649227715:web:9685e46fc2282d39a1db76"
  };

const app = initializeApp(firebaseConfig);

export default app;