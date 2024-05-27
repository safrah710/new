import React, { useState } from 'react';

function Card({ setcart }) {
    let data = [
        { price: 200, index: 0 },
        { price: 40, index: 1 },
        { price: 60, index: 2 },
        { price: 70, index: 3 },
        { price: 90, index: 4 },
        { price: 170, index: 5 }
    ];

    const [value, setValue] = useState([true, true, true, true, true,true]);

    const toggleCartItem = (index) => {
        const newValue = [...value]; 
        newValue[index] = !newValue[index]; 
        setValue(newValue); 
    };

    return (
        <>
            <section className="py-5">
                <div className="container px-4 px-lg-5 mt-5">
                    <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                        {data.map((e) => (
                            <div className="col mb-5" key={e.index}>
                                <div className="card h-100">
                                    <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>Sale</div>
                                    <img className="card-img-top" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." />
                                    <div className="card-body p-4">
                                        <div className="text-center">
                                            <h5 className="fw-bolder">Sale Item</h5>
                                            <span className="text-muted text-decoration-line-through">{e.price}</span>
                                            $25.00
                                        </div>
                                    </div>
                                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                                        {value[e.index] ?
                                            <button className="btn btn-outline-dark mt-auto" style={{ marginLeft: "10px" }} onClick={() => {
                                                toggleCartItem(e.index);
                                                setcart(prev => prev + 1); 
                                            }}>Add to cart</button> :
                                            <button className="btn btn-outline-dark mt-auto" style={{ marginLeft: "10px" }} onClick={() => {
                                                toggleCartItem(e.index);
                                                setcart(prev => prev - 1); 
                                            }}>Remove from cart</button>}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Card;
