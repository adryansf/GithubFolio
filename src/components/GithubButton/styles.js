import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  margin: 10px 0px;
  max-width: 400px;
  align-self: center;
  background: #fff;
  text-decoration: none;
  color: #000;
  padding: 15px;
  border-radius: 6px;
  box-shadow: 1px 1px 1px #000;
  align-items: center;
  font-weight: bold;
  transition: background 0.5s, color 0.5s;

  svg{
    transition: color: 0.5s;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    color: #fff;

    svg {
      color: #7159c1;
    }
  }

  svg {
    margin-right: 10px;
  }
`;
