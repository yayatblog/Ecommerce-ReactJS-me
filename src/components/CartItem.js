import React from 'react';

export default function CartItem({ item, value }) {
    const { id, title, img, price, total, count } = item;
    console.log('ini item: ', item)
    console.log('ini value : ', value)
    const { increase, decrease, removeItem } = value;
    return (
        <div className="row my-1 text-captalize text-center">
            <div className="div col-10 mx-auto col-lg-2">
                <img
                    src={img}
                    style={{ width: "5rem", height: "5rem" }}
                    className="img-fluid"
                    alt="product"
                />
            </div>
            <div className="div col-10 mx-auto col-lg-2">
                <span className="d-lg-none">product :</span>
                {title}
            </div>
            <div className="div col-10 mx-auto col-lg-2">
                <span className="d-lg-none">price :</span>
                {price}
            </div>
            <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                <div className="d-flex justify-content-center">
                    <div>
                        <span className="btn btn-black mx-1" onClick={() => decrease(id)}>-</span>
                        <span className="btn btn-black mx-1">{count}</span>
                        <span className="btn btn-black mx-1" onClick={() => increase(id)}>+</span>
                    </div>
                </div>
            </div>
            <div className="div col-10 mx-auto col-lg-2">
                <div className="cart-icon">

                    <i className="fas fa-trash" onClick={() => removeItem(id)}></i>
                </div>
            </div>
            <div className="div col-10 mx-auto col-lg-2">
                <strong className="d-lg-none">Item total : Rp</strong><strong>Rp.{total}</strong>
            </div>
        </div>
    );


};