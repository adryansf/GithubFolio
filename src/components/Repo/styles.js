import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 10px 20px;
  border-radius: 4px;
  background: #fff;
  color: #000;
  padding: 20px;
  text-decoration: none;
  transition: background 0.5s, color 0.5s;
  min-width: 200px;

  &:hover {
    background: #7159c1;
    color: #fff;
  }

  header {
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: space-around;
    align-items: center;

    img {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: #ccc;
      margin-right: 10px;
    }

    h3 {
      color: #000;
      font-size: 16px;
      font-weight: bold;
    }
  }

  span {
    color: #333;
  }
`;
