import React from 'react';
import { Text } from '@radix-ui/themes';
import { DataItem } from '../../components/DataItem/DataItem';
import { ICard } from '../../types';

interface Props {
  drugs: ICard[];
}

export const Delivery: React.FC<Props> = ({ drugs }) => {
  const cards = drugs
    .filter((drug) => drug.count > 0)
    .map((drug) => <DataItem key={drug.id} drug={drug} />);
  return <>{cards.length > 0 ? cards : <Text>Orders is a empty!</Text>}</>;
};
