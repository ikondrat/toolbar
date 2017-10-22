import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Options from './components/Options';

const App = () => (
  <MuiThemeProvider>
    <Options/>
  </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
