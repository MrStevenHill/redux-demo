import React from "react";
import styled from "styled-components";

const Anchor = styled.a`
  color: #09d3ac;
`;

const PopupLink = ({ url, text }) => (
  <Anchor href={url} target="_blank" rel="noopener noreferrer">
    {text}
  </Anchor>
);

export default PopupLink;
