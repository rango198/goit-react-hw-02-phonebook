import styled from '@emotion/styled';

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15px;
`;
export const Input = styled.input`
  cursor: pointer;
  border-radius: 5px;
  padding: 5px;
  border: none;
`;

export const LabelInt = styled.label`
  display: flex;
  flex-direction: column;
`;

export const BtnPhone = styled.button`
  cursor: pointer;
  border: none;
  background-color: #e0b43d;
  border-radius: 7px;
  color: white;
  padding: 5px 10px;

  transition: all 0.2s ease-in-out;
  box-shadow: rgb(0 0 0 / 24%) 10px 10px 5px 0px;

  :hover,
  :focus {
    background-color: #c7e03d;
    color: #2a2a2a;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
  }
`;
