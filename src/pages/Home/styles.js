import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  button {
    background: none;
    border: 0;
    padding: 15px;
  }
`;

export const BuildingsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
  list-style: none;

  li {
    display: flex;
    flex-direction: column;
    background: #fff;
    border-radius: 6px;
    padding: 15px;

    &:hover {
      transform: scale(1.1);
      transition: 0.4s;
    }

    img {
      align-self: center;
      max-width: 280px;
      align-items: baseline;
    }

    > strong {
      font-size: 20px;
      line-height: 20px;
      color: #333;
      margin: 5px 20px;
      align-items: center;
      text-align: center;
    }

    > span {
      font-size: 14px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    > p {
      font-size: 12px;
      font-weight: bold;
      margin: 5px 0 20px;
    }

    button {
      background: #474a51;
      color: #fff;
      border: 0;
      border-radius: 4px;
      overflow: hidden;
      margin-top: auto;

      display: flex;
      align-items: center;
      transition: background 0.5s;

      &:hover {
        background: ${darken(0.05, '#474a51')};
      }

      div {
        display: flex;
        align-items: center;
        padding: 12px;
        background: rgba(0, 0, 0, 0.1);
      }

      span {
        flex: 1;
        text-align: center;
        font-weight: bold;
      }
    }
  }
`;
