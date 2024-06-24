import React from 'react';
import { Box, Flex, Heading, Text } from '@radix-ui/themes';
import { useLocation, Location } from 'react-router-dom';
import { AvatarIcon } from '@radix-ui/react-icons';

interface Props {
  my?: string;
}

export const Header: React.FC<Props> = ({ my }) => {
  const location: Location = useLocation();
  const locationText =
    location.pathname === '/'
      ? 'Main'
      : location.pathname.charAt(1).toUpperCase() + location.pathname.slice(2);

  return (
    <Flex justify={'between'} align={'center'} my={my}>
      <Box>
        <Heading mb={'-1'} size={'4'}>
          NopeShop
        </Heading>
        <Text color={'gray'}>{locationText}</Text>
      </Box>
      <AvatarIcon width={40} height={40} style={{ cursor: 'pointer' }} />
    </Flex>
  );
};
