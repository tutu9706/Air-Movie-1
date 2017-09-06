require('./style.css')

export default class CelebritySon extends React.Component{
	constructor(props){
		super(props)
	}
	render(){
		let {
			id,
			aka,
			aka_en,
			name,
			name_en,
			gender,
			born_place,
			avatars,
			works
		} = this.props
		aka = aka.join(' ')
		
		works = works.map((e,i,all)=>{
			let {
				roles,
				subject:{
					rating,
					genres,
					title,
					casts,
					directors,
					year,
					images
				}
			} = e
			let cast = casts.map((e,i,all)=>{
				return e.name
			})
			cast = cast.join(' ')
			directors = directors.map((e,i,all)=>{
				return e.name
			})
			
			return (
				<div
					className="more clear"
					key={i}
				>
					<img src={images.large} className="fl img" />
					<div className="fl text">
						<p>电影名称 : {title}</p>
						<p>导演 : {directors}</p>
						<p>演员 : {cast}</p>
						<p>上映时间 : {year}</p>
						<p>类型 : {genres}</p>
						<p>职业 : {roles}</p>
						<p>评分 : {rating.average}</p>
					</div>
				</div>
			)
		})
		
		return(
			<div >
				<div className="clear">
					<h3 className="fl">{name}</h3>
					<h3 className="fl enName">{name_en?name_en:""}</h3>
				</div>
				<hr/>
				<div className="clear">
					<img src={avatars.medium} className="celebrityImg fl"/>
					<div className="fl content">
						<p>性别 : {gender}</p>
						<p>出生地 : {born_place}</p>
						<p>家庭成员 : {aka}</p>
						<p>职业 : {"演员"}</p>
						
					</div>
				</div>
				<hr/>
				<div>
					<h3>参演电影</h3>
					{works}
				</div>
			</div>
		)
	}
}
