import React, {component} from 'react';
import {robots} from './robots';
import Card from './Card';


export default class Form extends React.Component { 
	state= {
	name: "",
	email: "",
	username: "",
	id:""
};
onSubmit=e =>
{
	e.preventDefault();
	this.setState(
{
	[e.target.name]:e.target.value
		
});
};
render () {
return (
	<div>
	<form className='tc'>
	<input type='text' id='New Friend' name='name' value={this.state.value} onChange={e=>this.setState({name:e.target.value})} className='tc bg-light-blue pa3 ma2 shadow-5'/>
	<input type='text' id='Friend Mail' name='email' value={this.state.value} onChange={e=>this.setState({email:e.target.value})} className='tc bg-light-blue pa3 ma2 shadow-5'/>
	<input type='text' id='User Name' name='username' value={this.state.value} onChange={e=>this.setState({username:e.target.value})} className='tc bg-light-blue pa3 ma2 shadow-5'/>
	<input type='text' id='id' name='id' value={this.state.value} onChange={e=>this.setState({id:e.target.value})} className='tc bg-light-blue pa3 ma2 shadow-5'/>
	<br/>
	<button id='helloFriend' 
	className='bg-blue pa3 ma2 shadow-5'  
	onClick= {e=>this.onSubmit(e)}
	>Add a new friend </button>
	{console.log(this.state)}
	</form>
	<Card id={this.state.id} name={this.state.name} username={this.state.username} email={this.state.email} />
	</div>
	);
}
}
