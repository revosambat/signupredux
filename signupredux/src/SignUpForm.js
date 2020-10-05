import React, { Component } from "react"
import axios from "axios"

import { fetchCountry } from "./actionTypes/CountriesListAction"
import { connect } from "react-redux"

class SignUpForm extends Component {

	// This is done to pass handler to the children component
	constructor(props) {
		super(props)
		this.state = {
			username: "",
			email: "",
			password: "",
			re_password: "",
			country: "",
		}
		this.handleSubmitForm = this.handleSubmitForm.bind(this)
		this.onInputChange = this.onInputChange.bind(this)
	}

	componentDidMount() {
		this.props.fetchCountry()
	}

	onInputChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
	}

	handleSubmitForm = (event) => {
		event.preventDefault()
		console.log(this.state)
		console.log(typeof this.state.countryList)
		axios({ method: "POST", url: "api/users", data: this.state })
			.then((response) => console.log(response))
			.catch((error) => console.log(error))
	}

	render() {
		return (
			<div className="jumbotron">
				<form onSubmit={this.handleSubmitForm}>
					<h1>Join our Community!</h1>

					<div className="form-group">
						<label className="control-label">UserName</label>
						<input
							type="text"
							name="username"
							className="form-control"
							value={this.state.username}
							onChange={this.onInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="control-label">Email</label>
						<input
							type="email"
							name="email"
							className="form-control"
							value={this.state.email}
							onChange={this.onInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="control-label">Password</label>
						<input
							type="password"
							name="password"
							className="form-control"
							value={this.state.password}
							onChange={this.onInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="control-label">Retype-Password</label>
						<input
							type="password"
							name="re_password"
							className="form-control"
							value={this.state.re_password}
							onChange={this.onInputChange}
						/>
					</div>

					<div className="form-group">
						<label className="control-label">Country</label>
						<select
							name="country"
							onChange={this.onInputChange}
							value={this.state.country}
							className="form-control"
						>
							{Object.keys(this.props.countryData).map((data) => (
								<option value={data}>
									{this.props.countryData[data].country}
								</option>
							))}
						</select>
					</div>

					<div className="form-group">
						<button className="btn btn-primary btn-large" type="submit">
							Sign Up
						</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapStateToProps = (storeState) => ({
	// referenceName: store.storeName.stateName.
	// In the props accessed by referenceName
	countryData: storeState.countryListReducer.countryData,
	error: storeState.countryListReducer.error,
})

const mapDispatchToProps = (dispatch) => {
	return {
		fetchCountry: () => dispatch(fetchCountry()),

		// If action requires some parameter:
		// actionName: (parameter) => dispatch(actionMethod(parameter))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm)
