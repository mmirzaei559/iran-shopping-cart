import React from 'react';
// import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';
// import {RootState} from '../../state-center/reducer';
import logo from '../../assets/logo.svg';

const Nav: React.FC = () => {
    // const {totalQuantities} = useSelector((state: RootState) => state.CartReducer)
    return (
        <div className="nav">
            <div className="container">
                <div className="nav__container">
                    <div className="nav__left">
                        <Link to="/">
                            <img
                                aria-label="home"
                                src={logo}
                                alt="logo"
                                title="iran Shopping cart"
                            />
                        </Link>
                    </div>
                    <div className="nav__right">
                        <Link to="/cart">
                            <div className="basket">
                                <BsCart4 className="cart-icon" aria-label="cart" title="cart" />
                                {/* <span>{totalQuantities}</span> */}
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Nav;
