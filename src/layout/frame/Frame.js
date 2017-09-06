import {Route} from 'react-router-dom';
import Search from 'search/Search.js';
import Nav from 'nav/Nav.js'
import Footer from 'footer/Footer.js'
import TodoList from 'todoList/TodoList.js'
import Celebrity from 'celebrity/Celebrity.js'
import Will from 'will/Will.js'
import Top from 'top/Top.js'
import Now from 'now/Now.js'
export default class Frame extends React.Component{
	constructor(props){
		super(props)

	}

	render(){

		return(
			<div>
				<Route exact  path="/" component={Nav}></Route>
				<div  className="container">
					
					
					<Route exact  path="/" component={Search}></Route>
					<Route exact  path="/" component={Will}></Route>
					
			
					<Route  path="/todoList" component={TodoList}></Route>
					<Route  path="/celebrity" component={Celebrity}></Route>
					
					
					
					<Route exact  path="/top" component={Nav}></Route>
					<Route  exact path="/top" component={Search}></Route>
					<Route exact path="/top" component={Top}></Route>
					
					<Route exact  path="/now" component={Nav}></Route>
					<Route  exact path="/now" component={Search}></Route>
					<Route exact path="/now" component={Now}></Route>
				</div>
				<Route  path="/" component={Footer}></Route>
			</div>	
		)
	}
}
