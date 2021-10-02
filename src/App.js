import './App.css';
import Button from 'react-bootstrap/Button';
import Home from './Components/Home/Home';
import Employees from './Components/Employees/Employees';
import NotFound from './Components/NotFound/NotFound';
import SingleEmployee from './Components/SingleEmployee/SingleEmployee';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

function App() {
	return (
		<div className="App">
			<Router>
				<div>
					<Navbar />
					{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/home">
							<Home />
						</Route>
						<Route exact path="/employees">
							<Employees />
						</Route>
						<Route exact path="/employees/:id">
							<SingleEmployee />
						</Route>
						<Route path="*">
							<NotFound />
						</Route>
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
