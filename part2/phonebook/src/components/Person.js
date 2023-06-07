const Person = ({ person, handleDelete }) => {
  //console.log(person.name, person.number, person.id);
  return (
    <li>
      {person.name} {person.number}{' '}
      <button onClick={() => handleDelete(person.name, person.id)}>
        delete
      </button>
    </li>
  );
};

export default Person;
