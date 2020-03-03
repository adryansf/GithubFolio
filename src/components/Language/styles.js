import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #333;
  justify-content: space-evenly;
  padding: 10px;

  button {
    background: 0;
    color: #ccc;
  }

  button + button {
    margin-left: 10px;
  }

  .active {
    color: #7159c1;
    font-weight: bold;
    text-shadow: 1px 1px 1px black;
  }
`;
