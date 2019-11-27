import React from "react";
import styled from "styled-components";

import logo from "./logo.svg";

const LogoImage = styled.img`
  height: 40vmin;
`;

const Logo = () => <LogoImage src={logo} alt="logo" />;

export default Logo;
