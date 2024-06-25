import { Badge, Code, Link, Separator, DataList } from '@radix-ui/themes';
import { ICard } from '../../types';
import React from 'react';

interface Props {
  drug: ICard;
}

export const DataItem: React.FC<Props> = ({ drug }) => {
  return (
    <>
      <DataList.Root my={'5'}>
        <DataList.Item align='center'>
          <DataList.Label minWidth='88px'>Status</DataList.Label>
          <DataList.Value>
            <Badge color='jade' variant='soft' radius='full'>
              In processingAuthorized
            </Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth='88px'>ID</DataList.Label>
          <DataList.Value>
            <Code variant='ghost'>{drug.id}</Code>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth='88px'>Name</DataList.Label>
          <DataList.Value>{drug.name}</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth='88px'>Count</DataList.Label>
          <DataList.Value>
            <Link href='mailto:vlad@workos.com'>{drug.count}</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth='88px'>Price</DataList.Label>
          <DataList.Value>
            <Link href='mailto:vlad@workos.com'>{drug.price * drug.count}</Link>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
      <Separator size={'4'} />
    </>
  );
};
