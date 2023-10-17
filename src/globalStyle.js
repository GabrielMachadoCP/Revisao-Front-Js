import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Arial, Helvetica, sans-serif;
    }
    .total{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;

        h1{
            font-size: 50px;
            font-family: Georgia, 'Times New Roman', Times, serif;
            color: darkorchid;
        }
    }
`

export default GlobalStyle