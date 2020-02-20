import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1020px;
  margin: 0 auto;

  span {
    font-size: 25px;
    text-align: center;
    font-weight: bold;
  }
`;

export const Cards = styled.div`
  border-radius: 6px;
  margin: 80px;
  display: grid;
  grid-gap: 60px;
  align-items: center;

  @media (max-width: 500px) {
    grid-template-columns: repeat(1, 1fr);
  }
  text-align: center;

  button {
    background: none;
    border: 0;
    padding: 10px;
  }
`;

export const Building = styled.div`
  background: #fff;
  border: 1px solid #ccc;
  box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.2);
  border-radius: 6px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 6px;
    box-shadow: 2px 2px 6px 6px rgba(0, 0, 0, 0.05);
  }

  div {
    padding: 20px;
  }

  strong {
    font-size: 18px;
    line-height: 3;
    text-align: center;
  }
`;
export const Details = styled.div`
  > strong {
    font-size: 14px;
    color: #4e4a67;
  }

  p {
    color: #131313;
    font-size: 14px;
    line-height: 3;
    font-weight: bold;
  }

  span {
    color: #4e4a67;
    font-size: 13px;
    line-height: 2;
    font-style: italic;
  }
`;
