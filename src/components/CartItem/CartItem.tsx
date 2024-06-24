import React from 'react';
import { ICard } from '../../types';
import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Heading,
  Text,
  Tooltip,
} from '@radix-ui/themes';
import { MinusCircledIcon, PlusCircledIcon } from '@radix-ui/react-icons';

interface Props {
  drug: ICard;
  increaseCount: (drug: ICard) => void;
  my?: string;
}

export const CartItem: React.FC<Props> = ({ drug, increaseCount, my }) => {
  return (
    <Box my={my}>
      <Card>
        <Flex justify={'between'} align={'center'} gap={'3'}>
          <Flex align={'center'} justify={'between'} gap={'3'}>
            <Avatar size='4' src={drug.img} radius='medium' fallback='T' />
            <Box>
              <Heading size={'2'}>
                {drug.name}&nbsp;
                <Text color={'gray'} size={'2'} weight={'light'}>
                  — x{drug.count}
                </Text>
              </Heading>
              <Text as={'p'} size={'2'} color={'gray'}>
                {drug.type}
              </Text>
            </Box>
          </Flex>
          <Flex gap={'3'} align={'center'}>
            <Tooltip content={`Increase quantity ${drug.name}`}>
              <Button variant={'ghost'} onClick={() => increaseCount(drug)}>
                <PlusCircledIcon width={'20px'} height={'20px'} />
              </Button>
            </Tooltip>
            <Tooltip content={`Reduce the amount of ${drug.name}`}>
              <Button variant={'ghost'}>
                <MinusCircledIcon width={'20px'} height={'20px'} />
              </Button>
            </Tooltip>
          </Flex>
        </Flex>
      </Card>
    </Box>
  );
};
