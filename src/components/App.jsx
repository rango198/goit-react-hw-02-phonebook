import { Component } from 'react';
import initialContacts from './contacts.json';
import { Form } from './Form/Form';
import { ToastContainer, toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import { ContactsList } from './ContactsList/ContactsList';

const notifyOptions = {
  position: 'bottom-left',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
};

export class App extends Component {
  state = {
    contacts: initialContacts,
    filter: '',
  };

  addContacts = newContact => {
    const id = nanoid();
    const contactWithId = { ...newContact, id };

    this.state.contacts.filter(
      contact =>
        contact.name.toLowerCase().trim() ===
          newContact.name.toLowerCase().trim() ||
        contact.number.trim() === newContact.number.trim()
    ).length
      ? toast.error(`${newContact.name}: is already in contacts`, notifyOptions)
      : this.setState(prevState => {
          return {
            contacts: [contactWithId, ...prevState.contacts],
          };
        });
  };

  filterByName = () => {
    const { contacts, filter } = this.state;
    const lowerFilter = filter.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(lowerFilter)
    );
  };

  onDeleteContacts = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  render() {
    const visibleContacts = this.filterByName();
    return (
      <div>
        <h1>Phonebook</h1>
        <Form onSubmit={this.addContacts} />
        <h2>Contacts</h2>
        <ContactsList
          contacts={visibleContacts}
          onDelete={this.onDeleteContacts}
        />
        <ToastContainer />
      </div>
    );
  }
}
