import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap'

const Pizza = ({pizza}) => {
    const [quantity, setQuantity] = useState(1)
    const [variant, setVariant] = useState('small')
    const [show, setShow] = useState(false)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div style={{margin: '70px'}} className={'shadow-lg p-3 mb-5 bg-white rounded'}>
           <div onClick={handleShow}>
               <h1>{pizza.name}</h1>
               <img src={pizza.image} alt="img" className={'img-fluid'} style={{height: '200px', width: '200px'}}/>

           </div>
            <div className={'flex-container'}>
                <div className={'w-100 m-1'}>
                    <p>Variants</p>

                        <select
                            className={'form-control'}
                            value={variant}
                            onChange={(e) => setVariant(e.target.value)}
                        >
                            {pizza.varients.map((v,i)=> (
                                <option key={i} value={v}>{v}</option>
                            ))}
                        </select>

                </div>
                <div className={'w-100 m-1'}>
                     <p>Quantity</p>
                    <select
                        className={'form-control'}
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                    >
                        {[...Array(10).keys()].map(item => (
                            <option key={item} value={item+1}>{item+1}</option>
                        ))}
                    </select>
                </div>
            </div>
            <div className={'flex-container'}>
                 <div className={'m-1 w-100'}>
                     <h1 className={'mt-1'}>Price: {pizza.prices[0][variant]*quantity}</h1>
                 </div>
                <div className={'m-1 w-100'}>
                   <button className={'btn'}>ADD TO CART</button>
                </div>
            </div>


                <Modal show={show}>
                    <Modal.Header closeButton onClick={handleClose}>
                        <Modal.Title>{pizza.name}</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <img className={'img-fluid'} src={pizza.image} alt="img" style={{height: '300px'}}/>
                        <p>{pizza.description}</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Close</Button>

                    </Modal.Footer>
                </Modal>


        </div>
    );
};

export default Pizza;
