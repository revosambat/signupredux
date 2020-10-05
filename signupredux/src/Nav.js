import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class Nav extends Component {
	render() {
		return (
			<div>
				<nav class="navbar navbar-expand-lg navbar-light bg-light">
					<Link  to ="/" class="navbar-brand">Navbar</Link>
					<button
						class="navbar-toggler"
						type="button"
						data-toggle="collapse"
						data-target="#navbarSupportedContent"
						aria-controls="navbarSupportedContent"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span class="navbar-toggler-icon"></span>
					</button>

					<div class="collapse navbar-collapse" id="navbarSupportedContent">
						<ul class="navbar-nav mr-auto">
							<li class="nav-item active">
								<Link class="nav-link" to="/">
									Home <span class="sr-only">(current)</span>
								</Link>
							</li>

							<li class="nav-item">
								<Link class="nav-link" to="/joinus" tabindex="-1">
									Join us
								</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		)
	}
}
