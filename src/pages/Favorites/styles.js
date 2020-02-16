import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const BuildingsTable = styled.table`
  width: 100%;

  thead th {
    color: #131313;
    text-align: center;
    padding: 12px;
    text-transform: uppercase;
  }

  image {
    height: 100px;
  }

  strong {
    color: #454a51;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  div {
    display: flex;
    align-items: center;
  }

  button {
    background: none;
    border: 0;
    padding: 12px 20px;
  }
`;
