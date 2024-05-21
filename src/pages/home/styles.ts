import styled from "styled-components";

export const HomeContainer = styled.body`
    max-width: 900px ;
    width: 100%;
    height: 100vh;
    margin: 0 auto;

`;

export const IssuesInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        color: ${props => props.theme['base-subtitle']};
        font-weight: bold;
        font-size: 1.125rem;
    }
    span{
        color: ${props => props.theme['base-span']};
        font-size: 0.875rem;
    }
`