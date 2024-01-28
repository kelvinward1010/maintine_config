import styles from './style.module.scss';
import { AppShell, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Outlet } from "react-router-dom";
import { Header } from './header/Header';
import { NavBar } from './navbar/NavBar';


export function Layout() {
    const [opened, { toggle }] = useDisclosure();

    return (
        <AppShell
            header={{ 
                height: 60,
            }}
            navbar={{
                width: 250,
                breakpoint: 'sm',
                collapsed: { mobile: !opened },
            }}
            padding="md"
        >
            <AppShell.Header>
                <div className={styles.header}>
                    <Burger
                        opened={opened}
                        onClick={toggle}
                        hiddenFrom="sm"
                        size="sm"
                        color='teal'
                        w={50}
                        ml={10}
                    />
                    <Header />
                </div>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                <div className={styles.navbar}>
                    <NavBar />
                </div>
            </AppShell.Navbar>

            <AppShell.Main>
                <Outlet />
            </AppShell.Main>
        </AppShell>
    )
}