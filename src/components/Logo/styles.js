import styled, { css } from 'styled-components';

export const size = {
  small: 30,

  normal: 60,
};

export const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin: 0 10px;

  h1 {
    color: #fff;
    text-shadow: 1px 1px 1px black;
    font-size: ${props => css`calc(${size[props.size]} * 1px)`};
    font-weight: bold;
  }

  svg {
    font-size: ${props => css`calc(${size[props.size]} * 2px)`};
    color: #fff;
  }

  svg + svg {
    position: absolute;
    font-size: ${props => css`calc(${size[props.size]} * 1px)`};

    top: ${props => css`calc(${size[props.size]} * 0.6px)`};

    left: ${props => css`calc(${size[props.size]} * 0.5px)`};
  }
`;
