import styled from "styled-components";

export const TimelinePage = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  width: 100%;
  height: 107px;
  left: 0px;
  top: 0px;
  background: linear-gradient(90deg, #ff0000 0%, #ff007a 100%);
  box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, 0.25);

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

///////////////// ** div de info do USUARIO  ** ////////////////
export const UserStyle = styled.div`
  padding: 0.5rem;
  display: flex;
  margin-top: 0.3%;

  @media screen and (max-width: 768px) {
    text-align: center;
    flex-direction: column;
  }
`;

export const MaxSVG = styled.div`
  margin-left: 17%;
  @media screen and (max-width: 425px) {
    margin-left: 9%;
  }
`;

export const UserInfo = styled.div`
  margin-top: 1.5%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 425px) {
    margin-top: 6%;
  }
`;
export const UserMaxInfo = styled.div`
  margin-top: 1.5%;
  margin-left: 1%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 320px) {
    margin-left: 90px;
  }
  @media screen and (min-width: 375px) {
    margin-left: 120px;
  }
  @media screen and (min-width: 425px) {
    margin-left: 150px;
  }
`;

export const UserName = styled.div`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 37px;
  display: flex;
  align-items: center;
`;
export const Email = styled.div`
  display: flex;
  font-style: normal;
  font-weight: 300;
  font-size: 17px;

  @media screen and (max-width: 425px) {
    font-size: 12px;
  }
`;

export const Line = styled.div`
  width: 77%;
  margin-left: 15%;

  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  @media screen and (max-width: 768px) {
    width: 90%;
    visibility: hidden;
  }
`;

///////////////// ** div dos LIVROS  ** ////////////////
export const Container = styled.div`
  margin-top: 2%;
  margin-left: 25%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const ContainerCard = styled.div`
  width: 70%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 3%;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;
export const Card = styled.div`
  padding: 1rem;
  padding-left: 3rem;
  @media screen and (max-width: 425px) {
    padding-left: 1rem;
  }
`;
export const UserMiniStyle = styled.div`
  display: flex;

  @media screen and (max-width: 425px) {
    padding: 0.5rem;
    flex-direction: column;
  }
`;
export const UserMiniName = styled(UserName)`
  font-style: normal;
  font-weight: normal;
  font-size: 10px;
  line-height: 12px;
`;

export const MiniEmail = styled(Email)`
  font-weight: 200;
  font-size: 8px;
`;

export const MiniInfo = styled(UserInfo)`
  margin-bottom: 2.5rem;
  @media screen and (max-width: 425px) {
    margin-bottom: 0.5rem;
  }
`;
export const MinSVG = styled.div``;

export const Book = styled.div`
  background: ${(props) => props.bckg};
  border-radius: 15px;
  height: 30em;
  position: relative;
  @media screen and (max-width: 425px) {
    height: 14em;
  }
`;

export const BookImage = styled.div`
  margin: 0;
  background: yellow;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-right: -50%;
  transform: translate(-50%, -50%);
`;

export const Image = styled.img`
  margin: 0;
  width: 180px;
  @media screen and (max-width: 425px) {
    width: 100px;
  }
`;

///////////////// ** div dos OUTROS USUÁRIOS  ** ////////////////
export const BoxAnotherUser = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 70%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  box-sizing: border-box;
  border-radius: 15px;
  margin-bottom: 3%;
  @media screen and (max-width: 425px) {
    width: 80%;
  }
`;
export const BoxRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 20%;
  padding: 0.5rem;
`;

export const AnotherUserShelf = styled.div`
  width: 100%;
`;
export const AnotherUserBook = styled.div`
  width: 100%;

  border-radius: 5px 5px 0px 0px;
`;
export const AnotherUserAuthor = styled.div`
  width: 100%;
  display: flex;

  background: #ffffff;
  border-radius: 0px 0px 5px 5px;
  font-style: normal;
  font-weight: bold;
  font-size: 11px;
  line-height: 13px;
  padding: 1rem;
  text-align: center;
  color: #587cff;
  @media screen and (max-width: 500px) {
    visibility: hidden;
  }
`;

export const TitleShelf = styled.div`
  font-style: normal;
  font-weight: 300;
  font-size: 21px;
  line-height: 25px;
  /* identical to box height */

  color: #587cff;
`;

export const AnotherImage = styled.img`
  width: 100%;
`;
