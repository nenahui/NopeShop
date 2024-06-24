import { CardItem } from '../../components/CardItem/CardItem';
import { Flex } from '@radix-ui/themes';

export const Main = () => {
  return (
    <>
      <section>
        <Flex justify={'center'} align={'center'} gap={'3'} wrap={'wrap'}>
          <CardItem />
          <CardItem />
          <CardItem />
          <CardItem />
        </Flex>
      </section>
    </>
  );
};
