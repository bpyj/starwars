import React from 'react';
import {Component} from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';

const urlList = [];
for(let i=1; i<10; i++){
	urlList.push(`https://swapi.dev/api/people/?page=${i}`);
}

class App extends Component {
	constructor(){
		super();
		this.state = {
			searchtext: '',
			characters: [],
		}
	}

componentDidMount(){
Promise.all(urlList.map(url=>{						
	return fetch(url).then(resp=>resp.json())		
}))
.then(pages => pages.map(page => {
	return page.results.map(person =>{
		return this.setState({characters: [...this.state.characters, person]})
	})
}))
}

onSearchChange = (e) => {
	this.setState({searchtext: e.target.value});
}

	render(){
		const {characters, searchtext} = this.state;

		const filteredRobots = characters.filter(character =>{
			return character.name.toLowerCase().includes(searchtext.toLowerCase());
		})

		return !characters.length ? <div style={{margin:'0', position:'absolute', top:'45%', left:'45%'}}>
		<h1>Loading</h1></div>:
		(			
			<div className = 'tc'>
			<h1 >STAR "Robo" WARS</h1>
			<SearchBox searchChange = {this.onSearchChange}/> 
			<Scroll>
			<CardList characters = {filteredRobots}/>
			</Scroll>
			</div>
		   
		)
	}
		
}

export default App;