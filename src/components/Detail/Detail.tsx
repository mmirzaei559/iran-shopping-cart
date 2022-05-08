import React, {useEffect, useState} from 'react'
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux"
import {BsDash, BsPlus} from "react-icons/bs";
import {RootState} from "../../redux/reducers";
import imageNotAvailable from "../../assets/NoImageFound.png";
import Options from "./Options";
import {BiEuro} from "react-icons/bi";
import IProduct from "../../interfaces/product";

type IdParams = {
    id?: string | undefined
}

const Details: React.FC = () => {
    const {product} = useSelector((state: RootState) => state.ProductsReducer);
    const [productInCart, setProductInCart] = useState<IProduct>(product)
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams<IdParams>();
    const dispatch = useDispatch();
    const decQuantity = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

    const addDetailsBeforeAddToCard = (color?: string, power?: string, storage?: string) => {
        setProductInCart({
            ...productInCart,
            options: [
                {
                    color: color ? color : (product?.options[0].color) ? product?.options[0].color : '',
                    power: power ? power : (product?.options[0].power) ? product?.options[0].power[0] : null,
                    storage: storage ? storage : (product?.options[0].storage) ? product?.options[0].storage[0] : null,
                    quantity: null
                }
            ]
        })
    }

    useEffect(() => {
        dispatch({type: 'PRODUCT', id})
    }, [id])

    useEffect(() => {
        setProductInCart(product)
    }, [product])


    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        {
                            product?.image ?
                                <img src={`/images/${product?.image}`} alt="product photo"/>
                                :
                                <img src={imageNotAvailable} alt="Image Not Available"/>
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product?.name} <small>{product?.brand}</small>
                    </div>
                    <div className="details__prices">
                        {product?.price}
                        <BiEuro/>
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                            <span aria-label="decrease quantity" className="dec" data-testid="decrease-quantity"
                                  onClick={decQuantity}><BsDash/></span>
                            <span className="quantity" data-testid="quantity">{quantity}</span>
                            <span aria-label="increase quantity" className="inc" data-testid="increase-quantity"
                                  onClick={() => setQuantity(quantity + 1)}><BsPlus/></span>
                            {
                                product?.available ?
                                    <button aria-label="add this product to cart" data-testid="add-to-cart"
                                            className="btn-default" onClick={() => dispatch({
                                        type: 'ADD_TO_CART',
                                        payload: {productInCart, quantity}
                                    })}>add to cart</button>
                                    :
                                    <button className="btn-disabled">currently unavailable</button>
                            }
                        </div>
                    </div>
                    <div className="details__p">
                        <div style={{display: 'flex', alignItems: 'center'}}>
                            Weight: {product?.weight} kg
                        </div>
                        {product?.options &&
                        <Options productOptions={product?.options}
                                 addDetailsBeforeAddToCard={addDetailsBeforeAddToCard}/>}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Details