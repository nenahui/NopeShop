import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';
import { ICard } from '../../types';
import React from 'react';
import { PlusCircledIcon } from '@radix-ui/react-icons';

interface Props {
  card: ICard;
}

export const CardItem: React.FC<Props> = ({ card }) => {
  return (
    <Box maxWidth={'190px'}>
      <Card size={'2'}>
        <img src={card.img} height={'130'} alt='Amphetamine image' />
        <Flex justify={'between'} my={'2'}>
          <Box>
            <Heading size={'3'} mb={'-2'}>
              {card.name}
            </Heading>
            <Text color={'gray'} size={'2'}>
              {card.type}
            </Text>
          </Box>
          <Text color={'gray'} size={'2'}>
            x2
          </Text>
        </Flex>
        <Flex justify={'between'} align={'center'} gap={'2'}>
          <Text as={'p'}>
            {card.price}с ({card.gram}g)
          </Text>
          <Button variant={'ghost'}>
            <PlusCircledIcon width={20} height={20} />
          </Button>
        </Flex>
      </Card>
    </Box>
  );
};
