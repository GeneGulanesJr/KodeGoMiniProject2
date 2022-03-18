import React from 'react';
import {
  Box,
  Heading,
  Link,
  Image,
  Text,
  Divider,
  HStack,
  Tag,
  Wrap,
  WrapItem,
  SpaceProps,
  useColorModeValue,
  Container,
  Button, Center, Stack,
} from '@chakra-ui/react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';
import { SiLinkedin } from 'react-icons/si';
import { FiFileText, FiGithub } from 'react-icons/fi';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};


const TeamList = () => {
  return (
    <Container maxW={'7xl'} p='12'>
      <Heading as='h1'>Our Team</Heading>
      <Box
        marginTop={{ base: '1', sm: '5' }}
        display='flex'
        flexDirection={{ base: 'column', sm: 'row' }}
        justifyContent='space-between'>
        <Box
          display='flex'
          flex='1'
          marginRight='3'
          position='relative'
          alignItems='center'>
          <Box
            width={{ base: '100%', sm: '85%' }}
            zIndex='2'
            marginLeft={{ base: '0', sm: '5%' }}
            marginTop='5%'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              <Image
                borderRadius='lg'
                src={
                  'https://avatars.githubusercontent.com/u/26081692?v=4'
                }
                alt='some good alt text'
                objectFit='contain'
              />
            </Link>
          </Box>
          <Box zIndex='1' width='100%' position='absolute' height='100%'>
            <Box
              bgGradient={useColorModeValue(
                'radial(orange.600 1px, transparent 1px)',
                'radial(orange.300 1px, transparent 1px)',
              )}
              backgroundSize='20px 20px'
              opacity='0.4'
              height='100%'
            />
          </Box>
        </Box>
        <Box
          display='flex'
          flex='1'
          flexDirection='column'
          justifyContent='center'
          marginTop={{ base: '3', sm: '0' }}>
          <BlogTags tags={[' Team Leader']} />
          <Heading marginTop='1'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              Gene E. Gulanes Jr
            </Link>
          </Heading>
          <Text
            as='p'
            marginTop='2'
            color={useColorModeValue('gray.700', 'gray.200')}
            fontSize='lg'>
            I’m a Software Developer specialized in Healthcare Technologies and building serverless applications.
            Currently, I’m currently on building a payment solution at University of Immaculate Conception and I am
            currently taking a Bootcamp at KodeGo.ph.
          </Text>
          <Center p={8}>
            <Stack spacing={2} align={'center'} maxW={'md'} w={'full'}>
              {/* Facebook */}
              <Button w={'full'} colorScheme={'facebook'} leftIcon={<FaFacebook />}>

                <Link href={'https://www.facebook.com/JrGene'}>Facebook</Link>

              </Button>


              {/* LinkedIn */}
              <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>

                <Link href={'https://www.linkedin.com/in/gene-gulanes-748a22213/'}>Linkedin</Link>

              </Button>

              {/* Messenger */}
              <Button w={'full'} variant={'outline'} leftIcon={<FiGithub />}>

                <Link href={'https://github.com/GeneGulanesJr'}>Github</Link>

              </Button>

              <Button w={'full'} variant={'outline'} leftIcon={<FiFileText />}>
                <Link href={'https://www.genegulanesjr.tech/'}>Resume</Link>
              </Button>
            </Stack>
          </Center>
        </Box>
      </Box>
      <Heading as='h2' marginTop='5'>
        Team Members
      </Heading>
      <Divider marginTop='5' />
      <Wrap spacing='30px' marginTop='5'>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    'https://pam-astorga.github.io/eportfolio/images/pic.png'
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['FrontEnd', 'UI/UX Design']} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                Pam Astorga
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              A full stack developer is someone who works with both the front end and back end of a web application. The
              front end is responsible for the visual look and feel of the website, while back end is responsible for
              the behind the scenes logic and infrastructure of the site.
            </Text>
            <Center p={8}>
              <HStack spacing={2} align={'center'} maxW={'md'} w={'small'}>

                <Button w={'small'} colorScheme={'facebook'}>
                  <Link href={'https://www.facebook.com/pamelaamor'}><FaFacebook /></Link>
                </Button>

                <Button w={'small'} colorScheme={'messenger'}>
                  <Link href={'https://www.facebook.com/pamelaamor'}><SiLinkedin /></Link>
                </Button>

                {/* Messenger */}
                <Button w={'small'} variant={'outline'}>
                  <Link href={'https://github.com/pam-astorga'}><FiGithub /></Link>
                </Button>

                <Button w={'small'} variant={'outline'}>
                  <Link href={'https://pam-astorga.github.io/eportfolio/'}><FiFileText /></Link>
                </Button>
              </HStack>
            </Center>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    'https://avatars.githubusercontent.com/u/99162450?v=4'
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Mobile Apps', 'Project Management']} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                Sheen Cyril Durens
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              I am a positive, enthusiastic and competent Web Developer who, over the years, has built up a diverse
              range of skills, qualities and attributes that guarantee I will perform highly in this role.
            </Text>
            <Center p={8}>
              <HStack spacing={2} align={'center'} maxW={'md'} w={'small'}>
                {/* Facebook */}
                <Button w={'small'} colorScheme={'facebook'}>
                  <Link href={'https://www.facebook.com/cyrilsheen.durens'}><FaFacebook /> </Link>
                </Button>


                {/* LinkedIn */}
                <Button w={'small'} colorScheme={'messenger'}>
                  <Link href={'https://www.facebook.com/cyrilsheen.durens'}><SiLinkedin /> </Link>
                </Button>

                {/* Messenger */}
                <Button w={'small'} variant={'outline'}>
                  <Link href={'https://github.com/Onaneehsyu'}><FiGithub /> </Link>
                </Button>

                <Button w={'small'} variant={'outline'} leftIcon={<FiFileText />}>
                  <Center>

                  </Center>
                </Button>
              </HStack>
            </Center>
          </Box>
        </WrapItem>
        <WrapItem width={{ base: '100%', sm: '45%', md: '45%', lg: '30%' }}>
          <Box w='100%'>
            <Box borderRadius='lg' overflow='hidden'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                <Image
                  transform='scale(1.0)'
                  src={
                    'https://images.unsplash.com/photo-1534294668821-28a3054f4256?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80'
                  }
                  alt='some text'
                  objectFit='contain'
                  width='100%'
                  transition='0.3s ease-in-out'
                  _hover={{
                    transform: 'scale(1.05)',
                  }}
                />
              </Link>
            </Box>
            <BlogTags tags={['Future Employee']} marginTop='3' />
            <Heading fontSize='xl' marginTop='2'>
              <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
                This Could Be you
              </Link>
            </Heading>
            <Text as='p' fontSize='md' marginTop='2'>
              Join Now
            </Text>
            <Center p={4}>
              <HStack spacing={2} align={'center'} maxW={'md'} w={'small'}>


                <Button w={'small'} variant={'outline'}>
                  <Link href={'joinus'}>Join</Link>
                </Button>

              </HStack>
            </Center>
          </Box>
        </WrapItem>
      </Wrap>

    </Container>
  );
};

export default TeamList;