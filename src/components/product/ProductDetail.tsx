import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsUsage } from '../../state-center';
import { useParams } from 'react-router-dom';
import { RootState } from '../../state-center/reducer';
import { Product } from '../../interfaces';
import { BiEuro } from 'react-icons/bi';
import { BsDash, BsPlus } from 'react-icons/bs';
import ProductOptions from './ProductOptions';
import imageNotAvailable from '../../assets/NoImageFound.png';

type IdParams = { id?: string };

const ProductDetail: React.FC = () => {
    const dispatch = useDispatch();
    const { addProductToCart } = bindActionCreators(actionsUsage, dispatch);
    const products = useSelector((state: RootState) => state.products);
    const [product, setProduct] = useState<undefined | Product>();
    const [finalCartItem, setFinalCartItem] = useState<undefined | Product>();
    const [finalCartItemQuantity, setFinalCartItemQuantity] = useState(1);
    const { id } = useParams<IdParams>();

    const changeProductQuantity = (changeType: string) => {
        if (changeType === 'decrease' && finalCartItemQuantity > 1) {
            setFinalCartItemQuantity(finalCartItemQuantity - 1);
        } else {
            setFinalCartItemQuantity(finalCartItemQuantity + 1);
        }
    };

    const addToCart = () => {
        addProductToCart(finalCartItem!, finalCartItemQuantity);
    };

    useEffect(() => {
        setProduct(products.find((product: Product) => product.id === parseInt(id!)));
        setFinalCartItem(products.find((product: Product) => product.id === parseInt(id!)));
    }, [id]);

    return (
        <div className="container mt-100">
            <div className="row">
                <div className="col-6">
                    <div className="details__image">
                        {product?.image ? (
                            <img src={`/images/${product?.image}`} alt="product photo" />
                        ) : (
                            <img src={imageNotAvailable} alt="Image Not Available" />
                        )}
                    </div>
                </div>
                <div className="col-6">
                    <div className="details__name">
                        {product?.name} <small>{product?.brand}</small>
                    </div>
                    <div className="details__prices">
                        {product?.price}
                        <BiEuro />
                    </div>
                    <div className="details__info">
                        <div className="details__incDec">
                            <span
                                aria-label="decrease quantity"
                                className="dec"
                                data-testid="decrease-quantity"
                                onClick={() => changeProductQuantity('decrease')}>
                                <BsDash />
                            </span>
                            <span className="quantity" data-testid="quantity">
                                {finalCartItemQuantity}
                            </span>
                            <span
                                aria-label="increase quantity"
                                className="inc"
                                data-testid="increase-quantity"
                                onClick={() => changeProductQuantity('increase')}>
                                <BsPlus />
                            </span>
                            {product?.available ? (
                                <button
                                    aria-label="add this product to cart"
                                    data-testid="add-to-cart"
                                    className="btn-default"
                                    onClick={addToCart}>
                                    add to cart
                                </button>
                            ) : (
                                <button className="btn-disabled">currently unavailable</button>
                            )}
                        </div>
                    </div>
                    <div className="details__p">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            Weight: {product?.weight} kg
                        </div>
                        {product?.options && (
                            <ProductOptions
                                options={product?.options}
                                onProductOptionsChange={setFinalCartItem}
                                finalCartItem={finalCartItem!}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
