import React, { Component } from 'react';
import { connect } from 'react-redux';
import ContactForm from './components/ContactForm/ContactForm';
import ContactList from './components/ContactList/ContactList';
import PhoneBook from './components/PhoneBook/PhoneBook';
import Filter from './components/Filter/Filter';
import s from './App.module.css';

import { fetchContacts } from './redux/contacts/contacts-operations';
import { getItems } from './redux/contacts/contacts-selectors';

class App extends Component {
  componentDidMount() {
    this.props.fetchItems();
  }
  render() {
    return (
      <>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm/>
        <h2 className={s.title}>Contacts</h2>
  
        {this.props.items.length > 0 ? (
          <>
            <Filter />
            <ContactList>
              <PhoneBook />
            </ContactList>
          </>
        ) : (
            <span className={s.subTitle}>You have no contacts!</span>
        )}
      </>
    )
  }
};

const mapStateToProps = state => ({
  items: getItems(state),
});

const mapDispatchToProps = dispatch => ({
  fetchItems: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);