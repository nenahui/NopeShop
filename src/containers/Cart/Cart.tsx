import { ICard } from '../../types';
import React from 'react';
import { Text } from '@radix-ui/themes';
import { CartItem } from '../../components/CartItem/CartItem';
import { Alert } from '../../components/Alert/Alert';

interface Props {
  drugs: ICard[];
  increaseCount: (drug: ICard) => void;
  removeFromCart: (card: ICard) => void;
}

export const Cart: React.FC<Props> = ({
  drugs,
  increaseCount,
  removeFromCart,
}) => {
  const cards = drugs
    .filter((drug) => drug.count > 0)
    .map((drug) => (
      <CartItem
        removeFromCart={removeFromCart}
        increaseCount={increaseCount}
        key={drug.id}
        drug={drug}
        my={'3'}
      />
    ));

  return (
    <>
      {cards.length > 0 ? cards : <Text>Cart is empty!</Text>}
      {cards.length !== 0 && <Alert drugs={drugs} />}
    </>
  );
};
