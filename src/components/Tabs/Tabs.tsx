import { Badge } from '@radix-ui/themes';
import React from 'react';

interface Props {
  name: string;
  onTabChange?: VoidFunction;
}

export const Tabs: React.FC<Props> = ({ name, onTabChange }) => {
  return (
    <Badge
      onClick={onTabChange}
      size={'3'}
      style={{
        cursor: 'pointer',
        flex: '1 1 auto',
        display: 'block',
        textAlign: 'center',
      }}
    >
      {name}
    </Badge>
  );
};
