import { NavLink } from '@mantine/core';
import styles from './style.module.scss';
import { IconChartInfographic, IconHome } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <NavLink
                href="#"
                label="Mantine Core"
                leftSection={<IconHome size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink onClick={() => navigate('/accordion_config')} label="Accordion" />
                <NavLink onClick={() => navigate('/navlink_config')} label="Navlink" />
                <NavLink onClick={() => navigate('/background_image_config')} label="Background Image" />
                <NavLink onClick={() => navigate('/image_config')} label="Image" />
            </NavLink>
            <NavLink
                href="#"
                label="Mantine Charts"
                leftSection={<IconChartInfographic size="1rem" stroke={1.5} />}
                childrenOffset={28}
            >
                <NavLink onClick={() => navigate('/areachart_config')} label="Area Chart" />
                <NavLink onClick={() => navigate('/barchart_config')} label="Bar Chart" />
            </NavLink>
        </div>
    )
}