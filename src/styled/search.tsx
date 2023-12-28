import styled from "styled-components";
import { GridItem } from "./grid";

export const StyledSearch = styled(GridItem)`
    position: relative;
    & input {
        width: 100%;
        height: 100%;
        border-radius: 20px;
        background: transparent;
        padding: 17px 17px 18px 58px;
        &::placeholder {
            font-size: 15px;
            color: ${({theme}) => theme.colors.gray[35]}
        }
    }
    & button {
        position: absolute;
        background: transparent;
        color: white;
        top: 50%;
        left: 23px;
        transform: translateY(-40%);
        font-size: 19px
    }
`