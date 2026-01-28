import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header.jsx'
import HeroSection from './components/HeroSection.jsx'
import ExploreMenu from './components/ExploreMenu.jsx'
import CustomerFavorite from './components/CustomerFavorite.jsx'
import CustomersSay from './components/CustomersSay.jsx'
import GetInTouch from './components/GetInTouch.jsx'
import InstantBiteFooter from './components/InstantBiteFooter.jsx'
import FoodMenu from './components/FoodMenu.jsx'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import OrderPage from './Pages/OrderPage.jsx'
import Login from './Pages/Login.jsx'
import About from './Pages/About.jsx'
import Register from './components/Register.jsx'
import CartSidebar from './components/CartSidebar.jsx'
import Checkout from './Pages/Checkout.jsx'
import Menu from './Pages/Menu.jsx'

function App() {
  const [count, setCount] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState(null);

  function addToCart(item) {
    setCartItems(prev => {
      const existing = prev.find(i => i.id === item.id);

      if (existing) {
        return prev.map(i =>
          i.id === item.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [...prev, { ...item, quantity: 1 }];
    });

    setToast(`${item.foodName} added to cart`);
    setTimeout(() => setToast(null), 2500);
  }

  /*
  if (existing) {
  // increase quantity
} else {
  // add new item
}

NOTE: find() does NOT return a boolean.

It returns:
✅ The actual element (object) if found
❌ undefined if not found

What existing Really Is :

Case 1: Item is found
existing = { id: 3, name: "Burger", quantity: 2 }
This is an object.
Objects are truthy in JavaScript.

Case 2: Item is NOT found
existing = undefined
undefined is falsy.


So Why Does if(existing) Work?

Because JavaScript automatically converts values to boolean in conditions.
This is called type coercion.

IMPORTANT NOTE: if nothing is found, existing becomes UNDEFINED, not an empty string.

the map() in the if statement runs once per item:
What map() actually does:
1. map goes through each item
2. Applies the function
3. Returns a NEW array
4. Original array stays unchanged
  */

  function removeItem(id) {
    setCartItems(prev => prev.filter(i => i.id !== id));
  }

  function increment(id) {
    setCartItems(prev =>
      prev.map(i =>
        i.id === id ? { ...i, quantity: i.quantity + 1 } : i
      )
    );
  }

  function decrement(id) {
    setCartItems(prev =>
      prev
        .map(i =>
          i.id === id ? { ...i, quantity: i.quantity - 1 } : i
        )
        .filter(i => i.quantity > 0)
    );
  }

  // Order matters: later keys overwrite earlier ones in cases like this { ...i, quantity: i.quantity - 1 }.

  // JS knows item.quantity - 1 refers to the old object, because item is a variable in scope.

  // { key: value } → key is always the property name.
  // item.quantity is a value, not a property name.

  /*
  NOTE:
  map returns items in the same order as the original prev array

  Only one object is replaced (the one being incremented/decremented)

  All other items are returned unchanged (: item in the ternary)
  */

  return (
    <>
    {/* <Header onCartClick={() => setIsCartOpen(true)} cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} /> */}
       {!isCartOpen && (
        <Header onCartClick={() => setIsCartOpen(true)} cartCount={cartItems.reduce((a, b) => a + b.quantity, 0)} />
      )}

      {/* <HeroSection></HeroSection>
      <ExploreMenu></ExploreMenu>
      <CustomerFavorite></CustomerFavorite>
      <CustomersSay></CustomersSay>
      <GetInTouch></GetInTouch>
      <InstantBiteFooter></InstantBiteFooter>
      <FoodMenu></FoodMenu> */}
      <Routes>
       <Route path="/" element={<Home addToCart={addToCart} />} />
       <Route path="/order" element={<OrderPage />} />
       <Route path="/login" element={<Login />} />
       <Route path="/about" element={<About />} />
       <Route path="/register" element={<Register />} />
       <Route path="/checkout" element={<Checkout cartItems={cartItems}/>} />
       <Route path='/menu' element={<Menu />} />
       <Route path="/contact" element={<GetInTouch />} />
      </Routes>
      
      {isCartOpen && (
        <CartSidebar cartItems={cartItems} onClose={() => setIsCartOpen(false)} increment={increment} decrement={decrement} removeItem={removeItem} />
      )}

      {toast && <div className="toast-popup">{toast}</div>}
      <InstantBiteFooter></InstantBiteFooter>
    </>
  );
}

export default App


/*
array.find(callback)
Loops over each element in the array

Returns the first element that matches the condition

Returns undefined if none match


falsy values : 
false
0
-0
0n
""        // empty string
null
undefined
NaN

Everything else is truthy.
Strings are truthy but an empty string is falsy.
"0"            // truthy
"false"        // truthy


function Header({ onCartClick }) {

 onCartClick is the PROP NAME,
 but the variable you get is the FUNCTION VALUE assigned to that prop.
*/

// Short-circuit conditional rendering, also called logical AND rendering
// A && B
// If A is falsy → return A
// If A is truthy → return B
// 0 && <p>Hello</p>  - 0 gets returned not <p>Hello</p>

/*
How filter Works

filter goes through each element and:

✅ Keeps the element if the condition returns true
❌ Removes the element if the condition returns false

filter returns a NEW array
*/

// poetic-pavlova-972dee.netlify.app     befit link

/*
NOTE: Props are just variable references

You are passing the SAME function
Only the variable name is changing


Changing prop names across components is NOT best practice because:

❌ Makes code harder to follow
❌ Causes confusion
❌ Breaks consistency
❌ Makes debugging harder


This is called an object literal using ES6 object property shorthand.
const value = { cart, addToCart, IncreaseQty }

Full old version 
const value = {
  cart: cart,
  addToCart: addToCart,
  IncreaseQty: IncreaseQty
};

But because the key name and variable name are the same, JavaScript allows this shorter syntax:

const value = { cart, addToCart, IncreaseQty };

THEN TO USE THIS VALUE, WE DESTRUCTURE

const { cart, addToCart, IncreaseQty } = useContext(CartContext);

the above is equivalent to 

const contextValue = useContext(CartContext);

const cart = contextValue.cart;
const addToCart = contextValue.addToCart;
const IncreaseQty = contextValue.IncreaseQty;

But destructuring is shorter and cleaner.




#######
function CartProvider({ children }) {
  return (
    <CartContext.Provider value={{ cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

writing cartItems, addToCart inside the curly braces of the value attribute is not destructuring. It is creating an object using object shorthand syntax.
It is equivalent to writing :
value={{
  cartItems: cartItems,
  addToCart: addToCart
}}
This is ES6 object property shorthand.
*/