import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import PersonForm from './components/PersonForm';
import Search from './components/Search';
import Notification from './components/Notification';
import personServices from './services/personServices';
import './index.css';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    personServices.getAll().then((initialPeople) => setPersons(initialPeople));
    console.log('List of all people: ', persons);
  }, []);

  const handleNameChange = (event) => {
    //console.log(event.target.value);
    setNewName(event.target.value);
  };

  const handleNumberChange = (event) => {
    //console.log(event.target.value);
    setNewNumber(event.target.value);
  };

  const handleSearchChange = (event) => {
    //console.log(event.target.value);
    setSearch(event.target.value);
  };

  const handleDelete = (name, id) => {
    const deleteWindow = window.confirm(`Delete ${name}?`);
    if (deleteWindow) {
      personServices.removePerson(id).then(
        personServices
          .getAll()
          .then((returnedPeople) => {
            setPersons(returnedPeople);
          })
          .catch((error) => {
            setErrorMessage(`${name} was already removed from the phonebook`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          })
      );
      setErrorMessage(`${name} was removed from the phonebook`);
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const listOfNames = persons.map((person) => person.name);
    //console.log(listOfNames);
    if (listOfNames.includes(newName)) {
      setNewName('');
      const updateNameWindow = window.confirm(
        `${newName} is already added to the phonebook, replace the old number with a new one?`
      );
      if (updateNameWindow) {
        const testIndex = persons.findIndex(
          (person) => person.name === newName
        );
        console.log(persons[testIndex].id);
        return personServices
          .updatePerson(newName, newNumber, persons[testIndex].id)
          .then((response) => {
            console.log(response);
          });
      }
    }
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    personServices.createPerson(nameObj).then((response) => {
      setPersons(persons.concat(response));
    });
    setErrorMessage(`${newName} was added to the phonebook`);
    setTimeout(() => {
      setErrorMessage(null);
    }, 5000);
    //setPersons(persons.concat(nameObj));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <Header />
      <Notification message={errorMessage} />
      <Search search={search} handleSearchChange={handleSearchChange} />
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleNameSubmit={handleNameSubmit}
      />
      <Filter persons={persons} search={search} handleDelete={handleDelete} />
    </div>
  );
};

export default App;
