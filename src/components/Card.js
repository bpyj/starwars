import React from 'react';

const Card = ({name, height, mass, birthyear}) =>{
	return(
		<div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5' style={{color:'black'}}>
		<img src={`https://robohash.org/${birthyear}?size=200x200`} alt={`${name}`}/>
		<h2 > {name} </h2>
		<p> Height: {height}  </p>
		<p>Mass: {mass} </p>
		<p>Birth year: {birthyear} </p>
		</div>
		)
}


export default Card;
