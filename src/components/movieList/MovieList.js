import {Link} from 'react-router-dom'
require('./style.css')

export default class MovieList extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let {e,summary} = this.props
	
		let {
			id,
			title,
			year,
			images:{large,medium,small},
			rating,
			genres,
			casts
		} = e
		let styles = genres.join(' ')
		let castsName = casts.map((e,i)=>{
			return e.name
		})
		castsName = castsName.join('  ')
		
		var castsPic = casts.map((e,i)=>{
			let {avatars} = e;
			if(avatars==null){return}
			
			return (
				<Link to={{
					pathname:'/celebrity/'+e.id,
					celebrityId:e.id,
					state:{
						celebrityId:e.id
					}
				}} key={i}>
					<img src={avatars.small}  key={i} />
				</Link>
			)
	
		})
		
		

		return(
			<li className="item clear">
				<Link to={{
					pathname:'/todolist/'+id,
					num:id
				}} className="linkStyle">
					<img src={large} className="pic fl"/>
					<div className="fl movieContent">
						<h2 className="movieName">
							电影名称:{title}
						</h2>
		         		<p className="score clear">
		         			<b className="fl">评分:{rating.average}</b>
		         			<b className="fl styles">类型:{styles}</b>
		         		</p>
		         		<p className="text ">
		         			<span>上映时间:{year}</span>
		         		</p>
		         		<p className="text ">
		         			<span>演员:{castsName}</span>
		         		</p>
		         		
					</div>
					<button className="look btn btn-warning">查看详情</button>
					<div className="bg"></div>
				</Link>
				<div className="castPic">
         			{castsPic}
         		</div>
				
			</li>
		)
	}
}
