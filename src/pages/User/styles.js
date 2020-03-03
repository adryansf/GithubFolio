import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;
  justify-content: center;

  .language {
    position: absolute;
    align-self: flex-end;
    top: 20px;
    right: 10px;
  }

  button.back {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: rgba(0, 0, 0, 0.2);
    margin: 10px;
    transition: background 0.5s;

    &:hover {
      background: rgba(0, 0, 0, 0.6);

      svg {
        color: #7159c1;
      }
    }

    svg {
      font-size: 30px;
      color: #ccc;
      transition: color 0.5s;
    }
  }
`;

export const UserDescription = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 10px 0px;
    align-self: center;
  }

  h1 {
    color: #fff;
    align-self: center;
    font-weight: bold;
    margin-bottom: 10px;
  }

  blockquote {
    text-align: center;
    align-self: center;
    color: #fff;
    margin-bottom: 15px;
  }

  span {
    display: flex;
    align-items: center;

    span {
      color: #ccc;
      margin-left: 10px;
    }
  }

  span + span {
    margin-top: 10px;
  }

  ul {
    list-style: none;
    display: flex;
    justify-content: space-around;
    margin: 20px 0px;
    font-size: 20px;

    li {
      a {
        display: flex;
        align-items: center;
        background: #fff;
        padding: 10px 15px;
        border-radius: 4px;
        text-decoration: none;
        color: #fff;
        background: rgba(0, 0, 0, 0.5);
        transition: background 0.5s, color 0.5s;

        &:hover {
          background: #fff;
          color: #000;
        }

        svg {
          color: #7159c1;
          font-size: 30px;
        }
      }
    }
  }

  @media (max-width: 999px) {
    span {
      align-self: center;
    }
  }

  @media (max-width: 670px) {
    ul {
      flex-direction: column;
      max-width: 250px;
      align-self: center;

      li + li {
        margin-top: 20px;
      }
    }
  }
`;

export const Repos = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  padding: 20px 10px;
  border-radius: 4px;
  background: rgba(0, 0, 0, 0.2);
  align-items: center;

  h1 {
    color: #fff;
    font-weight: bold;
    margin-bottom: 30px;
    align-self: center;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media (max-width: 999px) {
    div {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 560px) {
    div {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
`;
