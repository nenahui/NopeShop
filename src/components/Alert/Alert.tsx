import React, { PropsWithChildren } from 'react';
import { AlertDialog, Button, Flex, Text } from '@radix-ui/themes';
import { TableList } from '../TableList/TableList';
import { ICard } from '../../types';
import { useNavigate } from 'react-router-dom';

interface Props extends PropsWithChildren {
  drugs: ICard[];
}

export const Alert: React.FC<Props> = ({ drugs }) => {
  const navigate = useNavigate();
  const totalPrice = () => {
    return drugs.reduce((total, drug) => total + drug.count * drug.price, 0);
  };

  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger>
        <Button
          variant={'surface'}
          style={{ width: '100%' }}
          onClick={() => navigate('order')}
        >
          Order
        </Button>
      </AlertDialog.Trigger>
      <AlertDialog.Content maxWidth='450px'>
        <AlertDialog.Title>Are you sure?</AlertDialog.Title>
        <AlertDialog.Description size='2' mb={'3'}>
          Are you sure you want to buy drugs?
        </AlertDialog.Description>
        <TableList drugs={drugs} />
        <Text as={'p'} mt={'4'} align={'right'}>
          <Text size={'2'} color={'gray'}>
            Total price:&nbsp;
          </Text>
          {totalPrice()}сом
        </Text>

        <Flex gap='3' mt='4' justify='end'>
          <AlertDialog.Cancel>
            <Button
              variant='soft'
              color='gray'
              onClick={() => navigate('/cart')}
            >
              Cancel
            </Button>
          </AlertDialog.Cancel>
          <AlertDialog.Action>
            <Button variant='surface'>Revoke access</Button>
          </AlertDialog.Action>
        </Flex>
      </AlertDialog.Content>
    </AlertDialog.Root>
  );
};
