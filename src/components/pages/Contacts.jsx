import { ContactsList } from 'components/ContactsList';
import { FilterContacts } from 'components/FilterContacts';
import { FormContacts } from 'components/FormContacts';
import { Container } from 'components/Header/Header.styles';
// import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operations';

export const Contacts = () => {
  const dispatch = useDispatch();
  // useEffect(() => dispatch(fetchContacts()), [dispatch]);
  dispatch(fetchContacts());
  return (
    <Container>
      <div
        style={{
          height: '100%',
          display: 'block',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 35,
          color: '#010101',
          marginLeft: 20,
        }}
      >
        <h1>Phonebook</h1>
        <FormContacts />
        <h2>Contacts</h2>
        <FilterContacts />
        <ContactsList />
      </div>
    </Container>
  );
};
