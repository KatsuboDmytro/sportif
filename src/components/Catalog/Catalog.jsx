import './catalog/index.css';
import './catalog/style0-320.css';
import './catalog/style320-375.css';
import './catalog/style375-425.css';
import './catalog/style425-768.css';
import './catalog/style768-1024.css';
import './catalog/style1024-1140.css';
import './catalog/style1140-1300.css';

import './product/index.css';
import './product/style0-320.css';
import './product/style320-375.css';
import './product/style375-425.css';
import './product/style425-768.css';
import './product/style768-1024.css';
import './product/style1024-1140.css';
import './product/style1140-1300.css';

import React from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';
import ContentLoader from "react-content-loader";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Scroller } from '../Scroller';

export const Catalog = ({onAddToCart, clothesArray, isLoading, setIsLoading, sizeId, setSizeId, colorId, setColorId, page, setPage}) => {
	const notify = () => toast("Додано до списку покупок!");
	const [searchValue, setSearchValue] = React.useState('');
    const [product, setProduct] = React.useState([]);
	let {productId, setProductId} = React.useContext(AppContext);

	const sizes = [
		{ "size": 30 },{ "size": 32 },{ "size": 34 },
		{ "size": 36 },{ "size": 38 },{ "size": 40 },
		{ "size": 42 },{ "size": 44 },{ "size": 46 },
	];
	const colors = [
		{ "color": "black" },{ "color": "brown" },{ "color": "blue" },
		{ "color": "green" },{ "color": "grey" },{ "color": "orange" },
		{ "color": "white" },
	];
	const list = [
		{"li" : "Constructed from our 7.5 oz. Original Stretch Twill fabric"},
		{"li" : "Exclusive 7-pocket design includes two deep front pockets, two front cargo pockets with button-through flap closure, and two zippered security back pockets"},
		{"li" : "Bonus pocket inside the right front pocket is perfect for carrying a small cell phone or pocket knife"},
		{"li" : "Non-roll stretch waistband"},
		{"li" : "Sturdy tunnel belt loops"},
		{"li" : "Durable double fabric seat"},
		{"li" : "Gusset crotch"},
		{"li" : "Double-stitched seams throughout"},
		{"li" : "Bar tack stitching reinforces areas of stress to guarantee years of service"},
		{"li" : "4 inch inseam (sizes 30-40) or 5.5 inch inseam (sizes 42-46)"},
		{"li" : "Wrinkle resistant 62 polyester/35 cotton/3 spandex blend is travel friendly and ready to wear straight from the dryer"},
		{"li" : "Machine wash"},
		{"li" : "Imported"},
	];
	
	const onChangeInput = (event) => {
		setSearchValue(event.target.value);
	};
	const changes = (item) => {
		onAddToCart(item);
		productId = 0;
		notify();
	};
	const fetchDataWithLoading = React.useCallback(() => {
		setIsLoading(true);
        fetch(`https://63ecc7a2be929df00cb20c4f.mockapi.io/clothes${ productId === 0 ? `?item=0` : `?item=${productId}`}`)
        .then((res) => res.json()).then((json) => setProduct(json))
        .catch((err) => console.warn(err)).finally(() => setIsLoading(false));
	}, [setIsLoading, productId]);
    React.useEffect(() => {
		fetchDataWithLoading();
    }, [fetchDataWithLoading]);

	const filteredArray = clothesArray.filter((item) =>
		item.name.toLowerCase().includes(searchValue.toLowerCase())
	);

	const ghostCard = [];
    for(let i = 0; i < 4; i++) ghostCard.push({});

	return (
		productId === 0
		?
		<>
			{/*-------------------find info----------------------*/}
			<section id='find' className="find wrapper">
				<nav className="pages">
					<div className="home" onClick={() => setProductId(0)}>
						<Link to="/sportif">
							<img src="/sportif/img/home.png" alt="home"></img>
							<span>HOME</span>
						</Link>
					</div>
					<div className="shorts_find" onClick={() => setProductId(0)}>
						<img src="/sportif/img/rightArrow.svg" alt="rightArrow"></img>
						<span>SHORTS</span>
					</div>
				</nav>
				<form>
					<input onChange={onChangeInput} value={searchValue} type="text" placeholder="SEARCH" id="main_search"></input>
					{searchValue && <img src="/sportif/img/close.svg" alt="clear" onClick={()=>setSearchValue('')} width={20} height={20} className="close img"></img>}
				</form>
			</section>
			{/*-------------------buy shorts info----------------------*/}
			<section className="buy_shorts wrapper">
				<aside className="catalog_settings">
					<div className="catalog_block">{/*----size----*/}
						<header>
							<div className="catalog_title">SIZE</div>
							<img src="/sportif/img/straightArrow.svg" alt="straightArrow"></img>
						</header>
						<div className="catalog_grid">
							{
								sizes.map((size) => (
									<div onClick={() => setSizeId(size.size)} className={sizeId === size.size ? 'catalog_box active' : 'catalog_box'} key={size.size}>{size.size}</div>
								))
							}
						</div>
					</div>
					<div className="catalog_block">{/*----color----*/}
						<header>
							<div className="catalog_title">COLOR</div>
							<img src="/sportif/img/straightArrow.svg" alt="straightArrow"></img>
						</header>
						<div className="catalog_grid">
							{
								colors.map((item) => (
									<div onClick={() => setColorId(item.color)} className={colorId === item.color ? `catalog_box active ${item.color}` : `catalog_box ${item.color}`} key={item.color}></div>
								))
							}
						</div>
					</div>
					<div className="catalog_block">{/*----check----*/}
						<header>
							<div className="catalog_title">SIZE</div>
							<img src="/sportif/img/straightArrow.svg" alt="straightArrow"></img>
						</header>
						<div className="checkbox">
							<input type="checkbox"></input>
							<input type="checkbox"></input>
							<input type="checkbox"></input>
							<input type="checkbox"></input>
							<input type="checkbox"></input>
							<input type="checkbox"></input>
							<input type="checkbox"></input>
						</div>
					</div>
					<div className="catalog_block">{/*----inseam----*/}
						<header>
							<div className="catalog_title">INSEAM</div>
							<img src="/sportif/img/downArrow.svg" alt="downArrow"></img>
						</header>
					</div>
					<div className="catalog_block">{/*----fabrick----*/}
						<header>
							<div className="catalog_title">SUSTAINABLE FABRIC</div>
							<img src="/sportif/img/downArrow.svg" alt="downArrow"></img>
						</header>
					</div>
					<div className="catalog_block">{/*----collections----*/}
						<header>
							<div className="catalog_title">COLLECTIONS</div>
							<img src="/sportif/img/downArrow.svg" alt="downArrow"></img>
						</header>
						<div className="size_grid"></div>
					</div>
				</aside>

				<section className="choose_shorts">
				{
					(isLoading  ? ghostCard : filteredArray)
					
					.map((item) => (
						<>
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
									<div className="short" key={item.id}>
											<img onClick={() => setProductId(item.item)} src={item.img} alt="sportifOriginalShort" className=" short_name main_picture"></img>
											<header onClick={() => setProductId(item.item)}>{item.name}</header>
										<section onClick={() => setProductId(item.item)} className="stars">
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
										<div onClick={() => setProductId(item.item)} className="original low_short">As low as &nbsp;<span>${item.price}</span></div>
										<img onClick={() => setProductId(item.item)} src={item.material} alt="material" className="mat"></img><br></br>
										<button className="cart" onClick={() => {changes(item)}}>
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
						</>
					))
				}
				</section>
			</section>
			{/*-------------------pagination----------------------*/}
			<section className="pagination">
				{
				[...Array(6)].map((_,index) => 
				<button key={index+1} onClick={() => setPage(index+1)} className={page === index+1 ? 'active' : ''}>{index+1}</button>)
				}
			</section>
			{/*-------------------scroller----------------------*/}
			<Scroller />
		</>
		:
		(
			isLoading
			?
			<h2>Завантаження...</h2>
			:
			<>
				{/*-------------------find info----------------------*/}
				<section id='find' className="find wrapper">
					<nav className="pages">
						<div className="home">
							<Link to="/sportif">
								<img src="/sportif/img/home.png" alt="home"></img>
								<span>HOME</span>
							</Link>
						</div>
						<div className="shorts" onClick={() => setProductId(0)}>
								<img src="/sportif/img/rightArrow.svg" alt="rightArrow"></img>
								<span>SHORTS</span>
						</div>
						<div className="thing_to_buy">
							<img src="/sportif/img/rightArrow.svg" alt="rightArrow"></img>
							<span>Sportif's Original Short</span>
						</div>
					</nav>
				</section>
				{/*-------------------item info----------------------*/}
				<section className="item wrapper">
					{
						product.map((item) => (
							<>
							<img src={item.img} alt="bigShorts" className="big_original_short" height={400}></img>
							<aside className="information">
								<header className="indo">{item.name}<sub> ITEM # {item.item}</sub></header><br/>
								<div className="feedback">
									<section className="stars">
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
									<span>93 REVIEWS</span>
								</div>
								<div className="low">As low as<br></br><span>${item.price}</span></div>
								<div className="color_block">
									<span>COLOR:</span>
									<div className="color_grid"><img src={item.material} alt="colorGrid"></img></div>
								</div>
								<div className="size_block">
									<span>SIZE:</span>
									<div className="size_grid">
										<div className="grid">{item.size}</div>
									</div>
								</div>
								<div className="buttons">
									<button className="add_bag" onClick={() => changes(item)}>
										<svg width="27" height="29" viewBox="0 0 27 29" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.1804 20.1228L20.9026 5.89192C20.8677 5.50329 20.542 5.2056 20.1519 5.2056H17.5166V4.01709C17.5166 1.80207 15.7147 0 13.4998 0C11.2849 0 9.48316 1.80207 9.48316 4.01709V5.2056H6.84614C6.456 5.2056 6.13028 5.50329 6.09541 5.89192L4.81252 20.1788C4.79363 20.3897 4.86418 20.5986 5.00699 20.7548C5.1498 20.911 5.35171 20.9999 5.56326 20.9999H21.4348C21.4354 20.9999 21.4362 20.9999 21.4368 20.9999C21.8532 20.9999 22.1906 20.6624 22.1906 20.2461C22.1905 20.2042 22.1871 20.1629 22.1804 20.1228ZM10.9907 4.01709C10.9907 2.6333 12.1163 1.5075 13.4999 1.5075C14.8835 1.5075 16.0092 2.6333 16.0092 4.01709V5.2056H10.9907V4.01709ZM6.38776 19.4925L7.53527 6.71311H9.48316V8.06101C9.48316 8.47728 9.82054 8.81476 10.2369 8.81476C10.6533 8.81476 10.9907 8.47728 10.9907 8.06101V6.71311H16.0092V8.06101C16.0092 8.47728 16.3466 8.81476 16.763 8.81476C17.1794 8.81476 17.5167 8.47728 17.5167 8.06101V6.71311H19.4628L20.6103 19.4925H6.38776Z"/>
										</svg>
										ADD TO BAG
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
									<button className="add_list">
										<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M22.0312 1.75781C20.4033 1.75781 18.9108 2.27367 17.5953 3.29109C16.3341 4.2665 15.4944 5.50887 15 6.41227C14.5056 5.50881 13.6659 4.2665 12.4047 3.29109C11.0892 2.27367 9.59666 1.75781 7.96875 1.75781C3.42586 1.75781 0 5.47365 0 10.4012C0 15.7247 4.274 19.3669 10.7443 24.8808C11.843 25.8172 13.0884 26.8785 14.3829 28.0105C14.5535 28.1599 14.7727 28.2422 15 28.2422C15.2273 28.2422 15.4465 28.1599 15.6171 28.0106C16.9117 26.8784 18.157 25.8171 19.2564 24.8802C25.726 19.3669 30 15.7247 30 10.4012C30 5.47365 26.5741 1.75781 22.0312 1.75781Z"/>
										</svg>                        
										ADD TO WISHLIST
									</button>
								</div>
								<div className="social_media">
									<div className="media"><img src="/sportif/img/facebook.svg" alt="facebook"></img></div>
									<div className="media"><img src="/sportif/img/twitter.svg" alt="twitter"></img></div>
									<div className="media"><img src="/sportif/img/pinterest.svg" alt="pinterest"></img></div>
									<div className="media"><img src="/sportif/img/link.svg" alt="link"></img></div>
								</div>
								<section className="worry">
									<header>- Worry Free Shopping -</header>
									<div className="line"></div>
									<div className="flex_box">
										<div className="shipping">
											<img src="/sportif/img/delivery.svg" alt="delivery"></img>
											<span>FREE PRIORITY SHIPPING ON <br></br> ORDERS $99+*</span>
										</div>
										<div className="returns">
											<img src="/sportif/img/exchange.svg" alt="exchange"></img>
											<span>FREE RETURNS & EXCHANGES*</span>
										</div>
									</div>
								</section>
							</aside>
							</>
						))
					}
				</section>
				{/*-------------------details----------------------*/}
				<section className="details wrapper">
					<header>DETAILS</header>
					<div className="text">
						<p>With its classNameic design, practical features and unequaled comfort - it's no wonder Sportif 'Original' stretch cargo shorts are practically the uniform on yachts worldwide! A customer favorite for over 50 years, they're called the world's best boating shorts. Featuring a 4 inch inseam for sizes 30-40 and 5.5 inch inseam for sizes 42-46. </p>
						<ul>
							{
								list.map((item) => (
									<li key={item.li}>{item.li}</li>
								))
							}
							
						</ul>
					</div>
				</section>
				{/*-------------------scroller----------------------*/}
				<Scroller />
			</>
		)
  	)
}
