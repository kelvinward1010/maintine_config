import { BackgroundImage, Box, Center, Grid, Text, Title } from "@mantine/core";
import styles from './style.module.scss';
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { TypeScriptIcon } from "@mantinex/dev-icons";

export function BackgroundImageConfig() {

    const tsIcon = <TypeScriptIcon size={15} />;

    const contentCode1 =
    `<BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-6.png"
        radius="sm"
    >
        <Center p="md">
            <Text c="white">
                BackgroundImage component can be used to add any content on image. It is useful for hero
                headers and other similar sections
            </Text>
        </Center>
    </BackgroundImage>`

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Usage</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                                <Title order={6} c={'teal.5'}>Code</Title>
                                <CodeHighlightTabs
                                    withExpandButton
                                    defaultExpanded={false}
                                    expandCodeLabel="Show full code"
                                    collapseCodeLabel="Show less"
                                    className={styles.code_highlight}
                                    code={[
                                        {
                                            fileName: 'demo.tsx',
                                            code: contentCode1,
                                            language: 'tsx',
                                            icon: tsIcon,
                                        },
                                    ]}
                                />
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
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
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
