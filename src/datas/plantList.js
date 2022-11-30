import monstera from '../assets/monstera.jpg'
import lyrata from '../assets/lyrata.jpg'
import pothos from '../assets/pothos.jpg'
import succulent from '../assets/succulent.jpg'
import olivier from '../assets/olivier.jpg'
import basil from '../assets/basil.jpg'
import mint from '../assets/mint.jpg'
import calathea from '../assets/calathea.jpg'
import cactus from '../assets/cactus.jpg'

export const plantList = [
	{
		name: 'monstera',
		category: 'classique',
		id: '1ed',
		water: 3 ,
		light: 2 ,
		cover: monstera,
		price: 15

	},
	{
		name: 'ficus lyrata',
		category: 'classique',
		id: '2ab' ,
		water: 2 ,
		light: 3 ,
		cover: lyrata,
		price: 16

	},
	{
		name: 'pothos argenté',
		category: 'classique',
		id: '3sd',
		water: 1 ,
		light: 2 ,
		cover: pothos,
		price: 9
	},
	{
		name: 'yucca',
		category: 'classique',
		id: '4kk',
		water: 3 ,
		light: 3 ,
		cover: calathea,
		price: 20

	},
	{
		name: 'olivier',
		category: 'extérieur',
		id: '5pl',
		water: 3 ,
		light: 1 ,
		cover: olivier,
		price: 25


	},
	{
		name: 'géranium',
		category: 'extérieur',
		id: '6uo',
		water: 2 ,
		light: 2 ,
		cover: cactus,
		price: 6

	},
	{
		name: 'basilique',
		category: 'extérieur',
		id: '7ie',
		water: 1 ,
		light: 2 ,
		cover: basil,
		price: 8

	},
	{
		name: 'aloe',
		category: 'plante grasse',
		id: '8fp',
		water: 1 ,
		light: 1 ,
		cover: succulent,
		price: 11

	},
	{
		name: 'succulente',
		category: 'plante grasse',
		id: '9vn',
		// isBestSale: true,
		water: 3 ,
		light: 2 ,
		cover: mint,
		price: 4

	}
]