import { Grid, Text, Title } from '@mantine/core';
import styles from './style.module.scss';
import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight';
import { NpmIcon, TypeScriptIcon, YarnIcon } from '@mantinex/dev-icons';

export function CodeHighLight() {

    const yarnIcon = <YarnIcon size={15} />;
    const npmIcon = <NpmIcon size={15} />;
    const tsIcon = <TypeScriptIcon size={15} />;

    const contentInstall1 =
    `yarn add @mantine/code-highlight`

    const contentInstall2 =
    `npm install @mantine/code-highlight`

    const contentImport1 =
    `import '@mantine/code-highlight/styles.css';`

    const contentCode1='<CodeHighlight code={exampleCode} language="tsx" />'

    const contentCode2 =
    `<CodeHighlightTabs
        className={styles.code_highlight}
        code={[
            { 
                fileName: 'yarn', 
                code: contentInstall1, 
                language: 'tsx',
                icon: yarnIcon,
            },
            { 
                fileName: 'npm', 
                code: contentInstall2, 
                language: 'ts',
                icon: npmIcon,
            },
        ]}
    />`

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Installation</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlightTabs
                                className={styles.code_highlight}
                                code={[
                                    { 
                                        fileName: 'yarn', 
                                        code: contentInstall1, 
                                        language: 'tsx',
                                        icon: yarnIcon,
                                    },
                                    { 
                                        fileName: 'npm', 
                                        code: contentInstall2, 
                                        language: 'ts',
                                        icon: npmIcon,
                                    },
                                ]}
                            />
                        </Grid.Col>
                    </Grid>
                    <Text mt={10}>After installation import package styles at the root of your application:</Text>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlight
                                className={styles.code_highlight}
                                code={contentImport1}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>2. Usage Code Hightlight</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlightTabs
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
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>3. Usage Code HightlightTabs</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlightTabs
                                className={styles.code_highlight}
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
                    </Grid>
                </div>
            </div>
        </div>
    )
}