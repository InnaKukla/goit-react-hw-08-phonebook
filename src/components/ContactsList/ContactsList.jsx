import { PhoneContacts } from './ContactsList.styled';
import { deleteContact } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import { visibleContacts } from 'redux/contacts/selectors';

import PropTypes from 'prop-types';

export const ContactsList = () => {
  const visibleContactsList = useSelector(visibleContacts);

  const dispatch = useDispatch();

  return (
      <PhoneContacts>
      {visibleContactsList.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}: {number}
            <button
              onClick={event => {
                dispatch(deleteContact(id));
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </PhoneContacts>
    
  );
};
ContactsList.propTypes = {
  id: PropTypes.string,
  visibleContactsList: PropTypes.array,
  onDeleteHandler: PropTypes.func,
};
