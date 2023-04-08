import PropTypes from 'prop-types';
import { FilterInput } from './FilterContacts.styled';
import { filterContacts } from 'redux/contacts/sliceFilter';
import { useDispatch } from 'react-redux';
import { Container } from 'components/Header/Header.styles';

export const FilterContacts = () => {
  const dispatch = useDispatch();
  return (
    <Container>
      <FilterInput>
        Find contacts by name
        <input
          type="text"
          onChange={e => dispatch(filterContacts(e.target.value))}
        ></input>
      </FilterInput>
    </Container>
  );
};

FilterContacts.propTypes = {
  filterContacts: PropTypes.func,
};
