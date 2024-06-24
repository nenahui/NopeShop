import {
  Badge,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
} from '@radix-ui/themes';
import { ICard } from '../../types';
import React from 'react';
import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';

interface Props {
  card: ICard;
  addToCart?: (drug: ICard) => void;
}

export const CardItem: React.FC<Props> = ({ card, addToCart }) => {
  return (
    <Box maxWidth={'190px'}>
      <Card size={'2'} variant={'classic'}>
        <img
          src={card.img}
          height={'130'}
          width={'100%'}
          alt='Amphetamine image'
        />
        <Flex justify={'between'} my={'2'}>
          <Box mb={'1'}>
            <Heading size={'3'} mb={'-1'}>
              {card.name}
            </Heading>
            <Text color={'gray'} size={'2'}>
              {card.type}&nbsp;
              <Text size={'2'} color={'gray'} weight={'light'}>
                — ({card.gram}g)
              </Text>
            </Text>
          </Box>
          {card.count > 0 && (
            <Text color={'gray'} size={'2'}>
              {card.count}x
            </Text>
          )}
        </Flex>
        <Flex justify={'between'} align={'center'} gap={'2'}>
          <Badge size={'3'} color={'indigo'}>
            {card.price}сом
          </Badge>
          <Box>
            <Button
              variant={'ghost'}
              size={'1'}
              mr={'4'}
              onClick={() => {
                addToCart ? addToCart(card) : null;
              }}
            >
              <PlusCircledIcon width={22} height={22} />
            </Button>
            <Button
              variant={'ghost'}
              size={'1'}
              onClick={() => {
                addToCart ? addToCart(card) : null;
              }}
            >
              <MinusCircledIcon width={22} height={22} />
            </Button>
          </Box>
        </Flex>
      </Card>
    </Box>
  );
};
