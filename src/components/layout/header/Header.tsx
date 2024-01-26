import { IconArrowRight, IconBrandMantine, IconExternalLink, IconSearch, IconUserCircle } from '@tabler/icons-react';
import styles from './style.module.scss';
import { Avatar, CloseButton, Flex, Input, Menu, Modal, Text, rem } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';

export function Header() {

    const [search, setSearch] = useState('');
    const [opened, { open, close }] = useDisclosure(false);
    const navigate = useNavigate();

    return (
        <div className={styles.container}>
            <Modal opened={opened} onClose={close} size="xl" title="Authentication">
                {/* Modal content */}
            </Modal>
            <Flex
                mih={50}
                gap="sm"
                justify="flex-start"
                align="center"
                direction="row"
                onClick={() => navigate('/')}
                className={styles.name_logo}
            >
                <IconBrandMantine
                    color={'teal'}
                    size={35}
                />
                <Text c="teal.4" fw={500} size={'xl'}>
                    Maintine Config
                </Text>
            </Flex>
            <Flex
                mih={50}
                gap="md"
                justify="flex-start"
                align="center"
                direction="row"
                wrap="wrap"
                className={styles.nav_main}
            >
                <Text c={'teal.4'} className={styles.namenav}>Home</Text>
                <Text c={'teal.4'} className={styles.namenav}>Skills</Text>
                <Text c={'teal.4'} className={styles.namenav}>Languages</Text>
            </Flex>
            <Flex
                mih={50}
                gap="sm"
                justify="flex-start"
                align="center"
                direction="row"
            >
                <Input
                    placeholder="Search ..."
                    leftSection={<IconSearch size={16} />}
                    miw={250}
                    value={search}
                    onChange={(event) => setSearch(event.currentTarget.value)}
                    rightSectionPointerEvents="all"
                    rightSection={
                        <CloseButton
                            aria-label="Clear input"
                            onClick={() => setSearch('')}
                            style={{ display: search ? undefined : 'none' }}
                        />
                    }
                />
                <Menu shadow="md">
                    <Menu.Target>
                        <Avatar
                            variant="filled"
                            radius="xl"
                            color="teal"
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQNlseMBGrWW3kNaN5I7c5njOdc1pExaacLQSmtOWK5NjlVv0LiSlsf9uSuVHePZr_0ck&usqp=CAU"
                            className={styles.avatar_fig}
                        />
                    </Menu.Target>

                    <Menu.Dropdown>
                        <Menu.Item
                            leftSection={<IconUserCircle style={{ width: rem(14), height: rem(14) }} />}
                            onClick={open}
                        >
                            Profile
                        </Menu.Item>
                        <Menu.Item 
                            component="a" 
                            href="https://mantine.dev"
                            leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
                        >
                            Mantine website
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<IconExternalLink style={{ width: rem(14), height: rem(14) }} />}
                            component="a"
                            href="https://mantine.dev"
                            target="_blank"
                        >
                            Facebook
                        </Menu.Item>
                        <Menu.Item
                            leftSection={<IconArrowRight style={{ width: rem(14), height: rem(14) }} />}
                            component="a"
                            href="/sign_up"
                        >
                            Sign Up
                        </Menu.Item>
                    </Menu.Dropdown>
                </Menu>
            </Flex>
        </div>
    )
}
