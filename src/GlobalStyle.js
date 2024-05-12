import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    @keyframes fadeIn {
    0% {
        opacity: 0;
        transform: translateY(20px);
    }  

    100% {
        opacity: 1;
        transform: translateY(20px);
    }
}
    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        animation: fadeIn 0.5s ease-in-out forwards;
    }
`;