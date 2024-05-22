import styled from "styled-components";

export const HomeContainer = styled.body`
    max-width: 864px ;
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

export const IssuesContainer = styled.div `
    width: 100%;
    margin-top: 3rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;

`