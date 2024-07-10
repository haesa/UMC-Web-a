import styled from 'styled-components';

const BlueButtonStyle = styled.button`
  border: 1px solid #635dfe;
  background-color: white;
  color: #635dfe;
  
  &:hover {
    border-color: #635dfe;
    background-color: #aba7fe;
  }
`;

export default function BlueButton({onClick, children}) {
  return (
    <BlueButtonStyle onClick={onClick}>{children}</BlueButtonStyle>
  );
}