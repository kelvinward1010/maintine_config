import { NpmIcon, TypeScriptIcon, YarnIcon } from '@mantinex/dev-icons';
import styles from './style.module.scss';
import { Button, Grid, Group, Kbd, List, Text, Title, rem } from '@mantine/core';
import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight';
import { Notifications } from '@mantine/notifications';
import { notifications } from '@mantine/notifications';
import { IconCheck } from '@tabler/icons-react';

export function NotificationsSystem() {

    const yarnIcon = <YarnIcon size={15} />;
    const npmIcon = <NpmIcon size={15} />;
    const tsIcon = <TypeScriptIcon size={15} />;

    const contentInstall1 =
        `yarn add @mantine/notifications`

    const contentInstall2 =
        `npm install @mantine/notifications`

    const contentImport1 =
        `import '@mantine/notifications/styles.css';`

    const contentCode1 =
    `<Group justify="center">
        <Button
            onClick={() =>
                notifications.show({
                    title: 'Notification with custom styles',
                    message: 'It is default blue',
                })
            }
        >
            Default notification
        </Button>

        <Button
            color="red"
            onClick={() =>
                notifications.show({
                    color: 'red',
                    title: 'Notification with custom styles',
                    message: 'It is red',
                })
            }
        >
            Error notification
        </Button>
    </Group>`

    const contentCode2 =
    `<Button
        onClick={() => {
            const id = notifications.show({
            loading: true,
            title: 'Loading your data',
            message: 'Data will be loaded in 3 seconds, you cannot close this yet',
            autoClose: false,
            withCloseButton: false,
            });

            setTimeout(() => {
            notifications.update({
                id,
                color: 'teal',
                title: 'Data was loaded',
                message: 'Notification will close in 2 seconds, you can close this notification now',
                icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                loading: false,
                autoClose: 2000,
            });
            }, 3000);
        }}
    >
        Show update notification
    </Button>`

    return (
        <div className={styles.container}>
            <Notifications />
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
                                        icon: yarnIcon,
                                    },
                                    {
                                        fileName: 'npm',
                                        code: contentInstall2,
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
                <Title order={5} c={'teal.5'}>2. Notifications container position</Title>
                <div className={styles.box_1_center}>
                    <Text>
                        Notifications container has fixed position inside, 
                        it is rendered inside Portal by default. Position 
                        cannot be changed per notification. Notifications 
                        supports the following positions:
                    </Text>
                    <List>
                        <List.Item><Kbd>top-left</Kbd></List.Item>
                        <List.Item><Kbd>top-right</Kbd></List.Item>
                        <List.Item><Kbd>top-center</Kbd></List.Item>
                        <List.Item><Kbd>bottom-left</Kbd></List.Item>
                        <List.Item><Kbd>bottom-right</Kbd></List.Item>
                        <List.Item><Kbd>bottom-center</Kbd></List.Item>
                    </List>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>3. Customize notification styles</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                            <div>
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
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <Group justify="center">
                                <Button
                                    onClick={() =>
                                        notifications.show({
                                            title: 'Notification with custom styles',
                                            message: 'It is default blue',
                                        })
                                    }
                                >
                                    Default notification
                                </Button>

                                <Button
                                    color="red"
                                    onClick={() =>
                                        notifications.show({
                                            color: 'red',
                                            title: 'Notification with custom styles',
                                            message: 'It is red',
                                        })
                                    }
                                >
                                    Error notification
                                </Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>4. Update notification</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
                            <div>
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
                                            code: contentCode2,
                                            language: 'tsx',
                                            icon: tsIcon,
                                        },
                                    ]}
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <Group justify="center">
                                <Button
                                    onClick={() => {
                                        const id = notifications.show({
                                        loading: true,
                                        title: 'Loading your data',
                                        message: 'Data will be loaded in 3 seconds, you cannot close this yet',
                                        autoClose: false,
                                        withCloseButton: false,
                                        });

                                        setTimeout(() => {
                                        notifications.update({
                                            id,
                                            color: 'teal',
                                            title: 'Data was loaded',
                                            message: 'Notification will close in 2 seconds, you can close this notification now',
                                            icon: <IconCheck style={{ width: rem(18), height: rem(18) }} />,
                                            loading: false,
                                            autoClose: 2000,
                                        });
                                        }, 3000);
                                    }}
                                >
                                    Show update notification
                                </Button>
                            </Group>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}