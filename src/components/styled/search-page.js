import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNavigationBar = styled.header`
  background: linear-gradient(45deg, #ff0000, #ff007a);
  height: 107px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px grey;

  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  left: 0;

  div {
    margin: 3rem;
  }

  @media (min-width: 320px) and (max-width: 375px) {
    /* height: 120px; */
    /* width: 375px; */
    width: 100%;
    display: flex;
    /* flex-direction: column; */
    flex-wrap: wrap;

    div {
      margin: 0.25rem auto;
    }
  }

  @media (min-width: 376px) {
    /* height: 120px; */
    /* width: 375px; */
    display: flex;
    flex-direction: row;

    div {
      margin: 0.25rem auto;
    }
  }
`;

const SearchedCard = styled.div`
  height: 450px;
  display: flex;
  margin: 1rem;

  li {
    list-style-type: none;
  }

  @media (min-width: 320px) and (max-width: 500px) {
    width: 370px;
    flex-direction: row;
    margin: 1rem;
    flex-wrap: wrap;
  }
`;

const Image = styled.img`
  width: 261px;
  height: 276px;
`;

const StyledLink = styled(Link)`
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 23px;
  color: #ffffff;
  padding: 2rem;

  &:hover {
    color: #ffc542;
  }

  @media screen and (max-width: 375px) {
    font-size: 18px;
    padding: 0.5rem;
  }

  @media (min-width: 376px) and (max-width: 812px) {
    padding: 0.5rem;
  }
`;

const StyledSearch = styled.input`
  text-align: center;
  font-size: 17px;
  border: none;

  @media (min-width: 320px) and (max-width: 375px) {
    width: 150px;
    height: 47px;
    border-radius: 30px 0px 0px 30px;
  }

  @media (min-width: 376px) {
    width: 300px;
    height: 46px;
    border-radius: 30px 0px 0px 30px;
  }
`;

const StyledNavButton = styled.button`
  background-color: rgba(0, 0, 0, 0%);
  font-size: 20px;
  @media (max-width: 375px) {
    width: 50px;
    height: 47px;
    border: none;
    border-radius: 0px 30px 30px 0px;
  }

  @media (min-width: 376px) {
    width: 50px;
    height: 46px;
    border: none;
    border-radius: 0px 30px 30px 0px;
  }
`;

const BooksContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 1rem auto;
  justify-content: center;
  align-items: center;
  width: 650px;

  @media (min-width: 375px) and (max-width: 500px) {
    width: 370px;
  }
`;

const BookCard = styled.div`
  width: 300px;
  /* height: 765px; */
  border-radius: 5px;
  border: 1px solid grey;
  box-shadow: 0px 0px 2px grey;

  img {
    width: 261px;
    height: 276px;
    border-radius: 5px 5px 0px 0px;
  }

  div {
    width: 261px;
    height: 89px;
    border: 1px solid grey;
    border-radius: 0px 0px 5px 5px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-sizing: content-box;
  }
`;

const DescriptionDiv = styled.div`
  /* border: 1px solid; */
  margin: 0rem auto;
  background-color: #fff;

  h1 {
    font-weight: bold;
  }
`;

const NavButton = styled.div`
  /* border: 1px solid grey; */
  margin: 2.5rem;
  width: 340px;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
`;

const ActionButton = styled.button`
  border: none;
  background-color: #fff;
  color: black;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    color: #587cff;
  }
`;

const FixedBooksContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 2%;
  padding: 1rem;
`;

const Banner = styled.div`
  height: 405px;
  background-color: #c4c4c4;
`;

const Logo = styled.img`
  width: 190px;
  height: 75px;
`;

const LogoutButton = styled.button`
  margin-right: 10rem;
  border: none;
  width: 35px;
  height: 35px;
  background-color: white;
  color: black;
  border-radius: 50px;
  font-size: 20px;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 70%);

  &:hover {
    color: #ffc542;
  }

  @media screen and (max-width: 375px) {
    font-size: 50%;
    padding: 0.5rem;
  }

  @media (min-width: 376px) and (max-width: 812px) {
    padding: 0.5rem;
  }
`;

const Spacer = styled.div`
  margin: 2rem;
  margin-left: 5.8rem;
  border-bottom: 1px solid grey;

  h2 {
    font-weight: bold;
    font-size: 33px;
  }

  @media (width: 400px) {
    border: none;
    margin: 2rem auto;

    h2 {
      font-weight: 300;
      font-size: 25px;
    }
  }
`;

const SearchContainer = styled.div`
  background-color: #fff;
  border-radius: 30px;
`;

export {
  StyledNavigationBar,
  SearchedCard,
  Image,
  StyledLink,
  StyledSearch,
  StyledNavButton,
  BooksContainer,
  BookCard,
  DescriptionDiv,
  NavButton,
  ActionButton,
  FixedBooksContainer,
  Banner,
  Logo,
  LogoutButton,
  Spacer,
  SearchContainer,
};
