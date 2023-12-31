export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label>
      Find contacts by name
      <input
        type="text"
        name="filter"
        value={filter}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </label>
  );
};
