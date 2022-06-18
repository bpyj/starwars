import React from 'react';
import Card from './Card'; 

const CardList = ({characters}) =>{
	const cardArray = characters.map((character,i) =>{
		return <Card key={i} name={character.name} height={character.height} mass={character.mass} 
		birthyear= {character.birth_year}/>
	})

	return(
		<div>
		{cardArray}
		</div>
		)
}

export default CardList;