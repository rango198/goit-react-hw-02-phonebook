import { BtnList, List } from './ContactsList.styled';
import { AiOutlineUserDelete } from 'react-icons/ai';
export const ContactsList = ({ contacts, onDelete }) => {
  return (
    <List>
      {contacts.map(({ name, number, id }) => {
        return (
          <li key={id}>
            <span>{name}:</span>
            <span>{number}</span>
            <BtnList type="button" onClick={() => onDelete(id)}>
              <AiOutlineUserDelete />
              Delete
            </BtnList>
          </li>
        );
      })}
    </List>
  );
};
