import styled from 'styled-components';
import {Card, Row, Col} from 'antd';

const StyledCard = styled(Card) `
display: flex;
width: 260px;
padding: 5px;
justify-content: flex-end;
text-align: center;
flex-direction: column;
align-items: center;

    &:hover{
        box-shadow: 1px 1px 10px gray;
    }
`

const StyledImg = styled.img `
width: 200px;
`

const StyledButton = styled.button `
border-radius: 5px;
border: 1px solid  rgb(155, 177, 255);
background-color: #587CFF;
margin-left: 5px;
color: white;

&:hover{
  background-color: #FFC542; 
  border: 1px solid rgb(255, 211, 110);
}
`

const StyledDiv = styled.div `
width: 90vw;
margin: auto;
`

const BookDisplay = styled(StyledDiv) `
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 3%;
    width: 70vw;

        @media screen and (max-width: 800px){
        width: 100vw;
        margin-right: 20%;
        justify-content: center;
        align-content: center;
    }
`

const BookCol = styled(Col) `
    display: flex;
    justify-content: center;   
`

const TitleRow = styled(Row) `
display: flex;
justify-content: flex-start;
padding-top: 30px;
border-bottom: 1px solid rgba(0, 0, 0, 0.3);
    @media screen and (max-width: 800px){
        flex-direction: column;
        paddgin-top: 0;
        justify-content: center;
        h3{
            display: none;
        }
        }
`

const LateralMenu = styled.ul `
padding: 10px;
list-style: none;
height: 100%;
width: 16vw;
border-right: 1px solid rgba(0, 0, 0, 0.3);

    @media screen and (max-width: 800px){
        display: none;
       
    }    
`

const MenuItens = styled.li `
padding: 15px;
font-family: Roboto;
font-style: normal;
font-weight: bold;

    &:hover{
        color: #587CFF;
    }
`

const ResponsiveMenu = styled(Row) `
display: none;

    @media screen and (max-width: 800px){
        display: flex;
        flex-direction: column;
        text-align: center;
        list-style: none;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
    }
`

export {StyledCard, StyledButton, StyledImg, StyledDiv, BookDisplay, TitleRow, LateralMenu, MenuItens, ResponsiveMenu, BookCol}