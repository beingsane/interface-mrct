import styled from 'styled-components';

export const Container = styled.div`
  padding: 30px;
  background: #fff;
  border-radius: 4px;
`;

export const BuildingsTable = styled.table`
  width: 100%;

  thead tr {
    color: #131313;
    padding: 10px;
    font-size: 20px;
    font-weight: bold;

    td {
      text-align: center;

      > span {
        text-transform: uppercase;
      }
    }
  }

  tbody td {
    margin-left: auto;
  }

  strong {
    color: #454a51;
    padding: 15px;
    display: block;
    font-size: 16px;
  }

  image {
    height: 100px;
  }

  p {
    display: block;
    padding: 5px 0;
    text-justify: auto;
    font-size: 14px;
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
