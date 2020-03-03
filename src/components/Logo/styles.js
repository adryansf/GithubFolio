import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px;

  h1 {
    color: #fff;
    text-shadow: 1px 1px 1px black;
    font-size: 60px;
    font-weight: bold;
  }

  svg {
    font-size: 120px;
    color: #fff;
  }

  svg + svg {
    position: absolute;
    font-size: 60px;

    top: calc(60 * 0.6px);

    left: calc(60 * 0.5px);
  }

  @media (max-width: 425px) {
    h1 {
      font-size: 30px;
    }

    svg {
      font-size: 60px;
    }

    svg + svg {
      font-size: 30px;
      top: calc(30 * 0.6px);
      left: calc(30 * 0.5px);
    }
  }
`;
