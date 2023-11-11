import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsInitialState = [];

const contactsSlice = createSlice({
    name: 'contact',
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                
   state.push(action.payload)
            }, prepare(name, number) {
                return {
                    payload: {
                        id:nanoid(),
                        name,
                        number,
                    }
                }
            },  
        },
        deleteContact: {
            reducer(state, action){
                const index = state.findIndex(contact => contact.id === action.payload.id);
               state.splice(index,1)
            }, prepare(contactId){
                return {
                    payload: {
                        id:contactId
                    }
                }
            }
            
        }
    }
})


// const contactsSlice = createSlice({
//   name: 'contact',
//   initialState: contactsInitialState,
//   reducers: {
//     addContact:{
//  reducer(state, action) {
//         console.log(state)
        
//       },
//     },prepare(text) {
//         return {
//           payload: {
//             text,
//             id: nanoid(),
//             completed: false,
//           },
//         };
//       },
//       deleteContact(state, action) {
//           console.log(action)
//           state = contactsInitialState;
//         //  state.filter(contact=>console.log(action))
//     //       let newContacts = state.filter(
//     //    contact => contact.id !== action.payload.id.id
//     //     );
//     //  return newContacts;
//     },
//   },
// });

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
