import { TypeScriptIcon } from '@mantinex/dev-icons';
import styles from './style.module.scss';
import { Blockquote, Grid, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { IconInfoCircle } from '@tabler/icons-react';

export function BlockQuoteConfig() {
    const tsIcon = <TypeScriptIcon size={15} />;

    const icon = <IconInfoCircle />;

    const contentCode1 =
    `<Blockquote color="blue" cite="– Forrest Gump" icon={icon} mt="xl">
        Life is like an npm install – you never know what you are going to get.
    </Blockquote>`

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
                            <Blockquote color="blue" iconSize={43} cite="– Forrest Gump" icon={icon} mt="xl">
                                Life is like an npm install – you never know what you are going to get.
                            </Blockquote>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
