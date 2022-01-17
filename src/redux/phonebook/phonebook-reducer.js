import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./phonebook-actions";

const items = createReducer([], {
  [addContact]: (state, action) => {
    if (
      state
        .map((contact) => contact.name.toLowerCase())
        .includes(action.payload.name.toLowerCase())
    ) {
      alert(`${action.payload.name} is already in contacts`);
      return [...state];
    }
    return [...state, action.payload];
  },
  [deleteContact]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filter = createReducer("", {
  [filterContacts]: (state, action) => action.payload,
});

export default combineReducers({
  items,
  filter,
});