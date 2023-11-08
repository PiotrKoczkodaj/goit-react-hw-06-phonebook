import { nanoid } from 'nanoid';
import { getContacts } from 'redux/selectors';
import { useSelector } from 'react-redux';


export const ContactList = () => {

 const contacts = useSelector(getContacts);
  console.log(contacts)
  return (
    <div>
      {contacts.map(contact => (
          <p key={nanoid()}>
            {contact.name}
            {''}
            {contact.number}
            <button
              
              value={contact.name}
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
