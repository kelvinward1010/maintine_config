import { Grid, Image, Title } from "@mantine/core";
import styles from './style.module.scss';
import { TypeScriptIcon } from "@mantinex/dev-icons";
import { CodeHighlightTabs } from "@mantine/code-highlight";


export function ImageConfig() {
    const tsIcon = <TypeScriptIcon size={15} />;

    const contentCode1 =
    `<Image
        radius="md"
        h={200}
        w="auto"
        fit="contain"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
    />`

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
                            <Image
                                radius="md"
                                h={200}
                                w="auto"
                                fit="contain"
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-9.png"
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}