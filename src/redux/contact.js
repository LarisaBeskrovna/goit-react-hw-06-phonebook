const { createSlice } = require('@reduxjs/toolkit');

const initialContactsState = {
  contacts: [],
};

const contactsSlice = createSlice({
  name: 'contactsState',
  initialState: initialContactsState,
  reducers: {
    addContacts: (state, action) => {
      state.contacts = [...state.contacts, action.payload];
    },
    deleteContacts: (state, action) => {
      const idToDelete = action.payload;
      state.contacts = state.contacts.filter(
        contact => contact.id !== idToDelete
      );
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;
