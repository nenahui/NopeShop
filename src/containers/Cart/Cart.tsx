import { ICard } from '../../types';
import React from 'react';
import { Button, Text } from '@radix-ui/themes';
import { CartItem } from '../../components/CartItem/CartItem';

interface Props {
  drugs: ICard[];
  increaseCount: (drug: ICard) => void;
}

export const Cart: React.FC<Props> = ({ drugs, increaseCount }) => {
  const cards = drugs
    .filter((drug) => drug.count > 0)
    .map((drug) => (
      <CartItem
        increaseCount={increaseCount}
        key={drug.id}
        drug={drug}
        my={'3'}
      />
    ));

  const cardsElements =
    cards.length === 0 ? (
      <Text>Cart is empty!</Text>
    ) : (
      <section>{cards}</section>
    );

  return (
    <>
      {cardsElements}
      <Button variant={'surface'} style={{ width: '100%' }}>
        Order
      </Button>
    </>
  );
};
