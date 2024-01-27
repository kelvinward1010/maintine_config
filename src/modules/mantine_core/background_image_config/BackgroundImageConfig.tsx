import { BackgroundImage, Box, Center, Text } from "@mantine/core";

export function BackgroundImageConfig() {
    return (
        <Box maw={'100%'} mx="auto">
            <BackgroundImage
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
                radius="sm"
            >
                <Center p="md">
                    <Text c="white">
                        BackgroundImage component can be used to add any content on image. It is useful for hero
                        headers and other similar sections
                    </Text>
                </Center>
            </BackgroundImage>
        </Box>
    )
}
