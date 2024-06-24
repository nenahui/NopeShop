import { Flex, TabNav } from '@radix-ui/themes';
import { NavLink } from 'react-router-dom';
import React from 'react';

interface Props {
  my?: string;
}

export const Footer: React.FC<Props> = ({ my }) => {
  return (
    <TabNav.Root my={my}>
      <Flex justify={'center'} align={'center'}>
        <TabNav.Link asChild>
          <NavLink to={'/'}>Main</NavLink>
        </TabNav.Link>
        <TabNav.Link asChild>
          <NavLink to={'/cart'}>Cart</NavLink>
        </TabNav.Link>
        <TabNav.Link asChild>
          <NavLink to={'/favorite'}>Favorite</NavLink>
        </TabNav.Link>
      </Flex>
    </TabNav.Root>
  );
};
