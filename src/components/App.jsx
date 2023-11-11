import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { addContact } from 'redux/contactsSlice/contactsSlice';
import { useDispatch } from "react-redux";



export const App = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (localStorage.getItem('Persons') === null) {
  //     localStorage.setItem('Persons', JSON.stringify(contacts));
  //   } else {
  //     setContacts(JSON.parse(localStorage.getItem('Persons')))
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // },[]);
  
//  useEffect(() => {
//       localStorage.setItem('Persons', JSON.stringify(contacts));
//   },[contacts]);
  

 
  // const filterUsers = e => {
  //   setFilter((filter = e.target.value.toLowerCase()));
  // };
  
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
        flexDirection: 'column',
      }}
    >
      <h2>Phonebook</h2>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};