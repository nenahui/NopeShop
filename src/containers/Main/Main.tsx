import { CardItem } from '../../components/CardItem/CardItem';
import { Grid } from '@radix-ui/themes';
import { drugsTypes, ICard } from '../../types';
import React from 'react';

export interface Props {
  drugsList: ICard[];
  currentFilter: drugsTypes;
}

export const Main: React.FC<Props> = ({ drugsList, currentFilter }) => {
  const drugsAllElements = drugsList.map((drug) => (
    <CardItem key={drug.id} card={drug} />
  ));

  const drugsFiltered = drugsList.map(
    (drug) =>
      drug.type === currentFilter && <CardItem key={drug.id} card={drug} />
  );

  return (
    <>
      <section>
        <Grid
          columns={'2'}
          gap={'3'}
          rows={'repeat(auto-fill, minmax(190px, 1fr)'}
        >
          {currentFilter === 'All' ? drugsAllElements : drugsFiltered}
        </Grid>
      </section>
    </>
  );
};
