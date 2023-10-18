import { useState,useEffect } from "react";
import Appcontext from "./Appcontext";
import toast from "react-hot-toast";
function Appstate({children})
{
    let [cartItems,setCartItems]=useState([])
    const [wishlistItems, setWishlistItems] = useState([]);
    const [totalCartPrice, setTotalCartPrice] = useState(0);


    let addProductsToCart =(product)=>
    {
        const exisitingProduct = cartItems.find((p) => p.id === product.id);
    if (exisitingProduct) {
      const updatedCart = cartItems.map((p) =>
        p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
      );
      setCartItems(updatedCart);
    } 
    else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
    toast.success("items added to cart")
    }

    let handleQuantityChange = (productId,newQuantity)=>{
        const updatedCart = cartItems.map(product=>
        product.id === productId? {...product,quantity:newQuantity}:product
            )
        setCartItems(updatedCart)
        toast.success("Product Quantity Changed")
      }
    

    let removeProducts =(product)=>{
        let updateitems= cartItems.filter((items)=>
        {
            return items.id !== product.id
        })
        setCartItems(updateitems);
        toast.success("items remove from cart")
    }

    let addProductsToWishlist = (product) => {
      //   setCartItems([...cartItems, product]);
      const exisistingProduct = wishlistItems.find((p) => p.id === product.id);
      if (exisistingProduct) {
        const updatedWishlist = wishlistItems.map((p) =>
          p.id === product.id ? { ...p, quantity: Number(p.quantity) + 1 } : p
        );
        setWishlistItems(updatedWishlist);
        console.log(updatedWishlist)
      } else {
        setWishlistItems([...wishlistItems, { ...product, quantity: 1 }]);
      }
      toast.success("Product Added to WishList");
      
    };
  
    let removeProductsFromWishlist = (product) => {
      let updatedWishlistItems = wishlistItems.filter((item) => {
        return item.id !== product.id;
      });
      setWishlistItems(updatedWishlistItems);
      toast.success("Item Removed From WishList");
    };

    let calculateTotalPrice = (product) => {
      const totalPrice = cartItems.reduce((total, product) => {
        // Assuming each product has a 'price' property
        const productPrice = product.price || 0; // Use 0 as the default price if 'price' is missing
        return total + productPrice * (product.quantity || 1); // Use 1 as the default quantity if 'quantity' is missing
      }, 0);
      return totalPrice;
    };

    const emptyCart = () => {
      setCartItems([]); // Clear the cart by setting it to an empty array
      setTotalCartPrice(0); // Reset the total cart price
    };

    useEffect(() => {
      const totalPrice = calculateTotalPrice();
      setTotalCartPrice(totalPrice);
    }, [cartItems]);

    const price = calculateTotalPrice()
    console.log(price)
    return(
        <Appcontext.Provider value={{
          cartItems,
          wishlistItems,
          addProductsToCart, 
          removeProducts, 
          handleQuantityChange, 
          addProductsToWishlist, 
          removeProductsFromWishlist,
          calculateTotalPrice,
          emptyCart
          }}>
            {children}
        </Appcontext.Provider>
    )
} 

export default Appstate