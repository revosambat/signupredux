import { combineReducers } from "redux"

import countryListReducer from "./CountriesListStore"

// Caution!!: after connecting to store is accessed by this name.
export default combineReducers({
	countryListReducer,
})
