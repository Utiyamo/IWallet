import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userAdded, userToggled } from '../../Store/features/users/UserSlice';
import * as firebaseAuth from 'firebase/auth';
import { getAuth } from 'firebase/auth';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({ 
        email: '',
        password: ''
    });
    const userFirebase = useSelector(state => state.user);
    const appFirebase = useSelector(state => state.app);

    const dispatch = useDispatch();
    const history = useHistory();

    const handlerUser = (event) => {
        let updatableUser = user;
        updatableUser[event.target.name] = event.target.value;

        setUser(updatableUser);
    }

    useEffect(() => {
        dispatch(userToggled());
    }, [])

    //Sync 
    async function login(){
        setErrorMessage('');

        if(user.email.length > 0 && user.password.length > 0){
            await firebaseAuth.signInWithEmailAndPassword(getAuth(), user.email, user.password)
                .then((userCredencials) => {
                    const user = {
                        accessToken: userCredencials.user.accessToken,
                        email: userCredencials.user.email,
                        id: userCredencials.user.uid,
                        createAt: userCredencials.user.metadata.creationTime,
                        lastLogin: userCredencials.user.metadata.lastSignInTime,
                        photoUrl : userCredencials.user.photoURL
                    }
                    dispatch(userAdded(user));
                    localStorage.setItem('users', JSON.stringify(user));
                    history.push('/Home');
                })
                .catch(error => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} / ${errorMessage}`);
                })
        }
        else
            setErrorMessage('Email or Password are invalids');
    }

    return (
        <div className='container'>
            <div className='row justify-content-center'>
                <div className='col-md-6 py-5'>
                    <div className='card'>
                        <form className='box'>
                            <h1>LOG IN</h1>
                            <p className='text-muted'>Please enter your login and password</p>
                            {errorMessage.length > 0 &&
                                <div className='alert alert-danger'>
                                    {errorMessage}
                                </div>
                            }
                            <input type='text' name='email' placeholder='Email' onChange={handlerUser}></input>
                            <input type='password' name='password' placeholder='Password' onChange={handlerUser}></input>
                            <Link className='forgot text-muted' to='/ForgotPassword'>Forgot password?</Link>
                            <button type='button' onClick={login}>Log IN</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}