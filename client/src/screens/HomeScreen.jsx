import React, {useEffect} from 'react';
import Pizza from "../components/Pizza";
import {getAllPizzas} from "../actions/pizzaActions";
import {useDispatch, useSelector} from "react-redux";
import {Alert, Spinner} from "react-bootstrap";

const HomeScreen = () => {

    const {pizzas, isLoading, error} = useSelector(state => state.allPizza)
    const dispatch = useDispatch()

    useEffect(()=> {
        dispatch(getAllPizzas())
    }, [dispatch])

    return (
        <div>
            {isLoading && <Spinner/>}
            {error && <Alert variant={'danger'}>{error}</Alert>}
            <div className="row justify-content-center">
                {pizzas?.map((pizza) => (
                    <div key={pizza.name} className={'col-md-3 m-3'}>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HomeScreen;
