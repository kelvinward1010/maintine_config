import { NavLink } from "@mantine/core";
import { IconFingerprint, IconGauge } from "@tabler/icons-react";

export function NavlinkConfig() {
    return (
        <div>
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
        </div>
    )
}