import React from "react";
import Header from "./Components/Header";
import { Routes,Route } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Cateroriespage from "./Pages/Cateroriespage";
import Productdetails from "./Pages/Productdetails";
import Cartpage from "./Pages/Cartpage";
import Wishlist from "./Pages/Wishlist";
import CartComponent from "./Components/CartComponent";
import { useState } from "react";
import WishComponent from "./Components/WishComponent";
import { Toaster } from "react-hot-toast";
function App() {
  const [openCart, setOpenCart] = useState(false)
  const [openWish, setOpenWish] = useState(false)
  return (
    <>
      <Toaster/>
      <CartComponent openCart={openCart} setOpenCart={setOpenCart}/>
      <Header  setOpenWish={setOpenWish} setOpenCart={setOpenCart}/>
      <WishComponent openWish={openWish} setOpenWish={setOpenWish} />
      
      
      <div className="pt-20">
      <Routes>
        <Route index  element={<Homepage/>}></Route>
        <Route path="/category/:id" element={<Cateroriespage/>}></Route>
        <Route path="/productdet/:id" element={<Productdetails/>}></Route>
        <Route path="cart" element={<Cartpage/>}></Route>
        <Route path="/wishlist" element={<Wishlist/>}></Route>
      </Routes>
      </div>
    </>
  );
}

export default App;
