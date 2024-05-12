import styled from "styled-components";

export const MainContainerRegister = styled.main`
    max-width: 1000px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.250);
    padding: 40px 40px 40px 0;
    animation: fadeIn 0.5s ease-in-out forwards;

    img {
        width: 100%;
        border-radius: 30px 0 0 30px;
    }

    @media screen and (max-width: 450px) {
        padding: 30px 60px;

        img {
            display: none;
        }
    }
`;

export const FormContainerRegister = styled.form`
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    gap: 10px;

    h1,
    p {
        text-align: center;
    }

    hr {
        border: 2px solid #6c63ff;
        border-radius: 30px;
        width: 140px;
        margin: auto;
    }

    @media screen and (max-width: 450px) {
        width: 100%;
    }
`;

export const Fields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: content;
    align-items: left;

    label {
        margin-bottom: 5px;
    }

    input {
        outline: 0;
        border: 2px solid ${({ showError }) => (showError ? 'red' : 'transparent')}; 
        border-radius: 30px;
        padding: 10px;
        background-color: #f5f5f5;
        transition: border-color 0.3s ease; 
    }

    input:hover,
    input:focus {
        border-color: #6c63ff;
    }

    .errorMessage {
        color: red;
        margin-top: 5px;
        display: ${({ showError }) => (showError ? 'block' : 'none')};
    }
`;

export const SubmitButton = styled.button`
    width: 140px;
    outline: 0;
    border: 2px solid transparent;
    margin: 10px auto 0 auto;
    border-radius: 30px;
    background-color: #6c63ff;
    color: white;
    font-weight: 600;
    padding: 10px;
    cursor: pointer;

    &:active {
        background-color: transparent;
        border: 2px solid #6c63ff;
        color: #6c63ff;
    }
`;
