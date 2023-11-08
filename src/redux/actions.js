import { nanoid } from "@reduxjs/toolkit";

export const addContact = {
    type: 'contact/addContact',
    payload: {
    id: nanoid(),
    name: 'RSDADAD',
    number: '459-12-565'
 }
}

// const setFilter = {
//     type: 'filter/setFilter',
//     payload:
// }