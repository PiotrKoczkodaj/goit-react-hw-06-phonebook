import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from '@reduxjs/toolkit';

export const contactsInitialState = [];

const contactsSlice = createSlice({
  name: 'contact',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact: {
      reducer(state, action) {
        const index = state.findIndex(
          contact => contact.id === action.payload.id
        );
        state.splice(index, 1);
      },
      prepare(contactId) {
        return {
          payload: {
            id: contactId,
          },
        };
      },
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
