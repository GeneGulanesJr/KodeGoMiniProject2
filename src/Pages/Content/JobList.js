import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  ListItem, Link,
} from '@chakra-ui/react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { MdLocalShipping } from 'react-icons/md';

export default function JobList() {
  return (
    <Container maxW={'7xl'}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
          <Image
            rounded={'md'}
            alt={'product image'}
            src={
              'https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
            }
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 3 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
              Backend Engineer
            </Heading>
            <Text
              color={useColorModeValue('gray.900', 'gray.400')}
              fontWeight={300}
              fontSize={'2xl'}>
              Remote
            </Text>
            <Text
              color={useColorModeValue('gray.500', 'gray.400')}
              fontSize={'2xl'}
              fontWeight={'300'}>
              Responsibilities
            </Text>
          </Box>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.200', 'gray.600')}
              />
            }>
            <VStack spacing={{ base: 2, sm: 3 }}>
              <Text fontSize={'lg'}>
                Involve all aspects of the software life cycle including gathering requirements from the business, analysis of existing systems/functionality, design and implementation, all the way through to production rollout and subsequent support

                Develop, enhance, and maintain web applications for the digital financial platform, including coding, debugging, testing for the system

                Perform system development according to functional and technical requirements

                Work closely withdifferent teams on system integration

                Handle other ad-hoc tasks as assigned
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
                color={useColorModeValue('yellow.500', 'yellow.300')}
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Skills
              </Text>

              <SimpleGrid columns={{ base: 1, md: 1 }} spacing={10}>
                <List spacing={1}>
                  <ListItem>Deep understanding of deploying or hosting.</ListItem>
                  <ListItem>Knowledge of version control (Git and GitHub).</ListItem>{' '}
                  <ListItem>In-depth understanding of accessibility and security compliances.</ListItem>
                </List>

              </SimpleGrid>
            </Box>




          </Stack>




          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            bg={useColorModeValue('gray.900', 'gray.50')}
            color={useColorModeValue('white', 'gray.900')}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            <Link href='joinus' >
              Apply
            </Link>

          </Button>

          <Stack direction='row' alignItems='center' justifyContent={'center'}>


          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
}