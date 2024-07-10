import styled from 'styled-components';

const RedButtonStyle = styled.button`
  border: 1px solid red;
  background-color: white;
  color: red;

  &:hover {
    border-color: red;
    background-color: #e57978;
  }
`;

export default function RedButton({onClick, children}) {
  return (
    <RedButtonStyle onClick={onClick}>{children}</RedButtonStyle>
  );
}