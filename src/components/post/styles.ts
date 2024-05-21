import styled from "styled-components";

export const PostContainer = styled.div `
    width: 416px;
    height: 260px;
  

    background-color: ${props => props.theme['base-post']};
    border-radius: 10px;
    padding: 2rem;

`;

export const PostContent = styled.div`
    p{
        color : ${props => props.theme["base-text"]};
        font-size: 1rem;

        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient:vertical;
        padding-bottom:24px ;
       
    }

    header {
        display: flex;
        align-items: flex-start;
        gap: 1rem;

        h2 {
            font-size:  1.25rem;
            font-weight: bold;
            color: ${props => props.theme['base-title']};
            width: 80%;
            margin-bottom: 1.25rem;
        }
        span {
            font-size: 0.875rem;
            color: ${props => props.theme['base-span']}
        }
    }


`;