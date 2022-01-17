import ContactList from "./ContactsList";
import Filter from "./Filter";
import ContactForm from "./ContactForm";
import styles from "./App.module.css";

function App() {

  return (
    <div className={styles.app}>
      <h1>Phonebook</h1>
      <ContactForm/>
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
}

export default App;