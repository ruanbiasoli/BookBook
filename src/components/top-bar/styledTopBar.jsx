import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledTopBar = styled.header `
  background-image: linear-gradient(90deg, rgba(255, 0, 0, 1), rgba(255, 0, 122, 1));
  height: 12vh;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  
  }
`
const StyledLinks = styled(Link) `
  color: #ffffff;
  font-weight: bold;
  font-size: 1rem;
    &:hover{
    color: #FFC542;
    }

`

const StyledTopMenu = styled.div `
    display:flex;
    align-items: center;
    justify-content: space-between;
    width: 30vw;
    color: white;
    font-size: 1.5rem;
    margin-right: 2%;
    
      @media screen and (max-width: 800px){
      width: 100vw;
      justify-content: space-around;
      }
`

export {StyledTopBar, StyledLinks, StyledTopMenu}