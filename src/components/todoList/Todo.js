require('./style.css')

export default class Todo extends React.Component{
	constructor(props){
		super(props)
	}
	
	render(){
		let {
				rating:{max,average,stars,min},
				title,
				original_title,
				summary,
				year,
				images:{large,medium,small},
				genres,
				countries,
				casts,
				directors:[{avatars,name}]
			} = this.props
		let names = casts.map((e,i,all)=>{
			return e.name
		})
		
		let genre = genres.map((e,i,all)=>{
			return e
		})
		let country = countries.map((e,i,all)=>{
			return e
		})
		return(
			<div className="">
				<h2>{title}</h2>
				<hr />
				<div className="clear">
					<img className="fl todoImg" src={large}/>
					<div className="fl todoText">
						<div>
							导演 : {name}
						</div>
						<div>
							主演 : {names}		
						</div>
						<div>
							类型 : {genre}
						</div>
						<div>
							制片国家/地区 : {country}
						</div>
						<div>
							上映时间 : {year}
						</div>
						
					</div>
					
				</div>
				<p className="todoSummary">
					剧情介绍 : {summary}
				</p>
			</div>
		)
	}
}
