import React from "react"
import SignUpPage from "./SignUpPage"
import Nav from "./Nav"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from "./Home"
function App() {
	return (
		<div className="App">
			<Router>
				<Nav />
				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route path="/joinus">
						<SignUpPage />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
