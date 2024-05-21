import styled from "styled-components";

export const SearchInput = styled.input `
    width: 100%;
    margin-top: 0.75rem;
    background-color: ${props => props.theme['base-input']};
    color: ${props => props.theme['base-text']};
    padding: 0.75rem 1rem;

    outline: none;
    border-radius: 6px;
    border: 1px solid ${props => props.theme['base-border']};

    &::placeholder{
        color: ${props => props.theme['base-label']};
    }

` 