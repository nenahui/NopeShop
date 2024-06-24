import { Badge, Flex } from '@radix-ui/themes';
import React from 'react';

interface Props {
  my?: string;
}

export const Tabs: React.FC<Props> = ({ my }) => {
  return (
    <Flex justify={'between'} align={'center'} gap={'1'} my={my} wrap={'wrap'}>
      <Badge size={'3'} style={{ cursor: 'pointer' }}>
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
    </Flex>
  );
};
