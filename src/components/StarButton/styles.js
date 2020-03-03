import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: row;
  background: #333;
  padding: 10px;
  cursor: pointer;
  text-decoration: none;
  transition: background 0.5s;

  position: absolute;
  align-items: center;
  top: 20px;
  left: 10px;

  svg {
    margin-right: 5px;
    color: goldenrod;
    font-size: 20px;
  }

  p {
    color: #fff;
    font-weight: bold;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
  }
`;
