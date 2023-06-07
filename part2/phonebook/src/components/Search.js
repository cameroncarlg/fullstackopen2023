const Search = ({ search, handleSearchChange }) => (
  <p>
    Search: <input value={search} onChange={handleSearchChange}></input>
  </p>
);

export default Search;
