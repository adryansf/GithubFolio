import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: #333;
  justify-content: space-evenly;
  padding: 10px;

  button {
    background: 0;
    color: #7159c1;
  }

  button + button {
    margin-left: 10px;
  }

  .active {
    color: #fff;
  }
`;
