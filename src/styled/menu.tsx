import styled from "styled-components";
import { GridItem } from "./grid";

export const MenuStyled = styled(GridItem) `
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 38px 0 48px 0;
    & .menu-items {
        display: flex;
        flex-direction: column;
    }
    & a {
        color: ${( {theme} ) => theme.colors.text};
        font-size: 46px;
        margin-top: 61px;
        position: relative;
        z-index: 1;

        & span {
            width: 161px;
            height: 88px;
            position: absolute;
            display: none;
            top: 50%;
            border-radius: 20px 0 0 20px;
            left: 50%;
            transform: translate(-43% , -55%);
            z-index: -1;
            background-color: ${( {theme} ) => theme.colors.primaryDark};
            &::after {
                content: "";
                position: absolute;
                width: 8px;
                height: 100%;
                border-radius: 25px 0 0 25px;
                right: 0;
                top: 0;
                background-color: ${( {theme} ) => theme.colors.gray[ 75 ]};
                box-shadow: -2px 0px 4px #0000003F;
            }
        }
        
    }
    & a.active span {
        display: block;
        
    }
`


