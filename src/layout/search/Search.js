import {Link} from 'react-router-dom'
import S from './style.css';
require('style/common.css');
import cfg from 'config/config.json'
import MovieList from 'movieList/MovieList.js'



export default class Search extends React.Component{
	constructor(props){
		super(props)
		this.state={
			inputVal:'',
			movies:[],
			num:0
		}
		this.onSearch = this.onSearch.bind(this)
		this.inputChange = this.inputChange.bind(this)
	}
	inputChange(ev){
		
		this.setState({
			inputVal:ev.target.value
		})
	}

	onSearch(){
		let val = this.refs.textInput.value;
		let {movies,num} = this.state
		$.getJSON("http://api.douban.com/v2/movie/search?callback=?&start="+num+"&count=20&q="+val).done(ret=>{
			
			this.setState({
				movies:ret.subjects
			})
		})
		
	}
	

	

	render(){
		let {inputVal,movies} = this.state;
		let {onSearch,inputChange} = this;
		let lists = null;
		
		if(movies){
			lists = movies.map((e,i,all)=>{
				
				return (
					<MovieList
						{...{
							e
						}}
						key={i}
					/>
				)
			})
		}
		
		
		
		return(
			<div>
				<div className="input-group">
					<input 
						className="form-control" 
						type="text" 
						placeholder="输入你想看的电影"
						value={inputVal}
						onChange={inputChange}
						ref="textInput"	
					/>
					<div className="input-group-btn">
						<Link to="">
							<button 
								className="btn btn-default"
								onClick={onSearch}
							>
								<span className="glyphicon glyphicon-search">&nbsp;搜索</span>
							</button>
						</Link>
					</div>
				</div>
				
				<p className="movieChoice">
					<Link to="/" className="btn btn-primary choice">即将上映</Link>
					<Link to="/top" className="btn btn-success choice">电影排行</Link>
					<Link to="/now" className="btn btn-info choice">正在上映</Link>
					<Link to="" className="btn btn-danger choice " disabled="disabled">即将开放</Link>
				</p>	
				<ul ref="ul">
					{lists}
				</ul>
				
			</div>
		)
	}
	
}
