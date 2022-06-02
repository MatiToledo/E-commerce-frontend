import styled from "styled-components";

export const Title = styled.h1`
  font-size: 32px;
  font-weight: 700;
  margin: 0;
  color: ${(props) => props.color || "black"};
  text-decoration: ${(props: any) => props["text-decoration"] || "none"};
`;

export const SubTitle = styled(Title).attrs({
  as: "h2",
})`
  font-size: 26px;
`;

export const Body = styled.p`
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  color: ${(props) => props.color || "black"};
`;

export const BodyBold = styled(Body)`
  font-weight: 700;
`;

export const MenuText = styled(Body)`
  font-size: 13px;
`;

export const TinyText = styled.span`
  font-size: 12px;
  font-weight: 300;
  margin: 0;
  color: ${(props) => props.color || "black"};
`;

export const TinyTextBold = styled(TinyText)`
  font-weight: bold;
`;
