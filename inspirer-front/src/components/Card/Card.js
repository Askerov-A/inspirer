import React from "react";
import styled from "styled-components";

const LittleCard = styled.div`
  background-color: #f4edb2;
  margin: 30px;
  height: max-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;
  max-width: 600px;
  border-radius: 15px;
  box-shadow: 0 1px 6px rgba(0,0,0,0.1);
  @media screen and (max-width: 600px) {
    padding: 20px;
    margin: 10px;
    border-radius: 5px;
  }
`;

const Title = styled.h1`
  margin: 0;
`;
const Content = styled.p`
  text-align: center;
`;

const Card = ({ title, body, date }) => (
  <LittleCard>
    <Title>{title}</Title>
    <Content>{body}</Content>
    {date}
  </LittleCard>
);

export default Card;
