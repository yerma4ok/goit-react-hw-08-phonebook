import styled from '@emotion/styled';

export const EditContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

export const AddContactBtn = styled.button`
  min-width: 136px;
  height: 40px;
  border: none;
  border-radius: 5px;
  color: #212121;
  background-color: #f5f4fa;
  font-weight: 700;
  line-height: 1.19;
  letter-spacing: 0.06em;
  cursor: pointer;
  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover,
  :focus {
    background-color: #2196f3;
    color: #ffffff;
    box-shadow: 0px 3px 1px rgb(0 0 0 / 10%), 0px 1px 2px rgb(0 0 0 / 8%),
      0px 2px 2px rgb(0 0 0 / 12%);
  }
`;
