const PersonForm = ({
  newName,
  newNumber,
  handleNameChange,
  handleNumberChange,
  handleNameSubmit,
}) => {
  return (
    <>
      <h2>Add a new</h2>
      <form onSubmit={handleNameSubmit}>
        <div>
          Name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          Number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </>
  );
};

export default PersonForm;
