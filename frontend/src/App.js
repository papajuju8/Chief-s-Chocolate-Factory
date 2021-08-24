import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import { signout } from './actions/userActions';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartScreen from './screens/CartScreen';
import HomeScreen from './screens/HomeScreen';
import OrderHistoryScreen from './screens/OrderHistoryScreen';
import OrderScreen from './screens/OrderScreen';
import PaymentMethodScreen from './screens/PaymentMethodScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductScreen from './screens/ProductScreen';
import ProfileScreen from './screens/ProfileScreen';
import RegisterScreen from './screens/RegisterScreen';
import ShippingAddressScreen from './screens/ShippingAddressScreen';
import SigninScreen from './screens/SigninScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import SellerRoute from './components/SellerRoute';
import header_logo from './header_logo.svg';

function App() {
    //Adding of badge
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo } = userSignin;
    const dispatch = useDispatch();
    const signoutHandler = () => {
        dispatch(signout());
    };

    return (
        <BrowserRouter>
            <div className="grid-container">
                <header className="row">
                    <div>
                        <Link className="brand" to="/">
                            {/* Marketplace */}
                            <img src={header_logo} className="header_logo" alt="Chief's Chocolate Factory" />
                        </Link>
                    </div>
                    <div className="header_style">
                        <Link to="/cart" className="headerAnchor">
                            <i class="fa fa-shopping-cart" aria-hidden="true"></i>&nbsp;Cart
                            {cartItems.length > 0 && (
                                <span className="badge">{cartItems.length}</span>
                            )}
                        </Link>
                        {userInfo && userInfo.isSeller && (
                            <div className="dropdown">
                                <Link to="#admin" className="headerAnchor">
                                    Seller <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/productlist/seller" className="headerAnchor">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderlist/seller" className="headerAnchor">Orders</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {userInfo && userInfo.isAdmin && (
                            <div className="dropdown">
                                <Link to="#admin" className="headerAnchor">
                                    Admin <i className="fa fa-caret-down"></i>
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/dashboard" className="headerAnchor">Dashboard</Link>
                                    </li>
                                    <li>
                                        <Link to="/productlist" className="headerAnchor">Products</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderlist" className="headerAnchor">Orders</Link>
                                    </li>
                                    <li>
                                        <Link to="/userlist" className="headerAnchor">Users</Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                        {userInfo ? (
                            <div className="dropdown">
                                <Link to="#" className="headerAnchor">
                                    {userInfo.name} <i className="fa fa-caret-down"></i>{' '}
                                </Link>
                                <ul className="dropdown-content">
                                    <li>
                                        <Link to="/profile" className="headerAnchor">User Profile</Link>
                                    </li>
                                    <li>
                                        <Link to="/orderhistory" className="headerAnchor">Order History</Link>
                                    </li>
                                    <li>
                                        <Link to="#signout" onClick={signoutHandler} className="headerAnchor">
                                            Sign Out
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        ) : (
                            <Link to="/signin" className="headerAnchor">Sign In</Link>
                        )}
                    </div>
                </header>

                <main>
                    <Route path="/cart/:id?" component={CartScreen}></Route>
                    <Route path="/product/:id" component={ProductScreen} exact></Route>
                    <Route
                        path="/product/:id/edit"
                        component={ProductEditScreen}
                        exact
                    ></Route>
                    <Route path="/signin" component={SigninScreen}></Route>
                    <Route path="/register" component={RegisterScreen}></Route>
                    <Route path="/shipping" component={ShippingAddressScreen}></Route>
                    <Route path="/payment" component={PaymentMethodScreen}></Route>
                    <Route path="/placeorder" component={PlaceOrderScreen}></Route>
                    <Route path="/order/:id" component={OrderScreen}></Route>
                    <Route path="/orderhistory" component={OrderHistoryScreen}></Route>
                    <PrivateRoute
                        path="/profile"
                        component={ProfileScreen}
                    ></PrivateRoute>
                    <AdminRoute
                        path="/productlist"
                        component={ProductListScreen}
                        exact
                    ></AdminRoute>
                    <AdminRoute
                        path="/orderlist"
                        component={OrderListScreen}
                        exact
                    ></AdminRoute>
                    <AdminRoute path="/userlist" component={UserListScreen}></AdminRoute>
                    <AdminRoute
                        path="/user/:id/edit"
                        component={UserEditScreen}
                    ></AdminRoute>
                    <SellerRoute
                        path="/productlist/seller"
                        component={ProductListScreen}
                    ></SellerRoute>
                    <SellerRoute
                        path="/orderlist/seller"
                        component={OrderListScreen}
                    ></SellerRoute>
                    <Route path="/" component={HomeScreen} exact></Route>
                </main>

                
                <footer className="row center footer_text">All right reserved</footer>
            </div>
        </BrowserRouter>
    );
}

export default App;

