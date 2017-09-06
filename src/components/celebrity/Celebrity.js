
import CelebritySon from './CelebritySon.js'
export default class Celebrity extends React.Component{
	constructor(props){
		super(props)
		this.state={
			celebrities:[]
		}
	}
	
	componentDidMount(){
		let {location:{celebrityId}} = this.props;
		let {celebrities} = this.state
		$.ajax({
			url:"https://api.douban.com/v2/movie/celebrity/"+celebrityId,
			dataType:"jsonp",
			success:(data)=>{
				this.setState({
					celebrities:celebrities.concat(data)
				})
			}
		})
	}
	
	render(){
		let {celebrities} = this.state;
		
		celebrities = celebrities.map((e,i)=>{
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
			} = e
			
			return (
				<CelebritySon
					{...{
						id,
						aka,
						aka_en,
						name,
						name_en,
						gender,
						born_place,
						avatars,
						works
					}}
					key={i}
				/>
			)
			
		})
		
		
		
		
		return(
			<div className="container">
				{celebrities}
			</div>
		)
	}
}
