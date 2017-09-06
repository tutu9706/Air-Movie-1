import {Link} from 'react-router-dom'
require('./style.css')
export default class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<nav className="footer navbar-inverse ">
				<div>
					<Link to="/">
						关注我们 
					</Link>	
					<Link to="/">
						加入我们 
					</Link>	
					<Link to="/">
						TUTU电影
					</Link>		
				
				</div>
				
			</nav>
		)
	}
}
