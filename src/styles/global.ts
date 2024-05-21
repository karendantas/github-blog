import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
    }   

    body {
        background-color: ${props => props.theme["base-background"]};
        color:  ${props => props.theme["base-text"]}
    }


    body, textarea, button, input {
        font-family:'Nunito', sans-serif;
        font-size: 1rem;
        font-weight: 400;
        line-height: 1.6;
        
    }
`;