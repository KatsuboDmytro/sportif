import React from 'react'
import { AppContext } from '../App';

export const Info = ({img, title, description}) => {
    const {setCartOpened} = React.useContext(AppContext);

  return (
    <div className="busket_empty">
        <img src={img} width="120px" alt="empty"></img>
        <div className="title_bucket">{title}</div>
        <div className="text_bucket">{description}</div>
        <button onClick={() => setCartOpened(false)} className="back_button">
            <img src="/img/arrow.svg" alt="arrow"></img>
            <div>Повернутись назад</div>
        </button>
  </div>
  )
}