import { Input, LabelInt } from 'components/Form/Form.styled';
import { IoIosSearch } from 'react-icons/io';

export const Filter = ({ filter, onChangeFilter }) => {
  return (
    <LabelInt>
      <div>
        <IoIosSearch />
        Find contacts by name
      </div>
      <Input
        type="text"
        name="filter"
        value={filter}
        placeholder="search"
        onChange={onChangeFilter}
      />
    </LabelInt>
  );
};
