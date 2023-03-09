import React from 'react'
import { Link } from 'react-router-dom';
import { AppContext } from '../App';

export const Header = (props) => {
  const [burger, setBurger] = React.useState(true);
  let {setId} = React.useContext(AppContext);
  const onClickBurger = () => {
    setBurger(!burger);
  }
  return (
    <>
        <header id='header' className="header wrapper">
          <aside className="left_side" onClick={() => setId(0)}>
            <Link to="/sportif"><img src="/sportif/img/logo.png" alt="SportIf USA logo"></img></Link>
          </aside>
          <aside className="right_side">
            <ul onClick={() => onClickBurger()} className={burger ? "navigation" : "navigation active"}>
              <Link to="/sportif/Catalog/Catalog"><li onClick={() => setId(0)} className="list_text">Shorts</li></Link>
              <a href="#header"><li className="list_text">Pants</li></a>
              <a href="#header"><li className="list_text">Shirts</li></a>
              <a href="#header"><li className="list_text">Accessories</li></a>
              <a href="#header"><li className="list_text">Sale</li></a>
              <li onClick={props.onClickCart} className="list_text">Cart</li>
            </ul>
            <div onClick={() => onClickBurger()} className={burger ? "hamburger" : "hamburger active"} >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <div className="header_input dispaly">
              <img src="/sportif/img/find.png" alt='find'></img>
              <input type="search" placeholder="SEARCH ENTIRE STORE HERE"></input>
            </div>
          </aside>
        </header>
    </>
  )
}
