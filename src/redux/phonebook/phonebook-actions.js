import * as uuid from "uuid";
import { createAction } from "@reduxjs/toolkit";

export const addContact = createAction("contact/Add", ({ name, number }) => {
  return {
    payload: {
      name,
      number,
      id: uuid.v4(),
    },
  };
});

export const deleteContact = createAction("contact/Delete");
export const filterContacts = createAction("contact/Filter");