import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import {useDispatch} from "react-redux";
import {placeOrder} from "../actions/orderActions";

const Checkout = ({subTotal}) => {

    const dispatch = useDispatch()

    const tokenHandler = (token) => {
        dispatch(placeOrder(token, subTotal))
    }

    return (
        <div>
          <StripeCheckout
              amount={subTotal*100}
              shippingAddress
              token={tokenHandler}
              stripeKey={'pk_test_6qFwLXCkAIxkkXvoliZmnsq400zaUvB7ri'}
              currency={'USD'}
          >

              <button className={'btn'}>Pay Now</button>
          </StripeCheckout>
        </div>
    );
};

export default Checkout;
