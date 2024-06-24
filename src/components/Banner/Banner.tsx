import React from 'react';
import styles from './Banner.module.css';
import { Box, Heading, Text } from '@radix-ui/themes';

interface Props {
  my?: string;
}

export const Banner: React.FC<Props> = ({ my }) => {
  return (
    <Box className={styles.banner} my={my}>
      <Heading size={'8'} className={styles.bannerTitle}>
        Free drug!
        <br />
        For your first order
      </Heading>
      <Text size={'1'} align={'center'} as={'p'}>
        *Charges may apply depending on the customers location
      </Text>
    </Box>
  );
};
