import React from 'react';

import { useAppState } from './AppContextProvider';

export function CrazyLeafNode(): JSX.Element {
  console.log('rendering CrazyLeafNode');

  const state = useAppState();
  return (
    <div style={{ border: '1px solid green', margin: '3px' }}>
      Crazy Count: {state.anotherFunctionalArea.nestedPiece.drillingDown.crazy}
    </div>
  );
}
