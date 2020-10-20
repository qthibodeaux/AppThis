import React, { useContext } from 'react';
import {
  Box,
  Card,
  Grid,
  Grommet,
  ResponsiveContext,
  Text,
} from 'grommet';
import { Banner, Main } from "./components";

const theme = {
  global: {
    font: {
      family: 'Roboto',
      size: '18px',
      height: '20px',
    },
  },
}

const cards = Array(20)
  .fill()
  
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

function App() {
  const size = useContext(ResponsiveContext);
  return (
    <Grommet theme={theme} themeMode="dark" full>
      <Box>
          <Banner>
            AppToSMS
          </Banner>
          <Main />
          <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
            {cards.map((card, index) => (
              <Card pad="large" key={index}>
                {card}
              </Card>
            ))}
          </Grid>
      </Box>
    </Grommet>
  );
}

export default App;

