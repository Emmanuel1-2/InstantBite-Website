import React, {useState} from 'react'
import CustomerFavorite from '../components/CustomerFavorite.jsx'
import Style from './Menu.module.css'
import FoodMenu from '../CustomerFavorite.json'

export default function Menu() {
  const [search, setSearch] = useState('');

  const filteredFoods = FoodMenu.filter(food => food.foodName.toLowerCase().includes(search.toLowerCase()))

  const styles = {
    active: {
      backgroundColor: "#fdad44",
      borderColor: "#ff3c26",
      color: "#000",
    },
    gradient: {
      background: 'linear-gradient(90deg, #ff512f 0%, #dd2476 100% )',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
    }
  }
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center bg-light ${Style['menu-page']}`}>
      {/* <h1>Our <span className={Style['menu-span']}>Menu</span></h1> */}
      <h1 style={styles.gradient}>Our Menu</h1>
      <p className={`${Style['menu-description']} mb-5`}>Explore our full menu and find your new favorite dish</p>

    <input className={`${Style['search-input']} m-auto`} type="text" placeholder='search for food' onChange={(e) => setSearch(e.target.value)}/>
    <div className='tabs d-flex justify-content-center my-4 gap-3'>
        <button className='btn btn-light rounded-3' style={styles.active}>All</button>
        <button className='btn btn-light rounded-3'>Starter</button>
        <button className='btn btn-light rounded-3'>Main Course</button>
        <button className='btn btn-light rounded-3'>Dessert</button>
        <button className='btn btn-light rounded-3'>Beverages</button>
    </div>

    <div className='w-100 d-flex flex-column justify-content-center align-items-center'>
        <div className='container'>
        <div className='row'>
            {filteredFoods.length > 0 ? (filteredFoods.map((item) => (
                <div key={item.id} className="col-md-4 mb-4">
                    <div className={`${Style.mycard} card h-100 position-relative`}>
                        <button className={Style.cardbtnnns}><i style={{color: "#dd6640"}} className="ri-star-fill"></i>Popular</button>
                        <img  src={item.img} className="card-img-top" style={{height: "200px", width: "100%", objectFit: "cover"}} alt={item.foodName} />
                        <div className="card-body">
                            <h5 style={{display: "flex", justifyContent: "space-between"}} className="card-title">{item.foodName} <span style={{color: "darkorange", fontWeight: "bold"}}>&#8358;{item.price.toLocaleString()}</span></h5>
                            <p className="card-text" style={{color: "#555", fontWeight: "500"}}>{item.description}</p>
                            <div>
                                <button onClick={() => addToCart(item)} className={`${Style.btnnns}`}><i className="ri-add-line"></i> &nbsp; Add to Cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            ))) : (
              <p className='d-flex justify-content-center text-muted fs-5'>No food found</p>
            )}
        </div>
        </div>
    </div>
    </div>
  )
}


/*
includes() checks whether something exists inside an array or string.

It returns:
true → if the value is found

false → if it’s not found

Example: 
let fruits = ["apple", "banana", "orange"];

fruits.includes("banana");

The result is true because "banana" is in the fruits array.


How it works internally:

JavaScript checks each element:

apple  → not match
banana → MATCH → stop searching

Returns true.

NOTE:
Important idea 💡

includes() does NOT ask:

“Is apple in the array?”

It asks:

“Is THE VALUE I AM SEARCHING FOR in the array?”

So if you search for "banana":

apple → ignored (not equal)

banana → match → return true


Another example:
fruits.includes("apple");
Now the check becomes:

apple === apple ? ✅ YES → stop immediately
It doesn’t even check the rest anymore.



Syntax for include():
array.includes(valueToFind, startIndex)

Parameters:
valueToFind → what you’re searching for

startIndex (optional) → where to start checking

Example:
[1,2,3,4].includes(2, 2)
The result is false because it starts checking from index 2 (value 3) and does not find 2.


Using includes() with strings:

Here it checks if a substring exists inside text.

let text = "Hello world";

text.includes("world");

➡️ true


###  Important things to know

✔ Case-sensitive:

"Hello".includes("hello") // false
*/