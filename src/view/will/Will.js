import MovieList from 'movieList/MovieList.js'

export default class Will extends React.Component{
	constructor(props){
		super(props)
		this.state={
			willMovies:[],
			num:0
		}
	}
	
	componentDidMount(){
		let {num} = this.state
		$.ajax({
			url:"http://api.douban.com/v2/movie/coming_soon",
			data:{
				start:num,
				count:20
			},
			dataType:"jsonp",
			success:(data)=>{
				this.setState({
					willMovies:data.subjects
				})
			}
		})
	}
	render(){
		let {willMovies} = this.state
		willMovies = willMovies.map((e,i,all)=>{
			
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
					{willMovies}
				</ul>
			</div>
		)
	}
	
}
