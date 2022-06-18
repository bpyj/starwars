import React from 'react';

const SearchBox = ({searchChange}) =>{
	return(
		<div className = 'pa3'>
		<input onChange={searchChange} placeholder="search here..."></input>
		</div>
		)
}

export default SearchBox;