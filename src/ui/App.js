import React, { Component } from "react";
import Header from "./components/Header/Header";
import Background from "./components/Background/Background";
import Toolbar from "./components/Toolbar";
import Notifications from "ui/components/Notifications";
import Button from "./components/Button/Button";
import { withAuth } from "state/auth";
import "../styles/_main.scss";

class App extends Component {
	render() {
		console.log(this.props);
		return (
			<Background>
				<Notifications />
				<Header>
					{this.props.auth.authenticated && (
						<Button onClick={this.props.logout} type="basic">
							Logout
						</Button>
					)}
				</Header>
				{this.props.children}
				<Toolbar style={{ position: "fixed", width: "100%", bottom: 0 }} />
			</Background>
		);
	}
}

export default withAuth(App);
