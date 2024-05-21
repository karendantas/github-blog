import styled from "styled-components";

export const ProfileContainer = styled.div`
    max-width: 54rem;
    width: 100%;
    padding: 2rem  2.5rem;
    background-color: ${props => props.theme["base-profile"]};
    border-radius: 10px;
    transform: translateY(-30%);
    margin: 0 auto;

    img{
        height: 9.25rem;
        width:9.25rem ;
        border-radius: 8px;
    }


`;

export const ProfileContent = styled.div `

    display: flex;
    align-items: flex-start;
    gap: 2rem;

    h2{
        color : ${props => props.theme["base-title"]};
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 8px;
    }
    p{
        color : ${props => props.theme["base-text"]};
        font-size: 1rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient:vertical;
        padding-bottom:24px ;
       
    }

`;

export const ProfileInfos = styled.div `
    display: flex;
    align-items: center;
    gap: 1.5rem;

    div {
         display: flex;
         gap: 0.5rem;
         align-items: center;
    }
`
export const GitLink = styled.a`
    color: ${props => props.theme["blue"]};
    font-size: 0.75rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    &:hover{
        border-bottom: 2px solid ${props => props.theme['blue']};
    }
`