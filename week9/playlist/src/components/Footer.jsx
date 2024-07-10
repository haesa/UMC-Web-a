import styled from 'styled-components';

const FooterContainer = styled.footer`
  padding: 10px 0;
  font-size: 24px;
  font-weight: bold;
  color: white;
  background-color: #635dfe;
  text-align: center;
`

export default function Footer() {
  return (
    <FooterContainer>University MakeUs Challenge</FooterContainer>
  );
}