import React from 'react';
import { Grid, Box, Stat, StatLabel, StatNumber, StatHelpText } from '@chakra-ui/react';
import Header from '../components/Header';

function Dashboard() {
  return (
   <div>
       <Header  title= "Dashboard"/>
       <Box p={6}>
      <Grid templateColumns="repeat(4, 1fr)" gap={6}>
        <Box bg="white" p={6} rounded="lg" shadow="md">
          <Stat>
            <StatLabel>Total Articles</StatLabel>
            <StatNumber>45</StatNumber>
            <StatHelpText>Feb 1 - Feb 28</StatHelpText>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" shadow="md">
          <Stat>
            <StatLabel>Active Users</StatLabel>
            <StatNumber>150</StatNumber>
            <StatHelpText>↗︎ 23 (30%)</StatHelpText>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" shadow="md">
          <Stat>
            <StatLabel>Page Views</StatLabel>
            <StatNumber>1,200</StatNumber>
            <StatHelpText>↗︎ 250 (25%)</StatHelpText>
          </Stat>
        </Box>
        <Box bg="white" p={6} rounded="lg" shadow="md">
          <Stat>
            <StatLabel>Comments</StatLabel>
            <StatNumber>89</StatNumber>
            <StatHelpText>Last 7 days</StatHelpText>
          </Stat>
        </Box>
      </Grid>
    </Box>
   </div>
  );
}

export default Dashboard;