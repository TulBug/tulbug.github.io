import React from 'react';
import Card from './Card';

const CardList= ({robots})=> {
	
	return(
		<div>
		{
		robots.map((user, i) => {
		return (
		<Card 
			key={i} 
			id={robots[i].id} 
			name={robots[i].name} 
			email={robots[i].email}
			username={robots[i].username}
			// street={robots[i].address.street}
						/>
			);
		})
	}
		</div>
		);
	
}

export default CardList;