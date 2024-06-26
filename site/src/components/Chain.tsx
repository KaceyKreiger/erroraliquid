import { Flex, Text } from '@chakra-ui/react';

import { CHAINS } from '../chains';

export const Chain = ({ chainId }: { chainId?: number }) => {
  if (chainId === undefined) return null;

  const name = chainId ? CHAINS[chainId]?.chainName : undefined;

  if (name) {
    return (
      <Flex gap={2}>
        <Text>Chain:</Text>
        <Text fontWeight="bold">
          {name} ({chainId})
        </Text>
      </Flex>
    );
  }

  return (
    <Flex gap={2}>
      <Text>Chain Id:</Text>
      <Text fontWeight="bold">{chainId}</Text>
    </Flex>
  );
};
