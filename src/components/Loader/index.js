import styled from 'styled-components';

export default styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 1px dashed #fff;
  animation: roll 3s infinite;
  transform: rotate(360deg);
  align-self: center;

  @keyframes roll {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
