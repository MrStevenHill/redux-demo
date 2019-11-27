import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Logo from "./components/Logo";
import Counter from "./components/Counter";

const Centered = styled.div`
  text-align: center;
`;

const App = () => (
  <Centered>
    <Header>
      <Logo />
      <h1>Redux Counter</h1>
      <Counter />
    </Header>
  </Centered>
);

export default App;
