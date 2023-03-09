import './main/index.css';
import './main/style0-320.css';
import './main/style320-375.css';
import './main/style375-425.css';
import './main/style425-768.css';
import './main/style768-1024.css';
import './main/style1024-1140.css';
import './main/style1140-1300.css';

import React from 'react'
import ContentLoader from "react-content-loader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Scroller } from '../Scroller';
import { AppContext } from '../../App';

export const Home = ({clothesArray, isLoading, onAddToCart}) => {
  const notify = () => toast("Додано до списку покупок!");
  let {setId} = React.useContext(AppContext);

	const changes = (item) => {
		onAddToCart(item);
		notify();
	}
  let i = 0;
  const ghostCard = [], fourItems = [];
  for(let i = 0; i < 4; i++) ghostCard.push({}); 
  clothesArray.forEach((item) => {
    i++;
    if(i <= 4){
      fourItems.push(item);
    }
    else {
      return;
    }
  })

  return (
    <>
      {/*-------------------first page----------------------*/}
      <div className="first_screen_main wrapper">
          <section className="text_main">
            <header className="bold_head">BEST SELLING <br></br> STRETCH SHORTS</header>
            <article className="comment_head">Get the perfect fit with 6 different inseam lengths.</article>
            <button className="shop_all_shorts"><a href="./html/catalogPage.html">SHOP ALL SHORTS</a></button>
          </section>
          <img src="/sportif/img/mainPicture.png" alt="brownPic" className='brownPic' id='brownPic'/>
      </div>
      {/*-------------------scroller----------------------*/}
      <Scroller />
      {/*-------------------second page----------------------*/}
      <div className="second_screen_main wrapper">
        <header className="title">TGIF, INLET, AND MARCHAL'S COLLECTIONS</header>
        <article className="subtitle">NOW 40% OFF!</article>
        <div className="slider">
          {
            (isLoading  ? ghostCard : fourItems)
            .map((item) => (
              <div key={item.id}>
							{(
								isLoading 
								?
								<ContentLoader 
									speed={2}
									width={315}
									height={470}
									viewBox="0 0 315 470"
									backgroundColor="#c7c7c7"
									foregroundColor="#cfd1d3">
									<rect x="517" y="236" rx="3" ry="3" width="88" height="6" /> 
									<rect x="551" y="235" rx="3" ry="3" width="52" height="6" /> 
									<rect x="431" y="236" rx="3" ry="3" width="410" height="6" /> 
									<rect x="442" y="243" rx="3" ry="3" width="380" height="6" /> 
									<rect x="448" y="223" rx="3" ry="3" width="178" height="6" /> 
									<circle cx="569" cy="234" r="20" /> 
									<rect x="40" y="25" rx="15" ry="15" width="232" height="232" /> 
									<rect x="70" y="269" rx="10" ry="10" width="170" height="30" /> 
									<rect x="80" y="310" rx="9" ry="9" width="150" height="25" /> 
									<rect x="80" y="345" rx="10" ry="10" width="150" height="25" /> 
									<rect x="70" y="380" rx="10" ry="10" width="170" height="30" /> 
									<rect x="90" y="420" rx="15" ry="15" width="130" height="35" />
								</ContentLoader>
								:
								<>
									<div className="short">
											<img onClick={() => setId(item.item)} src={item.img} alt="sportifOriginalShort" className=" short_name main_picture"></img>
											<header onClick={() => setId(item.item)}>{item.name}</header>
										<section onClick={() => setId(item.item)} className="stars">
											<div className="stars_body">
											<div className="rating_active" style={{width: (item.rate / 0.05) + '%'}}></div>
												<div className="raiting_items">
													<input type="radio" className="star" value="1" name="rating"></input>
													<input type="radio" className="star" value="2" name="rating"></input>
													<input type="radio" className="star" value="3" name="rating"></input>
													<input type="radio" className="star" value="4" name="rating"></input>
													<input type="radio" className="star" value="5" name="rating"></input>
												</div>
											</div>
											<div className="rating_value">{item.rate}</div>
										</section>
										<div onClick={() => setId(item.item)} className="original low_short">As low as &nbsp;<span>${item.price}</span></div>
										<img onClick={() => setId(item.item)} src={item.material} alt="material" className="mat"></img><br></br>
										<button className="cart" onClick={() => changes(item, item.item)}>
											<svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M22.1804 20.1228L20.9026 5.89192C20.8677 5.50329 20.542 5.2056 20.1519 5.2056H17.5166V4.01709C17.5166 1.80207 15.7147 0 13.4998 0C11.2849 0 9.48316 1.80207 9.48316 4.01709V5.2056H6.84614C6.456 5.2056 6.13028 5.50329 6.09541 5.89192L4.81252 20.1788C4.79363 20.3897 4.86418 20.5986 5.00699 20.7548C5.1498 20.911 5.35171 20.9999 5.56326 20.9999H21.4348C21.4354 20.9999 21.4362 20.9999 21.4368 20.9999C21.8532 20.9999 22.1906 20.6624 22.1906 20.2461C22.1905 20.2042 22.1871 20.1629 22.1804 20.1228ZM10.9907 4.01709C10.9907 2.6333 12.1163 1.5075 13.4999 1.5075C14.8835 1.5075 16.0092 2.6333 16.0092 4.01709V5.2056H10.9907V4.01709ZM6.38776 19.4925L7.53527 6.71311H9.48316V8.06101C9.48316 8.47728 9.82054 8.81476 10.2369 8.81476C10.6533 8.81476 10.9907 8.47728 10.9907 8.06101V6.71311H16.0092V8.06101C16.0092 8.47728 16.3466 8.81476 16.763 8.81476C17.1794 8.81476 17.5167 8.47728 17.5167 8.06101V6.71311H19.4628L20.6103 19.4925H6.38776Z"/>
											</svg>
											ADD TO CART
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
								</>
							)}
						</div>
            ))
          }
        </div>
      </div>
      {/*-------------------third page----------------------*/}
      <div className="third_screen wrapper">
        <section className="photo">
          <img src="/sportif/img/bestPants.png" alt="bestPants"></img>
        </section>
        <section className="size text_main">
          <header className="margin bold_head">OUR BESTSELLING <br></br> PANTS </header>
          <article className="comment_head">Our classNameic cargo pants are built to last and designed to exceed your expectations! From Frequent Traveler to Hatteras to Trinidad, we have the perfect fit for you!</article>
          <button className="shop_all_shorts">SHOP ALL PANTS</button>
        </section>
      </div>
      {/*-------------------forth page----------------------*/}
      <div className="forth_screen_main wrapper">
        <aside className="ecoths">
          <img src="/sportif/img/ecoths.png" alt="ecoths"></img>
          <section className="sale_text sale">
            <p className="justText">Our entire Ecoths collection is on sale! Plus, for every Ecoths purchase we donate 3 meals to food banks across the United States. We’re over 400,000 meals in now.</p>
            <button className="shop_by_sale shop_all_shorts">SHOP ECOTHS SALE</button>
          </section>
        </aside>
        <aside className="new_powell_print">
          <img src="/sportif/img/newPowell.png" alt="newPowell"></img>
          <section className="sale_text">
            <p className="justText">New from Old Ranch Brands, the Powell short sleeve print shirt! Look effortlessly sharp in this lightweight cotton shirt with a classNameic shape and convenient features.</p>
            <button className="shop_by_sale shop_all_shorts">SHOP POWEL SHORT SLEEVE</button>
            </section>
        </aside>
      </div>
      {/*-------------------fifth page----------------------*/}
      <div className="fifth_screen wrapper">
        <section className="text_walking">
          <header className="walking_head">SPORTIF ORIGINAL <br></br> PANT </header>
          <article className="comment_walk_head">Our classNameic nautical cargo pants are built to last and designed to exceed your expectations! Crafted from our stretch twill blend that offers the comfort of cotton, the wrinkle resistance of polyester and the mobility of Lycra®.</article>
          <button className="shop_sportif">SHOP SPORTIF ORIGINAL PANT</button>
        </section>
      </div>
      {/*-------------------last page----------------------*/}
      <div className="last_screen wrapper">
        <section className="stay_in_trend">
          <header className="trend_header">STAY IN TREND WITH SPORTIF</header>
          <div className="add">
            <div className="for_text">
              <img src="/sportif/img/belt.png" alt="belt" className="belt"></img>
              <header>Don't Forget a Belt!</header>
              <button>SHOP ALL BELTS</button>
            </div>
            <div className="for_text">
              <img src="/sportif/img/trunk.png" alt="trunk" className="trunk"></img>
              <header>Swim Trunk Styles on Sale!</header>
              <button>SHOP ALL SWIM TRUNKS</button>
            </div>
            <div className="for_text">
              <img src="/sportif/img/catalog.png" alt="catalog" className="catalog"></img>
              <header>Shop Newest Online Catalog</header>
              <button>SHOP NEWEST CATALOG</button>
            </div>
          </div>
        </section>
        <section className="family_owned">
          <div>
            <img src="/sportif/img/50years.png" alt="50years"></img>
            <header className="family">FAMILY OWNED LEGACY</header>
            <article>We are proud to celebrate over 50 years of excellence as a family owned and operated business.</article>
            <button className="height shop_all_shorts">ABOUT US</button>
          </div>
        </section>
      </div>
    </>
  )
}
