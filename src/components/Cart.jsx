import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './cart.css'
import { AppContext } from '../App';

export const Cart = ({onDeleteFromCart, items=[]}) => {
    const notify = () => toast("Ваше замовлення прийняте");
    const {setCartOpened} = React.useContext(AppContext);    
    let {cartArray} = React.useContext(AppContext);
    
    const totalPrice = +cartArray.reduce((sum, obj) => obj.price + sum, 0);
    const tax = (totalPrice * 5) /100;

    return(
        <div className="shadow">
            <div className="basket">
                <div className="basket_nav">
                    <header>Корзина</header>
                    <img onClick={() => setCartOpened(false)} src="/sportif/img/close.svg" alt="close" width={32} height={32} className="close"></img>
                </div>
                <div className="goods">
                    {items.map((obj)=>(
                        <div className="basket_item">
                            <div className="left_cart_side">
                                <img src={obj.img} alt="sneaker" width={70} height={70}></img>
                                <div className="info_cart">
                                    <div className="about">{obj.name}</div>
                                    <div className="price">${obj.price}</div>
                                </div>
                            </div>
                            <img src="/sportif/img/close.svg" alt="close" onClick={()=>onDeleteFromCart(obj)} width={32} height={32} className="close close_cart"></img>
                        </div>
                    ))}
                    <div className="how_much">
                        <ul>
                        <li>
                            <span>Всього:</span>
                            <div className="dashed"></div>
                            <div className="total">${totalPrice.toFixed(2)}</div>
                        </li>
                        <li>
                            <span>ПДВ 5%:</span>
                            <div className="dashed"></div>
                            <div className="total">${tax.toFixed(2)}</div>
                        </li>
                        </ul>
                        <button onClick={notify} className="cart_button">
                        <div>Замовити</div>
                        <img src="/sportif/img/arrow.svg" alt="arrow"></img>
                        </button>
                        <ToastContainer
                            position="top-center"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover
                            theme="light"
                        /> 
                    </div>
                </div>
            </div>
        </div>
    );
    
}
