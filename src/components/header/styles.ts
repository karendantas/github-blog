import styled from "styled-components";

const coverImg = "src/assets/Cover.png";

export const CoverContainer = styled.header`
    width: 100%;
    height: 300px;
    background-image: url(${coverImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
`