import axios from "axios"

import {
	FETCH_COUNTRYLIST_REQUEST,
	FETCH_COUNTRYLIST_SUCCESS,
	FETCH_COUNTRYLIST_FAIL,
} from "../actionTypes/ActionTypes"

// Performs api call to fetch countries list.
// Note: Dispatch action to reducer directly by using actionType, instead always make method for it.
export const fetchCountry = () => {
	return (dispatch) => {
		dispatch(fetchCountryListRequest());

		axios
			.get("https://api.first.org/data/v1/countries")
			.then((res) => {
				const countryData = res.data.data;
				dispatch(fetchCountryListSuccess(countryData));
			})
			.catch((error) => {
				dispatch(fetchCountryListFail(error))
			})
	}
}

export const fetchCountryListRequest = () => {
	return {
		type: FETCH_COUNTRYLIST_REQUEST,
	}
}

export const fetchCountryListSuccess = (countryData) => {
	return {
		type: FETCH_COUNTRYLIST_SUCCESS,
		payload: countryData,
	}
}

export const fetchCountryListFail = (error) => {
	return {
		type: FETCH_COUNTRYLIST_FAIL,
		payload: error.message,
	}
}
