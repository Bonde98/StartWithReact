// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import Banner from "./banner"
import logo from  "../assets/logo.png"
import Cart from "./cart"
import ShoppingList from "./ShoppingList"
// import CareScale from "./CareScale"
import Footer from "./Footer"
import React, { useState } from "react"
import '../styles/Layout.css'
import { userState, useEffect } from 'react'
// import Categories from "./Categories"
function App() {
  const savedCart = localStorage.getItem('cart')
  const [cart, updateCart] = useState(savedCart ? JSON.parse(savedCart) : [])
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])
  return <div>
            <Banner>
              <img src={logo} alt='La maison jungle' className='hj-logo' />
              <h1 className='hj-title'>La maison jungle</h1>
            </Banner>
            {/* < Categories /> */}
            <div className='hj-layout-inner'>
                < Cart cart={cart} updateCart={updateCart} />
                < ShoppingList cart={cart} updateCart={updateCart} />
            </div>
              < Footer />
     
           
        </div>
}



export default App 

