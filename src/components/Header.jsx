import React from 'react'
import { Link } from 'react-router-dom';
import LogoutButton from './LogOutButton';
import LoginButton from './LoginButton';
import Profile from './Profile';
import { useAuth0 } from "@auth0/auth0-react";

export const Header = (props) => {
  const [burger, setBurger] = React.useState(true);
  const { isAuthenticated } = useAuth0();

  const onClickBurger = () => {
    setBurger(!burger);
  }
  return (
    <>
        <header id='header' className="header wrapper">
          <aside className="left_side">
            <Link to="/"><img src="/sportif/img/logo.png" alt="SportIf USA logo"></img></Link>
          </aside>
          <aside className="right_side">
            <ul onClick={() => onClickBurger()} className={burger ? "navigation" : "navigation active"}>
              <Link to="/catalog"><li className="list_text">Shorts</li></Link>
              <a href="#header"><li className="list_text">Pants</li></a>
              <a href="#header"><li className="list_text">Shirts</li></a>
              <a href="#header"><li className="list_text">Accessories</li></a>
              <a href="#header"><li className="list_text">Sale</li></a>
              <li onClick={props.onClickCart} className="list_text">Cart</li>
              {
                isAuthenticated
                ?
                <>
                  <Profile />
                  <LogoutButton />
                </>
                :
                <LoginButton />
              }
              
            </ul>
            <div onClick={() => onClickBurger()} className={burger ? "hamburger" : "hamburger active"} >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </aside>
        </header>
    </>
  )
}
