import styled from 'styled-components'

const SecTur = styled.section`
    background-color: lightgoldenrodyellow;
    border-radius: 10px;
    padding: 20px;
    min-height: 30vh;
    width: 100%;
    
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-content: center;
    flex-wrap: wrap;

    h2{
        color: #e4d234;
        font-size: 38px;
        text-align: center;
    }

    p{
        color: darkgoldenrod;
        text-align: justify;
    }

    img{
        max-width: 40%;
    }

`

export default function Turismo(){

    return(
        <SecTur>
            <h2>Turismo</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, et!</p>
            <img src="/turismo.png" alt="turismo" />
        </SecTur>
    )
}