import * as React from "react"
import {
    ChakraProvider,
    Box,
    Text,
    Link,
    VStack,
    Code,
    Grid,
    theme
} from "@chakra-ui/react"
import profilePicture from "../pictures/profilePicture.jpg"
import Navbar from "../components/navbar"
import { Image } from '@chakra-ui/react'

export const FrontPage = () => (
    <ChakraProvider theme={theme}>
        <Box textAlign="center" fontSize="xl">
            <Navbar />
            <Grid minH="100vh" p={3}>
                <VStack spacing={8}>
                    <Box alignSelf="flex-end">
                        <Image
                            borderRadius='full'
                            src={profilePicture}
                            alt='Rasmus Skriver'
                            w={153 * 1.5}
                            h={204 * 1.5}
                            alignSelf="flex-end"
                            m={8}
                        />
                    </Box>
                    <Text>
                        Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
                    </Text>
                    <Link
                        color="teal.500"
                        href="https://chakra-ui.com"
                        fontSize="2xl"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn Chakra
                    </Link>
                </VStack>
            </Grid>
        </Box>
    </ChakraProvider>
)
