import * as React from 'react';

import { AppContextProvider } from './AppContextProvider';
import { CrazyComponent } from './CrazyComponent';
import { ValueComponent } from './ValueComponent';

export const App = () => {
  console.log('rendering App');
  return (
    <AppContextProvider>
      <div style={{ border: '1px solid purple', margin: '3px' }}>
        <div>App</div>
        <CrazyComponent />
        <ValueComponent />
      </div>
    </AppContextProvider>
  );
};
