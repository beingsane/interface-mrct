import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 30px 0;
`;

export const Favorites = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: opacity 0.2s;

  &:hover {
    opacity: 0.6;
  }

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #191919;
    }

    span {
      font-size: 12px;
      color: #999;
    }
  }
`;
