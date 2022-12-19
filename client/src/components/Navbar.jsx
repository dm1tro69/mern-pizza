import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

const Navbar = () => {
    const {cartItems} = useSelector(state => state.cart)
    const {currentUser} = useSelector(state => state.userRegister)
    const dispatch = useDispatch()
    return (
        <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
            <Link className="navbar-brand" to="/">PIZZA</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">

            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item ">

                        {currentUser.user ? <Link className="nav-link" to="/login">{currentUser.user.name} Log Out?</Link>:<Link className="nav-link" to="/login">Login </Link>}

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cart">Cart {cartItems?.length}</Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
