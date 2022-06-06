import styled from "styled-components";
import MenuIcon from "./menu.svg";
import UserIcon from "./user.svg";
import InstagramIcon from "./instagram.svg";
import FacebookIcon from "./facebook.svg";
import TwitterIcon from "./twitter.svg";
import PrevIcon from "./prev.svg";
import NextIcon from "./next.svg";
import CloseIcon from "./close.svg";

export const Burguer = styled(MenuIcon)`
  width: 24px;
  height: 24px;
  stroke: #fafafa;
`;

export const User = styled(UserIcon)`
  stroke: #fafafa;
  width: 20px;
  height: 20px;
`;
export const Facebook = styled(FacebookIcon)`
  width: 20px;
  height: 20px;
  stroke: ${(props) => props.stroke || "#8a8a8a"};
`;

export const Twitter = styled(TwitterIcon)`
  stroke: ${(props) => props.stroke || "#8a8a8a"};
  width: 20px;
  height: 20px;
`;

export const Instagram = styled(InstagramIcon)`
  stroke: ${(props) => props.stroke || "#8a8a8a"};
  width: 20px;
  height: 20px;
`;
export const Prev = styled(PrevIcon)`
  stroke: #8a8a8a;
  width: 20px;
  height: 20px;
`;
export const Next = styled(NextIcon)`
  stroke: #8a8a8a;
  width: 20px;
  height: 20px;
`;
export const Close = styled(CloseIcon)`
  stroke: #fafafa;
  width: 20px;
  height: 20px;
`;
