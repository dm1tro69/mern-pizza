import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {loginUser, registerUser} from "../actions/userActions";
import {useNavigate} from "react-router-dom";

const LoginScreen = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    const {currentUser} = useSelector(state => state.userRegister)


    const dispatch = useDispatch()

    const login = (e) => {
        e.preventDefault()
        if (!email || !password){
            return alert('Invalid Credentials')
        }
        const user = {email, password}
        dispatch(loginUser(user))

    }
    useEffect(()=> {
        if (currentUser.token){
            navigate('/')
        }
    }, [currentUser.token])

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left">
                    <h2>Login</h2>
                    <div>
                        <input
                            value={email}
                            onChange={(e)=> setEmail(e.target.value)}
                            className={'form-control'}
                            type="email"
                            placeholder={'email'}
                            required
                        />
                        <input
                            value={password}
                            onChange={(e)=> setPassword(e.target.value)}
                            className={'form-control'}
                            type="password"
                            placeholder={'password'}
                            required
                        />

                        <button className={'btn mt-3'} onClick={login}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginScreen;

