import React  from 'react';
import { Box, Container, Grid, GridItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import ProjectCard from '../../Component/Card';
import SubHeader from '../../Component/SubHeader';


export default function ProjectList() {
  return (

    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <SubHeader/>

        <SimpleGrid   columns={4} spacing={6}>
          <ProjectCard />
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
          <ProjectCard/>
        </SimpleGrid>




    </Box>

  );
}

