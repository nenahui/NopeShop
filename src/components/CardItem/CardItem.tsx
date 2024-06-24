import { Box, Button, Card, Flex, Heading, Text } from '@radix-ui/themes';

export const CardItem = () => {
  return (
    <Box maxWidth={'190px'}>
      <Card size={'2'}>
        <img src='./amfetamin.jpg' alt='Amphetamine image' />
        <Flex justify={'between'} mb={'2'}>
          <Box>
            <Heading size={'3'} mb={'-2'}>
              Amphetamine
            </Heading>
            <Text color={'gray'} size={'2'}>
              Stimulants
            </Text>
          </Box>
          <Text color={'gray'} size={'2'}>
            x2
          </Text>
        </Flex>
        <Flex justify={'between'} align={'center'} gap={'2'}>
          <Text as={'p'}>1200с (0,5г)</Text>
          <Button variant={'surface'}>Add</Button>
        </Flex>
      </Card>
    </Box>
  );
};
