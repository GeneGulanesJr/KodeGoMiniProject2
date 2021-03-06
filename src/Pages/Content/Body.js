import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,

    useColorModeValue,
} from '@chakra-ui/react';


import { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Body() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'blue.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('blue.50', 'blue.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        Our Services
                    </Text>
                    <Heading>Bring That Idea To Life</Heading>
                    <Text color={'gray.500'} fontSize={'lg'}>
                        We are a small team of designers and developers that will build your a modern web app.
                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature

                            iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                            text={'Staff Augmentation'}
                        />
                        <Feature

                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'Website/PWA Development'}
                        />
                        <Feature

                            iconBg={useColorModeValue('purple.100', 'purple.900')}
                            text={'Consultation'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Image
                        rounded={'md'}
                        alt={'feature image'}
                        src={
                            'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
                        }
                        objectFit={'cover'}
                    />
                </Flex>
            </SimpleGrid>
        </Container>
    );
}