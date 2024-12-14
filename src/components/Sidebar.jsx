import React from 'react';
import { Box, VStack, Link, Text } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FiHome, FiFileText, FiUsers, FiSettings } from 'react-icons/fi';

const MenuItem = ({ icon, children, to }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      w="full"
      p={3}
      borderRadius="md"
      _hover={{ bg: 'gray.700' }}
      display="flex"
      alignItems="center"
    >
      {icon}
      <Text ml={2}>{children}</Text>
    </Link>
  );
};

function Sidebar() {
  return (
    <Box
      bg="gray.800"
      w="250px"
      h="100vh"
      color="white"
      p={5}
    >
      <VStack spacing={4} align="stretch">
        <Text fontSize="xl" fontWeight="bold" mb={6}>CMS Admin</Text>
        <MenuItem to="/dashboard" icon={<FiHome />}>Dashboard</MenuItem>
        <MenuItem to="/articles" icon={<FiFileText />}>Articles</MenuItem>
        <MenuItem to="/users" icon={<FiUsers />}>Users</MenuItem>
        <MenuItem to="/settings" icon={<FiSettings />}>Settings</MenuItem>
      </VStack>
    </Box>
  );
}

export default Sidebar;