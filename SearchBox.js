import React from 'react';

const SearchBox = ({searchfield, searchChange}) => {
return(
	<div className='tc'>
	<input 
	className='pa2 tc bg-lightest-blue b--green ba' 
	type='search' 
	placeholder='Find your friend...' 
	onChange={searchChange}/>
	</div>
);
}
export default SearchBox;