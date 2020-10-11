import React from 'react';
import Grid from '@material-ui/core/Grid';
import { Banner, Main, SimpleList } from "./components";

function App() {
  return (
    <Grid container spacing={2}>
      <Grid item><Banner/></Grid>
      <Grid item><Main /></Grid>
      <Grid item><SimpleList /></Grid>
    </Grid>
  );
}

export default App;
