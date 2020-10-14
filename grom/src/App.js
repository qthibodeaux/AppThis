import React from 'react';
import { Grommet, Box } from 'grommet';
import { Banner, Main } from "./components";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
};

function App() {

  return (
    <Grommet theme={theme} themeMode="dark" full>
      <Box>
          <Banner>
            AppToSMS
          </Banner>
          <Main />
      </Box>
    </Grommet>
  );
}

export default App;
