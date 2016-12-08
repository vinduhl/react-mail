import React from "react";
import { getContactInfo } from "../services/contactsService";

export default class Contact extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			name: "",
			company: "",
			email: "",
			phone: ""
		};
	}

	getContact(contactId) {
		const contact = getContactInfo(contactId);
		if(contact) {
			this.setState( {
				name: contact.name,
				company: contact.company,
				email: contact.email,
				phone: contact.phone
			});
		}
	}

	componentWillMount() {
		this.getContact.call(this, this.props.params.contactId);
	}

	componentWillUpdate(nextProps, nextState) {
		if(nextProps.params.contactId != this.props.params.contactId) {
			this.getContact.call(this, nextProps.params.contactId);
		}
	}

	render() {
		const styles = this.getStyles();

		return (
			<div style={ styles.contactWrapper }>
				<div style={ styles.name }>{ this.state.name }</div>
				<div>Company: { this.state.company }</div>
				<div>Email: { this.state.email }</div>
				<div>Phone #: { this.state.phone }</div>
			</div>
		);
	}

	getStyles() {
		return {
			contactWrapper: {
				margin: 10
			}
			, name: {
				fontWeight: "bold"
			}
		}
	}
}
