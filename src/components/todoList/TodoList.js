import Todo from './Todo.js'

export default class TodoList extends React.Component{
	constructor(props){
		super(props)
		this.state={
			list:[]
		}
	}
	
	componentDidMount(){
		let {location:{num}} = this.props
		let {list} = this.state
//		console.log(num)
		$.ajax({
			url:'http://api.douban.com/v2/movie/subject/'+num,
			dataType:'jsonp',
			success:(data)=>{
				this.setState({
					list:list.concat(data)
				})
			}
		})
		
	}
	
	render(){
		let {list} = this.state;
		
		list = list.map((e,i)=>{
			let {
				rating,
				title,
				original_title,
				summary,
				year,
				images,
				genres,
				countries,
				casts,
				directors
			} = e
			return(
					<Todo {...{
							rating,
							title,
							original_title,
							summary,
							year,
							images,
							genres,
							countries,
							casts,
							directors
						}}
						key={i}
					/>				
			)
		})
		
		return(
			<div className="container">
				{list}
			</div>
		)
		
	}
}
