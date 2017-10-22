import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Opener from './components/WlOpener';

const App = () => (
  <MuiThemeProvider>
    <Opener/>
  </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
