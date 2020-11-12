import React, { useEffect, useState } from "react";
import { NavigationBar } from "../navigation/";
import { useSelector, useDispatch } from "react-redux";
import { getTimeline } from "../../../redux/actions";
import AnotherUser from "./anotherUser.jsx";
import UserMaxSVG from "./svgTimeline.jsx";
import UserMinSVG from "./svgTimeline1.jsx";
import axios from "axios";
import { AiOutlineFileSearch } from "react-icons/ai";
import { StyledSearch, StyledNavButton } from "../../styled/search-page";
import {
  TimelinePage,
  UserStyle,
  MaxSVG,
  UserMaxInfo,
  UserName,
  Card,
  Line,
  Container,
  ContainerCard,
  Email,
  UserMiniStyle,
  MiniInfo,
  Book,
  MinSVG,
  UserMiniName,
  MiniEmail,
  BookImage,
  Image,
} from "./timeline.js";
import { SearchContainer } from "../../styled/search-page";
import { SearchOutlined } from "@ant-design/icons";

const Timeline = () => {
  //states
  const [user, setUser] = useState([]);
  const [input, setInput] = useState();
  const [switchPage, setSwitchPage] = useState(false);
  const [shelf1, setShelf1] = useState([]);
  const [shelf2, setShelf2] = useState([]);
  const [shelf3, setShelf3] = useState([]);
  const switchName = user.map((item) => item.name);
  const switchEmail = user.map((item) => item.email);
  const token = localStorage.getItem("token");

  useEffect(() => {
    return dispatch(getTimeline);
  }, []);

  const dispatch = useDispatch();
  const userChoice = JSON.parse(localStorage.getItem("user"));
  const books = useSelector((state) => state.timelineBooks.books);

  const bckgColors = [
    "#FFC542",
    "#587CFF",
    "#FF007A",
    "rgba(63, 61, 86, 0.58)",
  ];

  const getUsers = (name) => {
    axios
      .get("https://ka-users-api.herokuapp.com/users", {
        headers: { Authorization: token },
      })
      .then((res) => {
        let user1 = res.data.filter((item) => item.user === name);
        setUser(res.data.filter((item) => item.user === name));
        getBookByUser(user1[0].id);
      })
      .catch(({ error }) => console.log(error));
  };

  const getBookByUser = (userId) => {
    axios
      .get(`https://ka-users-api.herokuapp.com/users/${userId}/books`, {
        headers: { Authorization: token },
      })
      .then((res) => {
        setShelf1(res.data.filter((item) => item.shelf === 1));
        setShelf2(res.data.filter((item) => item.shelf === 2));
        setShelf3(res.data.filter((item) => item.shelf === 3));
      })
      .catch(({ error }) => console.log(error));
  };

  return (
    <TimelinePage>
      <NavigationBar>
        <SearchContainer>
          <StyledSearch
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.value.length === 0
                ? setSwitchPage(false)
                : setSwitchPage(true);
            }}
            placeholder="Pesquisar outro usuário"
          />
          <StyledNavButton
            onClick={(e) => {
              input.length === 0 ? setSwitchPage(false) : setSwitchPage(true);
              getUsers(input);
            }}
          >
            <SearchOutlined />
          </StyledNavButton>
        </SearchContainer>
      </NavigationBar>
      <div style={{ height: "107px" }}></div>

      {switchPage !== true ? (
        <>
          <UserStyle>
            <MaxSVG>
              <UserMaxSVG />
            </MaxSVG>

            <UserMaxInfo>
              <UserName>{userChoice.name}</UserName>
              <Email>{userChoice.email}</Email>
            </UserMaxInfo>
          </UserStyle>

          <Line />

          <Container>
            {books.map(({ username, email, image }, index) => (
              <ContainerCard>
                <Card>
                  <UserMiniStyle>
                    <MinSVG>
                      <UserMinSVG />
                    </MinSVG>

                    <MiniInfo key={index}>
                      <UserMiniName>{username}</UserMiniName>
                      <MiniEmail>{email}</MiniEmail>
                    </MiniInfo>
                  </UserMiniStyle>
                  <Book bckg={bckgColors[Math.floor(Math.random() * 4)]}>
                    <BookImage>
                      <Image src={image} alt="book" />
                    </BookImage>
                  </Book>
                </Card>
              </ContainerCard>
            ))}
          </Container>
        </>
      ) : (
        <>
          <UserStyle>
            <MaxSVG>
              <UserMaxSVG />
            </MaxSVG>

            <UserMaxInfo>
              <UserName>{switchName}</UserName>
              <Email>{switchEmail}</Email>
            </UserMaxInfo>
          </UserStyle>

          <Line />
          <AnotherUser shelf={shelf3} shelfTitle="Últimos livros lidos" />
          <AnotherUser shelf={shelf2} shelfTitle="Livros que estou lendo" />
          <AnotherUser shelf={shelf1} shelfTitle="Livros que quero ler" />
        </>
      )}
    </TimelinePage>
  );
};

export default Timeline;
