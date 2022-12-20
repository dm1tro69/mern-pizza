import React, { useState} from 'react';
import {useDispatch} from "react-redux";
import {registerUser} from "../actions/userActions";
import {Link, useNavigate} from "react-router-dom";

const RegisterScreen = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const register = (e) => {
      e.preventDefault()
        if (password !== password2){
            alert('Passwords dont math')
        }else {
            const user = {name, email, password}
            dispatch(registerUser(user))
            navigate('/')
        }
    }


    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left">
                    <h2>Register</h2>
                    <div>
                        <input
                            value={name}
                            onChange={(e)=> setName(e.target.value)}
                            className={'form-control'}
                            type="text"
                            placeholder={'name'}
                            required
                        />
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
                        <input
                            value={password2}
                            onChange={(e)=> setPassword2(e.target.value)}
                            className={'form-control'}
                            type="password"
                            placeholder={'confirm password'}
                            required
                        />
                        <button className={'btn mt-3'} onClick={register}>REGISTER</button>
                        <br/>
                        <Link className={'mt-2'} style={{color: 'black'}} to={'/login'}>Click here to login</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterScreen;

