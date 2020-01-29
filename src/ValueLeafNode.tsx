import React from 'react';
import { useAppDispatch } from './AppContextProvider';

export function ValueLeafNode(): JSX.Element {
  console.log('rendering ValueLeafNode');

  const dispatch = useAppDispatch();

  const incrementValue = () => {
    console.log('calling incrementValue');
    dispatch({ type: 'incrementValue' });
  };

  const incrementCrazy = () => {
    console.log('calling incrementCrazy');
    dispatch({ type: 'incrementCrazy' });
  };

  return (
    <div style={{ border: '1px solid red', margin: '3px' }}>
      <div>ValueLeafNode</div>
      <button onClick={incrementValue}>Increment Value</button>
      &nbsp;
      <button onClick={incrementCrazy}>Increment Crazy</button>
    </div>
  );
}
