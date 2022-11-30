import { useState } from 'react'
import '../styles/Footer.css'

function Footer(value) {
	const [inputValue, setInputValue] = useState('Cette plante requiert peu/modérement/beaucoup de lumière/d')
    function handleImput(e) {
        setInputValue(e.target.value)
    }
    function hadleBlur() {
        if (!inputValue.includes('@')) {
            alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
        }
    }
	return (
		<footer className='hj-footer'>
			<div className='hj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='hj-footer-elem'>Laissez-nous votre mail :</div>
            <input 
            placeholder='Entrez votre mail'
            onChange={handleImput}
            value={inputValue}
            onBlur={hadleBlur}
            />
		</footer>
	)
}

export default Footer