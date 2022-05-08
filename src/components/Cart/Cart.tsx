import React from 'react'
import {useSelector, useDispatch} from "react-redux";
import {BsDash, BsPlus} from "react-icons/bs";
import {MdOutlineRemoveShoppingCart} from "react-icons/md";
import {RootState} from "../../redux/reducers";
import imageNotAvailable from "../../assets/NoImageFound.png";
import IProduct from "../../interfaces/product";
import emptyCart from '../../assets/empty-cart.svg'

const Cart: React.FC = () => {
    const {products, totalQuantities, totalPrice} = useSelector((state: RootState) => state.CartReducer);
    const dispatch = useDispatch();
    return (
        <div className="cart">
            <div className="container">
                {products.length ? <>
                    <div className="row">
                        <div className="col-9">
                            <div className="cart__heading">
                                <div className="row">
                                    <div className="col-2">Picture</div>
                                    <div className="col-2">Name</div>
                                    <div className="col-2">Price</div>
                                    <div className="col-2 text-center">Inc/Dec</div>
                                    <div className="col-2 text-center">Total Price</div>
                                    <div className="col-2 text-center">Remove</div>
                                </div>
                            </div>
                            {products.map((product: IProduct) => (
                                <div className="row verticalAlign" key={product?.id}>
                                    <div className="col-2">
                                        <div className="cart__image">
                                            {
                                                product?.image ?
                                                    <img src={`/images/${product?.image}`} alt="product photo"/>
                                                    :
                                                    <img src={imageNotAvailable} alt="Image Not Available"/>
                                            }
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__name">
                                            <span data-testid="product-name">{product?.name}</span>
                                            <span data-testid="product-brand">{product?.brand}</span>
                                            <span>{product?.options[0].color}</span>
                                            <span>{product?.options[0].power && product?.options[0].power}</span>
                                            <span>{product?.options[0].storage && product?.options[0].storage}</span>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__price" data-testid="product-price">
                                            {product?.price}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="details__info cart__incDec">
                                            <div className="details__incDec">
                                                <span aria-label="decrease quantity" className="dec"
                                                      onClick={() => dispatch({
                                                          type: 'DEC',
                                                          payload: product.id
                                                      })}><BsDash/></span>
                                                <span className="quantity"
                                                      data-testid="product-quantity">{product?.quantity}</span>
                                                <span aria-label="increase quantity" className="inc"
                                                      onClick={() => dispatch({
                                                          type: 'INC',
                                                          payload: product.id
                                                      })}><BsPlus/></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__total text-center">
                                            {Number(product?.price) * Number(product?.quantity)}
                                        </div>
                                    </div>
                                    <div className="col-2">
                                        <div className="cart__remove text-center"
                                             onClick={() => dispatch({type: 'REMOVE', payload: product.id})}>
                                            <MdOutlineRemoveShoppingCart aria-label="remove" style={{fontSize: '25px'}}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="col-3 summary-col">
                            <div className="summary">
                                <div className="summary__heading">
                                    Summary
                                </div>
                                <div className="summary__details">
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Items:
                                        </div>
                                        <div className="col-6" data-testid="total-quantity">{totalQuantities}</div>
                                    </div>
                                    <div className="row mb-10">
                                        <div className="col-6">
                                            Total Price
                                        </div>
                                        <div className="col-6" data-testid="total-price">
                                            {totalPrice}
                                        </div>
                                    </div>
                                    <button type="button" className="checkout">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </> : <img src={emptyCart} alt="empty cart"/>}
            </div>
        </div>
    )
}

export default Cart
