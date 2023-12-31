import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
  height: 200px;
`;

export const BtnList = styled.button`
  cursor: pointer;
  border: none;
  border-radius: 10px;
  background-color: #e0b43d;
  color: white;
  margin-left: 10px;

  transition: all 0.2s ease-in-out;
  box-shadow: rgb(0 0 0 / 24%) 10px 10px 5px 0px;

  :hover,
  :focus {
    background-color: #c7e03d;
    color: #2a2a2a;
    box-shadow: -2px -2px 5px #fff, 2px 2px 5px #8ba793;
  }
`;
