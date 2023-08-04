import { useDispatch, useSelector } from 'react-redux';
import { contactSelect } from './redux/selector';
import { addContacts, deleteContacts } from './redux/contact';
import AddContact from './components/AddContact/AddContact';
import Contacts from './components/Contacts/Contacts';
import Filter from 'components/Filter/Filter';
import './app.css';
import css from './components/Contacts/contacts.module.css';

const App = () => {
  const contacts = useSelector(state => state.contactsState.contacts);
  const filter = useSelector(state => state.filterState.filter);
  const filterContacts = useSelector(contactSelect);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <AddContact addContacts={addContacts} />
      <h1 className={css.title}>Find contacts by name</h1>
      <Filter valueFilter={filter} />
      <h1 className="main_title">Contacts</h1>
      {filter === '' ? (
        <Contacts
          contacts={contacts}
          onDeleteContact={contactId => dispatch(deleteContacts(contactId))}
        />
      ) : (
        <Contacts contacts={filterContacts} />
      )}
    </div>
  );
};

export default App;
