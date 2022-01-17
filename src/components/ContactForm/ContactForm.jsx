import React, { useState } from "react";
import PropTypes from "prop-types";
import styles from "./ContactForm.module.css";
import InputField from "../InputField/InputField";
import inputAttr from "../InputField/InputAttr";
import { addContact } from "../../redux/phonebook/phonebook-actions";
import { useDispatch } from "react-redux";

function ContactForm() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, number }));
    reset();
  };
  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <InputField
        {...inputAttr.name}
        value={name}
        onChange={handleNameChange}
      />
      <InputField
        {...inputAttr.number}
        value={number}
        onChange={handleNumberChange}
      />
      <button type="submit">Add contact</button>
    </form>
  );
}

ContactForm.propTypes = {
  name: PropTypes.string,
  number: PropTypes.number,
};

export default ContactForm;