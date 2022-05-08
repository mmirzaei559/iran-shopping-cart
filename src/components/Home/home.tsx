import React from "react";
import {useSelector} from "react-redux";
import {Link} from "react-router-dom"
import {RootState} from "../../redux/reducers";
import imageNotAvailable from '../../assets/NoImageFound.png'
import IProduct from "../../interfaces/product";
import {BiEuro} from "react-icons/bi";

const Home: React.FC = () => {
    const {products} = useSelector((state: RootState) => state.ProductsReducer);
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    {products.map((product: IProduct) => (
                        <Link className="col-3" key={product?.id} to={`/details/${product?.id}`}>
                            <div>
                                <div className="product">
                                    <div className="product__img">
                                        {
                                            product?.image ?
                                                <img src={`/images/${product?.image}`} alt="image name"/>
                                                :
                                                <img src={imageNotAvailable} alt="Image Not Available"/>
                                        }
                                    </div>
                                    <div className="price-wrapper">
                                        <div className="product__name">
                                            {product?.name}
                                        </div>
                                        <div className="product__price">
                                            {product?.price}
                                            <BiEuro/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Home;