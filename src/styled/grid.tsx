import styled from "styled-components";

export const GridItem = styled.div`
    border-radius: 20px;
    background-color: ${ ({theme}) => theme.colors.block };
    border: 1px solid ${ ({theme}) => theme.colors.border };

`;

export const Grid = styled.div`
    display: grid;
    height: 100vh;
    grid-template-columns: 186px 1fr;
    gap: 10px 45px;
    padding: 32px 37px 35px 33px;
`;