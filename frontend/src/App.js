import { Container } from '@material-ui/core';
import React from 'react';
import { Banner, Main, SubmitButton } from "./components";

function App() {
  return (
    <Container>
      <Banner className="h-25"/>
      <Main />
      <SubmitButton />
    </Container>
  );
}

export default App;
