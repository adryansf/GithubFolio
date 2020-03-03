import styled from 'styled-components';

export const Container = styled.footer`
  text-shadow: 1px 1px 1px white;
  position: fixed;
  bottom: 10px;

  a {
    text-decoration: none;
    color: rgba(0, 0, 0, 0.2);
  }

  @media (max-height: 399px) {
    & {
      display: none;
    }
  }
`;
