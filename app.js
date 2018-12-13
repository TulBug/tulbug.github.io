import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from'./scroll';
import {robots} from'./robots';
import AddFriend from './addFriend';
import './index.css';
import './app.css';

class App extends Component {

constructor()
{

	super()
	this.state=
{
	robots:robots,
	searchField:''
}
}
componentDidMount()
{
	// fetch('https://jsonplaceholder.typicode.com/users').then(response=>response.json()).then(users=>this.setState({robots:users}));

}
onSubmit=fields=>
{this.setState({fields})} 

onSearchChange=(event)=>{
	this.setState({searchField:event.target.value})
}
render()
{	

	const filteredRobots = this.state.robots.filter(robots=>{
		return robots.name.toLowerCase().includes(this.state.searchField.toLowerCase())

	});
	return(
	<div>
	<h1 className='tc bg-light-green pa3 ma2 shadow-5 f2'>Cat Friends</h1>
	<SearchBox searchChange={this.onSearchChange}/>
	<AddFriend onSubmit={fields=>this.onSubmit(fields)}/>
	<Scroll>
	<CardList robots={filteredRobots}/>
	</Scroll>
	</div>
);
}
}

export default App;