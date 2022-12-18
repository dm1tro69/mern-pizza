import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const CartScreen = () => {
    const {cartItems} = useSelector(state => state.cart)
    console.log(cartItems)
    const dispatch = useDispatch()
    return (
        <div>
         <div className="row justify-content-center">
             <div className="col-md-6">
                  <h2 style={{fontSize: '40px'}}>My Cart</h2>
                 {cartItems.map(cart => (
                     <div key={cart._id} className="flex-container">
                         <div className={'text-left m-1 w-100'}>
                            <h1>{cart.name}  [{cart.varient}]</h1>
                             <h1>Price: {cart.quantity} * {cart.prices[0][cart.varient]} = {cart.price}</h1>
                             <h1 style={{display: 'inline'}}>Quantity: </h1>
                             <i className={'fa fa-plus'}></i>
                             <b>{cart.quantity}</b>
                             <i className={'fa fa-minus'}></i>
                             <hr/>
                         </div>
                         <div className={'m-1 w-100'}>
                             <img src={cart.image} alt="img" style={{height: '80px', width: '80px'}}/>
                         </div>
                         <div className={'m-1 w-100'}>
                             <i className={'fa fa-trash mt-5'}></i>
                         </div>
                     </div>
                 ))}

             </div>
             <div className="col-md-4">

             </div>
         </div>
        </div>
    );
};

export default CartScreen;
