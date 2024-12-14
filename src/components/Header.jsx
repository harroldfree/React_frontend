import React from 'react';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { FiBell, FiUser } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function Header(props) {

  return (
    
    <Flex
      bg="white"
      p={4}
      justifyContent="space-between"
      alignItems="center"
      borderBottom="1px"
      borderColor="gray.200"
    >
      <Text fontSize="lg" fontWeight="bold">{props.title}</Text>
      <Flex alignItems="center" gap={4}>
        <Button variant="ghost" size="sm">
          <FiBell />
        </Button>
       <Link to={"/login"}>
          <Button variant="ghost" size="sm" >
              <FiUser />
            </Button>
       </Link>
      </Flex>
    </Flex>
  );
}

export default Header;