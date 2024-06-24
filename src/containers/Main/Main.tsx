import { CardItem } from '../../components/CardItem/CardItem';
import { Flex, Grid } from '@radix-ui/themes';
import { drugsTypes, ICard } from '../../types';
import React, { useState } from 'react';
import { Tabs } from '../../components/Tabs/Tabs';

export interface Props {
  drugsList: ICard[];
  addToCart: (card: ICard) => void;
}

export const Main: React.FC<Props> = ({ drugsList, addToCart }) => {
  const [drugsFilter, setDrugsFilter] = useState<drugsTypes>('All');

  const changeFilter = (filter: drugsTypes) => setDrugsFilter(filter);

  const drugsAllElements = drugsList.map((drug) => (
    <CardItem addToCart={addToCart} key={drug.id} card={drug} />
  ));

  const drugsFiltered = drugsList.map(
    (drug) =>
      drug.type === drugsFilter && (
        <CardItem addToCart={addToCart} key={drug.id} card={drug} />
      )
  );

  return (
    <>
      <Flex
        justify={'between'}
        align={'center'}
        gap={'1'}
        my={'3'}
        wrap={'wrap'}
      >
        <Tabs name={'All'} onTabChange={() => changeFilter('All')} />
        <Tabs
          name={'Stimulants'}
          onTabChange={() => changeFilter('Stimulants')}
        />
        <Tabs
          name={'Cannabinoids'}
          onTabChange={() => changeFilter('Cannabinoids')}
        />
        <Tabs name={'Opioids'} onTabChange={() => changeFilter('Opioids')} />
      </Flex>
      <section>
        <Grid
          columns={'2'}
          gap={'3'}
          rows={'repeat(auto-fill, minmax(190px, 1fr)'}
        >
          {drugsFilter === 'All' ? drugsAllElements : drugsFiltered}
        </Grid>
      </section>
    </>
  );
};
