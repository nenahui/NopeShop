import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { Flex } from '@radix-ui/themes';

interface Props {
  my?: string;
}

export const Toolbar: React.FC<Props> = ({ my }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const updateClock = () => {
      setCurrentTime(new Date());
    };

    const intervalId = setInterval(updateClock, 60000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = format(currentTime, 'HH:mm');

  return (
    <Flex justify={'between'} align={'center'} my={my}>
      <time>{formatTime}</time>
      <img src='./StatusIcons.svg' alt='status icons' />
    </Flex>
  );
};
