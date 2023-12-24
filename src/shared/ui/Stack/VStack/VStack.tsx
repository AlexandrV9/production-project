import { FC } from 'react';

import { Flex, FlexProps } from '../Flex/Flex';

type VStackProps = Omit<FlexProps, 'direction'>; // Из FlexProps исключаем поле "direction"

export const VStack: FC<VStackProps> = (props) => {
  const { align = 'start' } = props;
  return <Flex {...props} direction='column' align={align} />;
};
