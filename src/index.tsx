import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import WlOpener from './components/WlOpener';

// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

const App = () => (
  <MuiThemeProvider>
    <WlOpener />
  </MuiThemeProvider>
);

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
