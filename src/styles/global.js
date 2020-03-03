import { createGlobalStyle } from 'styled-components';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

  *{
    padding:0;
    margin:0;
    outline:0;
    box-sizing: border-box;
  }

  body,html,#root{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
    height: 100%;
    -webkit-font-smoothing: antialiased;
  }

  button,input{
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
    border: 0;
  }

  body{
    background: #7159c1;
  }
`;
