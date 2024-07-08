import React from "react";
import {
  TogetherBtn,
  TogetherContainer,
  TogetherTitle,
  TogetherWrapper,
} from "./TogetherStyles";

export default function Together() {
  return (
    <TogetherContainer>
      <TogetherWrapper>
        <TogetherTitle>Together for the future of our Children</TogetherTitle>
        <TogetherBtn>Make a donation</TogetherBtn>
      </TogetherWrapper>
    </TogetherContainer>
  );
}
