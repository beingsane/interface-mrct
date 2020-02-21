import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;
`;

export const Grid = styled.div`
  margin: 80px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 60px;
  align-items: center;

  @media (max-width: 780px) {
    grid-template-columns: repeat(1, 1fr);
  }
  text-align: center;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
    margin: 0;
  }
  text-align: center;
`;

export const Card = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.3);
  border-radius: 6px;
  text-align: center;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    transition: 1s;
  }

  img {
    width: 100%;
  }
`;

export const CardContent = styled.div`
  padding: 0 20px 20px;

  div span {
    font-size: 18px;
    line-height: 1.5;
    width: 250px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    direction: ltr;
    text-transform: uppercase;
    font-weight: bold;
  }

  > span {
    font-size: 16px;
    line-height: 1.2;
  }

  div p {
    font-size: 14px;
  }
`;

export const CardActions = styled.div`
  > button {
    background: linear-gradient(to bottom, #cf2b4f, #980021);
    border-radius: 6px;
    border: none;
    color: #fff;
    padding: 10px;
    width: 100%;
    font-weight: 600;
    text-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: center;

  button {
    background: none;
    border: 0;
    margin-left: 30px;
    margin-right: 30px;
  }
`;
