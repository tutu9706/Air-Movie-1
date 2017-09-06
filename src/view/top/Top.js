import MovieList from 'movieList/MovieList.js'

export default class Top extends React.Component{
	constructor(props){
		super(props)
		this.state={
			topMovies:[],
			num:0
		}
	}
	
	componentDidMount(){
		let {num} = this.state
		$.ajax({
			url:"http://api.douban.com/v2/movie/top250",
			data:{
				start:num,
				count:10
			},
			dataType:"jsonp",
			success:(data)=>{
				this.setState({
					topMovies:data.subjects
				})
			}
		})
	}
	render(){
		let {topMovies} = this.state
		topMovies = topMovies.map((e,i,all)=>{
			
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
					{topMovies}
				</ul>
			</div>
		)
	}
	
}
