import MovieList from 'movieList/MovieList.js'

export default class Now extends React.Component{
	constructor(props){
		super(props)
		this.state={
			nowMovies:[],
			num:0
		}
	}
	
	componentDidMount(){
		let {num} = this.state
		$.ajax({
			url:"http://api.douban.com/v2/movie/in_theaters",
			data:{
				start:num,
				count:20
			},
			dataType:"jsonp",
			success:(data)=>{
				
				this.setState({
					nowMovies:data.subjects
				})
			}
		})
	}
	render(){
		let {nowMovies} = this.state
		nowMovies = nowMovies.map((e,i,all)=>{
			
			return(
				<MovieList
					{...{
						e
					}}
					key={i}
				/>
			)
		})
		return(
			<div>
				<ul>
					{nowMovies}
				</ul>
			</div>
		)
	}
	
}
