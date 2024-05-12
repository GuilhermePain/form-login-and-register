import styled from "styled-components";

export const MainContainer = styled.main`
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 28px 40px;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.250);

    article {
        text-align: center;
        font-size: 1.5rem;
    }

    img {
        max-width: 500px;
    }

    p {
        font-weight: 600;
        font-size: 1.3em;
        margin-top: 20px;
        opacity: 0.5;
    }

    button {
        outline: 0;
        border: 2px solid transparent;
        border-radius: 20px;
        background-color: #6C63FF;
        color: white;
        font-weight: 600;
        padding: 10px 28px;
        cursor: pointer;
    }

    /* button:hover {
        padding: 12px 30px;
    } */

    button:active {
        background-color: transparent;
        border: 2px solid #6C63FF;
        color: #6C63FF;
    }

`;
