import { Badge, Grid, NavLink, Title } from "@mantine/core";
import styles from './style.module.scss';
import { IconActivity, IconChevronRight, IconCircleOff, IconFingerprint, IconGauge, IconHome2 } from "@tabler/icons-react";
import { CodeHighlightTabs } from "@mantine/code-highlight";
import { TypeScriptIcon } from "@mantinex/dev-icons";

export function NavlinkConfig() {

    const tsIcon = <TypeScriptIcon size={15} />;

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Usage</Title>
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
                            <>
                                <NavLink
                                    href="#required-for-focus"
                                    label="With icon"
                                    leftSection={<IconHome2 size="1rem" stroke={1.5} />}
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="With right section"
                                    leftSection={<IconGauge size="1rem" stroke={1.5} />}
                                    rightSection={
                                        <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                    }
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="Disabled"
                                    leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
                                    disabled
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="With description"
                                    description="Additional information"
                                    leftSection={
                                        <Badge size="xs" color="red" circle>
                                            3
                                        </Badge>
                                    }
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="Active subtle"
                                    leftSection={<IconActivity size="1rem" stroke={1.5} />}
                                    rightSection={
                                        <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                    }
                                    variant="subtle"
                                    active
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="Active light"
                                    leftSection={<IconActivity size="1rem" stroke={1.5} />}
                                    rightSection={
                                        <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                    }
                                    active
                                />
                                <NavLink
                                    href="#required-for-focus"
                                    label="Active filled"
                                    leftSection={<IconActivity size="1rem" stroke={1.5} />}
                                    rightSection={
                                        <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
                                    }
                                    variant="filled"
                                    active
                                />
                            </>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>2. Nested NavLinks</Title>
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
                            <>
                                <NavLink
                                    href="#required-for-focus"
                                    label="First parent link"
                                    leftSection={<IconGauge size="1rem" stroke={1.5} />}
                                    childrenOffset={28}
                                >
                                    <NavLink href="#required-for-focus" label="First child link" />
                                    <NavLink label="Second child link" href="#required-for-focus" />
                                    <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
                                        <NavLink label="First child link" href="#required-for-focus" />
                                        <NavLink label="Second child link" href="#required-for-focus" />
                                        <NavLink label="Third child link" href="#required-for-focus" />
                                    </NavLink>
                                </NavLink>

                                <NavLink
                                    href="#required-for-focus"
                                    label="Second parent link"
                                    leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
                                    childrenOffset={28}
                                    defaultOpened
                                >
                                    <NavLink label="First child link" href="#required-for-focus" />
                                    <NavLink label="Second child link" href="#required-for-focus" />
                                    <NavLink label="Third child link" href="#required-for-focus" />
                                </NavLink>
                            </>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

const contentCode1 =
    `<>
<NavLink
  href="#required-for-focus"
  label="With icon"
  leftSection={<IconHome2 size="1rem" stroke={1.5} />}
/>
<NavLink
  href="#required-for-focus"
  label="With right section"
  leftSection={<IconGauge size="1rem" stroke={1.5} />}
  rightSection={
    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
  }
/>
<NavLink
  href="#required-for-focus"
  label="Disabled"
  leftSection={<IconCircleOff size="1rem" stroke={1.5} />}
  disabled
/>
<NavLink
  href="#required-for-focus"
  label="With description"
  description="Additional information"
  leftSection={
    <Badge size="xs" color="red" circle>
      3
    </Badge>
  }
/>
<NavLink
  href="#required-for-focus"
  label="Active subtle"
  leftSection={<IconActivity size="1rem" stroke={1.5} />}
  rightSection={
    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
  }
  variant="subtle"
  active
/>
<NavLink
  href="#required-for-focus"
  label="Active light"
  leftSection={<IconActivity size="1rem" stroke={1.5} />}
  rightSection={
    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
  }
  active
/>
<NavLink
  href="#required-for-focus"
  label="Active filled"
  leftSection={<IconActivity size="1rem" stroke={1.5} />}
  rightSection={
    <IconChevronRight size="0.8rem" stroke={1.5} className="mantine-rotate-rtl" />
  }
  variant="filled"
  active
/>
</>`

const contentCode2 =
` <>
<NavLink
  href="#required-for-focus"
  label="First parent link"
  leftSection={<IconGauge size="1rem" stroke={1.5} />}
  childrenOffset={28}
>
  <NavLink href="#required-for-focus" label="First child link" />
  <NavLink label="Second child link" href="#required-for-focus" />
  <NavLink label="Nested parent link" childrenOffset={28} href="#required-for-focus">
    <NavLink label="First child link" href="#required-for-focus" />
    <NavLink label="Second child link" href="#required-for-focus" />
    <NavLink label="Third child link" href="#required-for-focus" />
  </NavLink>
</NavLink>

<NavLink
  href="#required-for-focus"
  label="Second parent link"
  leftSection={<IconFingerprint size="1rem" stroke={1.5} />}
  childrenOffset={28}
  defaultOpened
>
  <NavLink label="First child link" href="#required-for-focus" />
  <NavLink label="Second child link" href="#required-for-focus" />
  <NavLink label="Third child link" href="#required-for-focus" />
</NavLink>
</>`