import {
	FETCH_COUNTRYLIST_REQUEST,
	FETCH_COUNTRYLIST_SUCCESS,
	FETCH_COUNTRYLIST_FAIL,
} from "../actionTypes/ActionTypes"

const initialState = {
	countryData: [],
	error: "",
	// Ya aarko loading ni hunxa
}


// Change the state as per the action type passed
const countryListReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_COUNTRYLIST_REQUEST:
			return {
				...state,
			}
		case FETCH_COUNTRYLIST_SUCCESS:
			return {
				error: "",
				countryData: action.payload,
			}
		case FETCH_COUNTRYLIST_FAIL:
			return {
				countryData: [],
				error: action.payload,
			}

		default:
			return {
				// By default always return the data which is null
				countryData: state.countryData,
			}
	}
}

export default countryListReducer
