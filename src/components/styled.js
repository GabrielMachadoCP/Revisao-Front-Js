import styled from 'styled-components'

export const SecMus = styled.section`

    background-color: pink;
    padding: 20px;
    border-radius: 10px;
    min-height: 30vh;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;


    h2{
        font-size: 38px;
        text-align: center ;
        color: violet;
    }

    p{
        text-align: justify;
        color: darkviolet;
    }

    img{
        max-width: 40%;
    }
`

export const SecMun = styled.section`

    background-color: lightblue;
    padding: 20px;
    border-radius: 10px;
    min-height: 30vh;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;

    h2{
        font-size: 38px;
        color: midnightblue;
        text-align: center;
    }

    p{
        text-align: justify;
        color: cornflowerblue;
    }

    img{
        max-width: 40%;
    }
`