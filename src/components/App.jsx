import { ContactForm } from './ContactForm/ContactForm';
import { nanoid } from 'nanoid';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';



import { useDispatch } from "react-redux";
import { addContact } from '../redux/actions';


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
  

  const handleSubmit = e => {

    e.preventDefault();
    const form = e.currentTarget;
    const nameValue = form.elements[0].value;
    const number = form.elements[1].value;
    dispatch(addContact(nameValue,number))
    
  };

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
      <ContactForm handleSubmit={handleSubmit} />
      <h2>Contacts</h2>
      <Filter />
      <ContactList/>
    </div>
  );
};