import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform:capitalize; 
  font-size:1.4rem;
  background:transparent;
color:var(--mainWhite);
border-radius:5px;
&:hover {
    background:var(--lightblue);
    color:var(--mainBlue);
}
`;