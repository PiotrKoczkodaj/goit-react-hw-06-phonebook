import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector,useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice/contactsSlice';


export const ContactList = () => {
  let contacts = useSelector(getContacts)
  console.log(contacts)
  const dispatch = useDispatch();

  const handleClick = (e) => {
    
    const contactId = e.target.id;
   
        dispatch(deleteContact(contactId))
  }
  
  return (
    <div>
      {contacts.map(contact => (
          <p key={nanoid()}>
            {contact.name}
            {''}
            {contact.number}
            <button
              onClick={handleClick}
              id={contact.id}
            >
              delete
            </button>
          </p>
      ))
      
      
      /* {contacts
        .filter(contact => contact.name.toLowerCase().includes(filter))
        .map(contact => (
          <p key={nanoid()}>
            {contact.name}
            {''}
            {contact.number}
            <button
              onClick={e => {
            
                setContacts(contacts.filter(contact => contact.name !== e.target.value
                ))
           
                
            
              }}
              value={contact.name}
            >
              delete
            </button>
          </p>
        ))} */}
    </div>
  );
};
