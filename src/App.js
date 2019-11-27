import React from "react";
import styled from "styled-components";

import Header from "./components/Header";
import Logo from "./components/Logo";
import PopupLink from "./components/PopupLink";
import Counter from "./components/Counter";

const Centered = styled.div`
  text-align: center;
`;

const App = () => (
  <Centered>
    <Header>
      <Logo />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <PopupLink url="https://reactjs.org" text="Learn React" />
      <Counter />
    </Header>
  </Centered>
);

export default App;
