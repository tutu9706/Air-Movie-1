import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom';
import Frame from 'frame/Frame.js'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

require('style/common.css')

ReactDOM.render(
    <Router>
    	<Route path="/" component={Frame}></Route>
    </Router>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept();
}
