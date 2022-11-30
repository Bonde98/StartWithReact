import CareScale from "./CareScale"
import '../styles/PlantItem.css'

// function handleClick(plantName) {
//     alert(`Vous voulez acheter 1 ${plantName} ? Très bon choix 🌱✨`)
// }
function PlantItem({ id, cover, name, water, light }) {
	return (
		<li key={id} className='hj-plant-item'>
			<img className='hj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

export default PlantItem