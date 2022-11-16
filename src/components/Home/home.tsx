import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../state-center/reducer';
import ProductCard from '../product/ProductCard';

const Home: React.FC = () => {
    const products = useSelector((state: RootState) => state.products);

    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <ProductCard products={products} />
                </div>
            </div>
        </div>
    );
};

export default Home;
