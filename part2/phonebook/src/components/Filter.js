import Person from './Person';

const Filter = ({ persons, search, handleDelete }) => {
  const filteredPerson = persons.filter((person) => {
    return person.name.toLowerCase().includes(search.toLowerCase());
  });

  //console.log('Filtered people: ', filteredPerson);

  return (
    <div>
      <h2>Numbers</h2>
      <ul>
        {filteredPerson.map((person) => {
          return (
            <div key={person.id}>
              <Person person={person} handleDelete={handleDelete} />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Filter;
