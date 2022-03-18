import React  from 'react';
import { Box, Container, Grid, GridItem, SimpleGrid, useColorModeValue } from '@chakra-ui/react';
import ProjectCard from '../../Component/Card';
import SubHeader from '../../Component/SubHeader';
import Carousell from '../../Component/Carousell';
import { Center, Square, Circle } from '@chakra-ui/react'


export default function ProjectList() {
  return (

    <Box bg={useColorModeValue('gray.100', 'gray.700')}>

      <SubHeader/>
      <Center >
        <Carousell />
      </Center>

        <SimpleGrid   columns={4} spacing={6}>
          <ProjectCard name={'Gene Gulanes'} username={'Retro eMagazine'} description={'KodeGo Mini Project 1 '} github={'https://github.com/GeneGulanesJr/KodeGoMiniProject1'} projlink={'https://genegulanesjr.github.io/KodeGoMiniProject1/'} tag1={'HTML'} tag2={'CSS'} tag3={'JavaScript'} image={'https://avatars.githubusercontent.com/u/26081692?v=4'}/>
          <ProjectCard name={'Pam Astorga'} username={'eMagazine'} description={'KodeGo Mini Project1'} github={'https://github.com/pam-astorga/emag.io'} projlink={'https://pam-astorga.github.io/emag.io/'} tag1={'HTML'} tag2={'CSS'} tag3={'JavaScript'} image={'https://pam-astorga.github.io/eportfolio/images/pic.png'}/>
          <ProjectCard name={'Sheen Durens'} username={'eMagazine'} description={'KodeGo Mini Project1'} github={'https://github.com/Onaneehsyu/Onaneehsyu.github.io'} projlink={'https://onaneehsyu.github.io/'} tag1={'HTML'} tag2={'CSS'} tag3={'JavaScript'} image={'https://avatars.githubusercontent.com/u/99162450?v=4'}/>
          <ProjectCard name={'Gene Gulanes'} username={'Coding Journal'} description={'A Coding Journal That records Thoughts and Task'} github={'https://github.com/GeneGulanesJr/Kodego-Simple-Coding-Journal'} projlink={'https://kodego-simple-coding-journal.vercel.app/'} tag1={'ChakraUi'} tag2={'React'} tag3={'JavaScript'} image={'https://avatars.githubusercontent.com/u/26081692?v=4'}/>
          <ProjectCard name={'Pam Astorga'} username={'eCalculator'} description={'A Simple E Calculator'} github={'https://github.com/pam-astorga/calculator.io'} projlink={'https://pam-astorga.github.io/calculator.io/'} tag1={'HTML'} tag2={'CSS'} tag3={'JavaScript'} image={'https://pam-astorga.github.io/eportfolio/images/pic.png'}/>
          <ProjectCard name={'Pam Astorga'} username={'PatientForm'} description={'Hospital Patient Form'} github={'https://github.com/pam-astorga/patient.io'} projlink={'https://pam-astorga.github.io/patient.io/'} tag1={'HTML'} tag2={'CSS'} tag3={'JavaScript'} image={'https://pam-astorga.github.io/eportfolio/images/pic.png'}/>

          <ProjectCard name={'Gene Gulanes'} username={'FHSIS E Maternal Care'} description={'A Digitalized FHSIS eMaternal Care for DOH '} github={'https://github.com/GeneGulanesJr/react-firebase-auth'} projlink={'https://capstone-chakraui.vercel.app/'} tag1={'PWA'} tag2={'Serverless'} tag3={'Firebase'} image={'https://avatars.githubusercontent.com/u/26081692?v=4'}/>
          <ProjectCard name={'Gene Gulanes'} username={'Coding Journal'} description={'Online Payment Solution Using Dragonpay '} github={'https://github.com/GeneGulanesJr/UIC-Payment-System-Coldfusion-and-Coldbox'} projlink={'apps.payment.uic.edu.ph'} tag1={'Coldfusion'} tag2={'Coldbox'} tag3={'MSSql'} image={'https://avatars.githubusercontent.com/u/26081692?v=4'}/>
          <ProjectCard name={'Gene Gulanes'} username={'DCTRCDD '} description={'A MERN Stack Application for recording patients details '} github={'https://github.com/GeneGulanesJr/DCTRCDD'} projlink={'https://kodego-simple-coding-journal.vercel.app/'} tag1={'React'} tag2={'Mongo'} tag3={'Express'} image={'https://avatars.githubusercontent.com/u/26081692?v=4'}/>

        </SimpleGrid>




    </Box>

  );
}

