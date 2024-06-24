import React from 'react';
import { Table } from '@radix-ui/themes';
import { ICard } from '../../types';

interface Props {
  drugs: ICard[];
}

export const TableList: React.FC<Props> = ({ drugs }) => {
  return (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name of the drug</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {drugs
          .filter((drug) => drug.count > 0)
          .map((drug) => (
            <Table.Row key={drug.id}>
              <Table.RowHeaderCell>{drug.name}</Table.RowHeaderCell>
              <Table.Cell>{drug.count}</Table.Cell>
              <Table.Cell>{drug.count * drug.price}сом</Table.Cell>
            </Table.Row>
          ))}
      </Table.Body>
    </Table.Root>
  );
};
