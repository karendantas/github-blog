import styled from "styled-components";

export const PostItemContainer = styled.main`
    max-width: 864px ;
    width: 100%;
    height: 100vh;
    margin: 0 auto;
`;

export const PostHeading = styled.header`
    width: 100%;
    padding: 2rem  2.5rem;
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    transform: translateY(-30%);

    h2 {
        font-size: 1.5rem;
        font-weight: bold;
        color: ${props => props.theme['base-title']};
        margin-bottom: 0.5rem;
    }
`;

export const PostLinks = styled.div `
    
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.25rem;
    gap: 0.5rem;
    
    a{
        color: ${props => props.theme['blue']};
        font-size: 0.75rem;
        font-weight: bold;
        border-bottom: 1px solid transparent;

        &:hover{
            border-bottom: 1px solid  ${props => props.theme['blue']}; 
        }
    }

    
`;

export const PostInfos = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    color: ${props => props.theme['base-span']};

    div {
         display: flex;
         gap: 0.5rem;
         align-items: center;
    }

`;

export const PostItemContent = styled.div `
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: calc( -30% - 2.5rem) 2rem;
`;