// Core Imports
import React from "react"
import ReactDOM from "react-dom"

//  Package imports
import { Provider } from "react-redux"
import thunk from "redux-thunk"

// Styles Import
import "./index.css"
import "bootstrap/dist/css/bootstrap.css"

// Custom made imports
import App from "./App"
import { createStore, applyMiddleware, compose } from "redux"
import reducers from "./stores/index"


// Thunk middleware is used to perform async action. So it's must if you're calling apis.
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(
	reducers,
	window.REDUX_DATA,
	composeEnhancers(applyMiddleware(thunk))
)

// Every component that receives the props from the store should be wrapped around Provider
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
)
