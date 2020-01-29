import React from 'react';
import { CrazyLeafNode } from './CrazyLeafNode';

export function CrazyComponent(): JSX.Element {
  console.log('rendering CrazyComponent');
  return (
    <div style={{ border: '1px solid orange', margin: '3px' }}>
      <div>CrazyComponent</div>
      <CrazyLeafNode />
    </div>
  );
}
