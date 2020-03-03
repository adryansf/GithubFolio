import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 330px;

  margin: auto;
  height: 100%;

  align-items: center;
  justify-content: center;

  .language {
    position: absolute;
    align-self: flex-end;
    top: 20px;
    right: 10px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;

    input {
      padding: 10px;
      border-radius: 4px;
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      color: #fff;
      font-size: 16px;
      margin: 20px 0px;
      width: 100%;
      transition: background 0.5s;

      &::placeholder {
        color: #ccc;
      }

      &:focus {
        background: rgba(0, 0, 0, 0.5);
      }
    }

    button {
      max-width: 150px;
      padding: 15px;
      border-radius: 4px;
      font-size: 20px;
      color: #fff;
      background: rgba(0, 0, 0, 0.2);
      border: 1px solid #fff;
      align-self: center;

      transition: background 0.5s, border 0.25s;

      &:hover {
        background: ${lighten(0.07, '#7159c1')};
        color: #fff;
        border: 1px solid rgba(0, 0, 0, 0.1);
      }
    }
  }
`;
