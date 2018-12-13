import React from 'react';

const Card = ({name, id, email, username, street}) => {

	return (
<div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-5' >
<img src={`https://robohash.org/set_set4/${id}?200x200?`} alt='Some Text'/>
<h2>{name}</h2>
<p>{email}</p>
<p>{username}</p>
<p>{street}</p>
 </div>
		);
}



export default Card;