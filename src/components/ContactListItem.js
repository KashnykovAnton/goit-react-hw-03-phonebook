import { Component } from 'react';

class ContactListItem extends Component {
  render() {
    const { id, name, number, onDeleteContact } = this.props;
    return (
      <li>
        <span>{name}:</span>
        <span>{number}</span>
        <button type="button" id={id} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    );
  }
}

export default ContactListItem;
