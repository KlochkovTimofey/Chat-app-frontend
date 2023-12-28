import React from "react";
import * as S from "../styled/avatar";

interface IAvatar {
    src: string,
    size: "big" | "medium" | "small",

}

function Avatar ({src, size} : IAvatar) {
    return <S.Avatar src={src} alt="avatar" $size={size} />

}

export default Avatar;

