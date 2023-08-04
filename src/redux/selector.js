import { createSelector } from '@reduxjs/toolkit';

const selectContacts = state => state.contactsState.contacts;
const selectFilter = state => state.filterState.filter;

export const contactSelect = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (!filter) {
      return contacts;
    }
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
