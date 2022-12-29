import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { userAdded, userToggled } from '../../Store/features/users/UserSlice';

import LoginService from '../../Services/LoginService';

export default function Login() {
    const [errorMessage, setErrorMessage] = useState('');
    const [user, setUser] = useState({ 
        email: '',
        password: ''
    });
    const userFirebase = useSelector(state => state.user);

    const dispatch = useDispatch();
    const history = useHistory();

    const handlerUser = (event) => {
        let updatableUser = user;
        updatableUser[event.target.name] = event.target.value;

        setUser(updatableUser);
    }

    async function login(){
        setErrorMessage('');

        if(user.email.length > 0 && user.password.length > 0){
            console.log(user);
            let userFirebase = await LoginService.Login(user.email, user.password);
            console.log(userFirebase);
            if(userFirebase.isValid){
                dispatch(userAdded(userFirebase));
                window.location.href = `.../`;
            }
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