import React from 'react';
import pizzas from "../pizzasdata";
import Pizza from "../components/Pizza";

const HomeScreen = () => {
    return (
        <div>
            <div className="row">
                {pizzas.map((pizza) => (
                    <div key={pizza.name} className={'col-md-4'}>
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
