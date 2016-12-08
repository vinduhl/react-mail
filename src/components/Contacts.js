import React from "react";
import { Link } from "react-router";
import { getContacts } from "../services/contactsService";
import Contact from "./Contact";

export default class Contacts extends React.Component {
	constructor( props ) {
		super( props );

		this.state = {
			contacts: []
		}
	}

	componentWillMount() {
		this.setState( { contacts: getContacts() });
	}

	render() {
		const styles = this.getStyles();

		const contacts = this.state.contacts.map( (contact, index) => (
			<li key={ index }>
				<Link to={ `/contacts/${ contact._id }` }>
					{ contact.name }
				</Link>
			</li>
		));

		return (
			<div>
				<h1>Contacts</h1>
				<div style={ styles.contactsWrapper }>
					<div style={ styles.contactsList }>
						<ul>
						{ contacts }
						</ul>
					</div>
					<div style={ styles.contactsDetail }>
						{ this.props.children }
					</div>
				</div>
			</div>
		);
	}

	getStyles() {
		return {
			contactsWrapper: {
				display: "flex"
				, flexWrap: "wrap"
				, justifyContent: "space-around"
			},
			constactsList: {
				float: "left"
				, width: "50%"
			},
			contactsDetail: {
				float: "right"
				, width: "50%"
			}
		}
	}
}
