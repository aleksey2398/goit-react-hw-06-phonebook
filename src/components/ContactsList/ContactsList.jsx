import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import Contact from "../Contact";
import { getFilteredContacts } from "../../redux/phonebook/phonebook-selectors";
import styles from "./ContactsList.module.css";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const list = contacts?.map(({ id, name, number }) => (
    <Contact key={id} name={name} number={number} id={id} />
  ));
  return contacts.length > 0 && <ul className={styles.contactsList}>{list}</ul>;
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;