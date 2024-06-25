import { DataItem } from '../../components/DataItem/DataItem';
import { ICard } from '../../types';
import React from 'react';

interface Props {
  drugs: ICard[];
}

export const Delivery: React.FC<Props> = ({ drugs }) => {
  return drugs
    .filter((drug) => drug.count > 0)
    .map((drug) => <DataItem key={drug.id} drug={drug} />);
};
