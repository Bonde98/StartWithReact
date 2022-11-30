import '../styles/cart.css'
// importer userState avec:
import { useState, useEffect } from 'react'

function Cart({ cart, updateCart ,activeCategory}) {
	const [isOpen, setIsOpen] = useState(true)
	const total = cart.reduce(
		(acc, plantType) => acc + plantType.amount * plantType.price,
		0 
		)
	useEffect(() => {
			// alerte à chaque une nouvelle element est ajouter
			alert(`J'aurai ${total}€ à payer 💸`)
			// document.title = `lmj: ${total}€ à payer 💸`
		}, [total])
	
	return isOpen ? (
		<div className='hj-cart'>
			<button
				className='hj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			{cart.length > 0 ? (
				<div>
					<h2>Panier</h2>
					<ul>
						{cart.map(({ name, price, amount }, index) => (
							<div key={`${name}-${index}`}>
								{name} {price}€ x {amount}
							</div>
						))}
					</ul>
					<h3>Total :{total}€</h3>
					<button onClick={() => updateCart([])}>Vider le panier</button>
				</div>
			) : (
				<div>Votre panier est vide</div>
			)}
		</div>
	) : (
		<div className='hj-cart-closed'>
			<button
				className='hj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

// function Cart({cart, updateCart}) {
// const monsteraPrice = 8
// // on créer cart et une fonction pou mètre à jour ce state (updatecart) et lui attribue une valeur initial qui sera 0
// // const [cart, updateCart] = useState(0)
// const [isOpen, setIsOpen] = useState(true)
// const total = cart.reduce(
//     (acc, plantType) => acc + plantType.amount * plantType.price,
//     0
// )
// // const ivyPrice = 10
// // const flowerPrice = 15
// return isOpen ? (<div className="hj-cart">
//     <button 
//         className='hj-cart-toggle-button'
//         onClick={() => setIsOpen(false)}>
//       Fermer
//     </button>
//     <h2>Panier</h2>
    
//     <div>Monstera : {monsteraPrice}€</div>
// {/* ajouter un bouton dans mon panier qui permet d'ajouter un monstera  */}
//     {/* <button className='lmj-cart-toggle-button' onClick={() => updateCart(cart + 1)}>
//         Ajouter
//     </button> */}
//         {/* <li>Lierre : {ivyPrice}€</li>
//         <li>Fleurs : {flowerPrice}€</li> */}
//         <h3>Total: {monsteraPrice * cart}</h3>
//         <button onClick={() => updateCart(0)}>Vider le panier</button>
//         {/* Total : {monsteraPrice + ivyPrice + flowerPrice }€ */}
//         </div>) : (
//             <div className='lmj-cart-closed'>
//             <button className='lmj-cart-toggle-button'
//                      onClick={() => setIsOpen(true)}>
//                 Ouvrir le Panier
//             </button>
//             </div>
//         )
// }

// ReactDOM.render(<div><Banner /><Cart /></div>, document.getElementById('root'))

export default Cart