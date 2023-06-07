import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import Header from './components/Header';
import PersonForm from './components/PersonForm';
import Search from './components/Search';
import personServices from './services/personServices';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [search, setSearch] = useState('');

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
    window.alert(`Delete ${name}?`);
    personServices.removePerson(id).then((response) => {
      console.log(response);
    });
  };

  const handleNameSubmit = (event) => {
    event.preventDefault();
    const listOfNames = persons.map((person) => person.name);
    console.log(listOfNames);
    if (listOfNames.includes(newName)) {
      setNewName('');
      return alert(newName + ' is already added to phonebook');
    }
    console.log(newName);
    const nameObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };

    personServices.createPerson(nameObj).then((response) => {
      setPersons(persons.concat(response));
    });

    //setPersons(persons.concat(nameObj));
    setNewName('');
    setNewNumber('');
  };

  return (
    <div>
      <Header />
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
