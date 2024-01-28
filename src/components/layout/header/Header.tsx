import { IconArrowRight, IconBrandMantine, IconExternalLink, IconSearch, IconUserCircle } from '@tabler/icons-react';
import styles from './style.module.scss';
import { Avatar, CloseButton, Flex, Group, Input, Menu, Text, rem } from '@mantine/core';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDisclosure } from '@mantine/hooks';
import { Profile } from './modals/profile/Profile';
import { actions } from './data';
import { Spotlight, spotlight } from '@mantine/spotlight';

export function Header() {

    const navigate = useNavigate();
    const [search, setSearch] = useState('');
    const [opened, { open, close }] = useDisclosure(false);

    const items = actions
        .filter((item) => item.title.toLowerCase().includes(search.toLowerCase().trim()))
        .slice(0,8)
        .map((item) => (
            <Spotlight.Action 
                highlightQuery 
                key={item.id} 
                onClick={() => navigate(item.url)}
            >
                <Group wrap="nowrap" w="100%">
                    <div style={{ flex: 1 }}>
                        <Text>{item.title}</Text>

                        {item.description && (
                            <Text opacity={0.6} size="xs">
                                {item.description}
                            </Text>
                        )}
                    </div>
                </Group>
            </Spotlight.Action>
        ));

    return (
        <>
            <Profile opened={opened} close={close} />
            <Spotlight.Root query={search} onQueryChange={setSearch}>
                <Spotlight.Search placeholder="Search..." leftSection={<IconSearch stroke={1.5} />} />
                <Spotlight.ActionsList>
                    {items.length > 0 ? items : <Spotlight.Empty>Nothing found...</Spotlight.Empty>}
                </Spotlight.ActionsList>
            </Spotlight.Root>
            <div className={styles.container}>
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
                    gap="sm"
                    justify="flex-start"
                    align="center"
                    direction="row"
                >
                    <Input
                        placeholder="Search ..."
                        leftSection={<IconSearch size={16} />}
                        miw={250}
                        onClick={spotlight.open}
                        rightSectionPointerEvents="all"
                        rightSection={
                            <CloseButton
                                aria-label="Clear input"
                                onClick={() => setSearch('')}
                                style={{ display: search ? undefined : 'none' }}
                            />
                        }
                        style={{
                            cursor: 'pointer',
                        }}
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
                                href="/sign_in"
                            >
                                Sign Out
                            </Menu.Item>
                        </Menu.Dropdown>
                    </Menu>
                </Flex>
            </div>
        </>
    )
}
