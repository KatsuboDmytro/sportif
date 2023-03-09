import React from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Header } from './components/Header';
import { Cart } from './components/Cart';
import { Home } from './components/Main/Home';
import { Catalog } from './components/Catalog/Catalog';
import { Footer } from './components/Footer';

export const AppContext = React.createContext({});

function App() {

  const [clothesArray, setClothesArray] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [sizeId, setSizeId] = React.useState(0);
	const [colorId, setColorId] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [cartOpened, setCartOpened] = React.useState(false);
  const [productId, setProductId] = React.useState(0);
  const [cartArray, setCartArray] = React.useState([]);
  const [id, setId] = React.useState(1);

  const fetchDataWithLoading = React.useCallback(() => {
    async function fetchData(){
      setIsLoading(true);
      const cartResponse = await axios.get('https://63f4d6fc3f99f5855db8b6f4.mockapi.io/cart');
      const itemsResponse = await axios.get(`https://63ecc7a2be929df00cb20c4f.mockapi.io/clothes?page=${page}&limit=10${sizeId ? `&size=${sizeId}` : ''}${colorId ? `&color=${colorId}` : ''}`);
      setIsLoading(false);
      setCartArray(cartResponse.data);
      setClothesArray(itemsResponse.data);
    }
    fetchData();
  }, [colorId, page, sizeId]);

  React.useEffect(()=>{
    fetchDataWithLoading();
  }, [fetchDataWithLoading]);

  const onAddToCart = (obj) => {
    let newId = id;
    if(cartArray.find((item) => item.id >= id)){
      let maxId = Math.max(...cartArray.map((item) => item.id));
      newId = maxId + 1;
    }
    if(cartArray.length === 0){
      newId = 1;
      setId(newId);
    }
    try{
      if(cartArray.find(item => Number(item.id) === Number(newId))){
        axios.delete(`https://63f4d6fc3f99f5855db8b6f4.mockapi.io/cart/${newId}`);
        setCartArray((prev) => prev.filter((item) =>  Number(item.id) !== Number(newId)));
      }
      else{
        let to_buy = {"id": `${newId}`, ...obj};
        axios.post(`https://63f4d6fc3f99f5855db8b6f4.mockapi.io/cart`, to_buy);
        setCartArray((prev) => [...prev, to_buy]);
        setId(newId + 1);
      }
    }catch(error){
      alert('Не вдалось додати до кошика')
    }
  }


  const onDeleteFromCart = (obj) => {
    let id = obj.id;
    axios.delete(`https://63f4d6fc3f99f5855db8b6f4.mockapi.io/cart/${id}`);
    setCartArray(prev => prev.filter((item) =>  Number(item.id) !== Number(obj.id)));
};
  console.log(cartArray)

  return (
    <AppContext.Provider value={{productId, setProductId, cartArray, setCartArray, setIsLoading, setCartOpened}}>
      <div className="App">
        <>
          <Header setProductId={setProductId} onClickCart={() => setCartOpened(true)}/>
            <Routes>
              <Route path="/sportif" element={<Home 
              clothesArray={clothesArray} isLoading={isLoading}
              onAddToCart={onAddToCart}/>}/>

              <Route path="/sportif/Catalog/Catalog" element={<Catalog  
              clothesArray={clothesArray} isLoading={isLoading}
              sizeId={sizeId} setSizeId={setSizeId}
              colorId={colorId} setColorId={setColorId}
              page={page} setPage={setPage}
              setIsLoading={setIsLoading}
              onAddToCart={onAddToCart}/>}/>

            </Routes>
            <>
            {
              cartOpened &&
              <Cart onClickClose={() => setCartOpened(false)}
              onDeleteFromCart={onDeleteFromCart} items={cartArray}/>
            }
            </>
          <Footer />
        </>
      </div>
    </AppContext.Provider>
  );
}

export default App;
