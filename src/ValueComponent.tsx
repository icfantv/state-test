import React from 'react';
import { ValueLeafNode } from './ValueLeafNode';

export function ValueComponent(): JSX.Element {
  console.log('rendering ValueComponent');
  return (
    <div style={{ border: '1px solid blue', margin: '3px' }}>
      <div>ValueComponent</div>
      <ValueLeafNode />
    </div>
  );
}
