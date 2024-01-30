import styles from './style.module.scss';
import { TypeScriptIcon } from '@mantinex/dev-icons';
import { Grid, Highlight, Input, Text, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { useState } from 'react';

export function HighlightConfig() {

    const [highlight, setHighlight] = useState<any>('this');
    const [child, setChild] = useState<any>('Highlight This, definitely THIS and also this!');
    const tsIcon = <TypeScriptIcon size={15} />;

    const contentCode1 =
    `<Highlight 
        color="orange" 
        highlight={'${highlight}'}
    >
        Highlight This, definitely THIS and also this!
    </Highlight>`

    const contentCode2 =
    `<Highlight 
        highlight={['this', 'that']}
    >
        Highlight this and also that
    </Highlight>`

    const contentCode3 =
    `<Highlight
        component="a"
        href="https://mantine.dev"
        target="_blank"
        highlight="mantine"
        fw={500}
        c="var(--mantine-color-anchor)"
    >
        Mantine website
    </Highlight>`

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Usage</Title>
                <div className={styles.box_1_center}>
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>1. Highlight</Text>
                            <Input
                                type={'text'}
                                placeholder='Higlight'
                                value={highlight}
                                onChange={(e) => setHighlight(e.target.value)}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>2. Children</Text>
                            <Input
                                type={'text'}
                                placeholder='children'
                                value={child}
                                onChange={(e) => setChild(e.target.value)}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Code</Title>
                            <CodeHighlightTabs
                                withExpandButton
                                defaultExpanded={false}
                                expandCodeLabel="Show full code"
                                collapseCodeLabel="Show less"
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
                            <Highlight 
                                color="orange" 
                                highlight={highlight}
                            >
                                {child}
                            </Highlight>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_other}>
                <Title order={5} c={'teal.5'}>2. Highlight multiple substrings</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Code</Title>
                            <CodeHighlightTabs
                                withExpandButton
                                defaultExpanded={false}
                                expandCodeLabel="Show full code"
                                collapseCodeLabel="Show less"
                                code={[
                                    {
                                        fileName: 'demo.tsx',
                                        code: contentCode2,
                                        language: 'tsx',
                                        icon: tsIcon,
                                    },
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <Highlight 
                                highlight={['this', 'that']}
                            >
                                Highlight this and also that
                            </Highlight>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_other}>
                <Title order={5} c={'teal.5'}>3. Text props</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Code</Title>
                            <CodeHighlightTabs
                                withExpandButton
                                defaultExpanded={false}
                                expandCodeLabel="Show full code"
                                collapseCodeLabel="Show less"
                                code={[
                                    {
                                        fileName: 'demo.tsx',
                                        code: contentCode3,
                                        language: 'tsx',
                                        icon: tsIcon,
                                    },
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <Highlight
                                component="a"
                                href="https://mantine.dev"
                                target="_blank"
                                highlight="mantine"
                                fw={500}
                                c="var(--mantine-color-anchor)"
                            >
                                Mantine website
                            </Highlight>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}