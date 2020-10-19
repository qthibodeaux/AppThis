import React from 'react';
import { Grommet, Box  } from 'grommet';
import { Banner, Main } from "./components";
import { deepMerge } from 'grommet/utils';
import { grommet } from 'grommet/themes';

const customBreakpoints = deepMerge(grommet, {
  global: {
    breakpoints: {
      xsmall: {
        value: 500,
      },
      small: {
        value: 900,
      },
      medium: undefined,
      middle: {
        value: 3000,
      },
    },
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
});

function App() {

  return (
    <Grommet theme={customBreakpoints} themeMode="dark" full>
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
