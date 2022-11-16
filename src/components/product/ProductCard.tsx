import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../interfaces';
import imageNotAvailable from '../../assets/NoImageFound.png';
import { BiEuro } from 'react-icons/bi';

type Props = {
    products: Product[];
};
const ProductCard: React.FC<Props> = ({ products }) => {
    return (
        <>
            {products.map((product: Product) => (
                <Link className="col-3" key={product?.id} to={`/product-detail/${product?.id}`}>
                    <div>
                        <div className="product">
                            <div className="product__img">
                                {product?.image ? (
                                    <img src={`/images/${product?.image}`} alt="image name" />
                                ) : (
                                    <img src={imageNotAvailable} alt="Image Not Available" />
                                )}
                            </div>
                            <div className="price-wrapper">
                                <div className="product__name">{product?.name}</div>
                                <div className="product__price">
                                    {product?.price}
                                    <BiEuro />
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
            ))}
        </>
    );
};

export default ProductCard;
