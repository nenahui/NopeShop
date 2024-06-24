import { Badge } from '@radix-ui/themes';
import React from 'react';

interface Props {
  name: string;
  onTabChange?: VoidFunction;
}

export const Tabs: React.FC<Props> = ({ name, onTabChange }) => {
  return (
    <Badge onClick={onTabChange} size={'3'} style={{ cursor: 'pointer' }}>
      {name}
    </Badge>
  );
};

/*
<Badge onClick={onTabChange} size={'3'} style={{ cursor: 'pointer' }}>
        All
      </Badge>
      <Badge size={'3'} style={{ cursor: 'pointer' }}>
        Opioids
      </Badge>
      <Badge size={'3'} style={{ cursor: 'pointer' }}>
        Stimulants
      </Badge>
      <Badge size={'3'} style={{ cursor: 'pointer' }}>
        Cannabinoids
      </Badge>
 */
