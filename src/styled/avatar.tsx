import styled from "styled-components";

export const Avatar = styled.img<{$size: "small" | "medium" | "big"}>`
    border-radius: 50%;
    object-fit: cover;
    width: ${( {theme, $size} ) => theme.sizes.avatar[ $size ] };
    height: ${( {theme, $size} ) => theme.sizes.avatar[ $size ] };
`; 