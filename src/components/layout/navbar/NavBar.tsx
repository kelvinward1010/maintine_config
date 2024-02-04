import { NavLink } from '@mantine/core';
import styles from './style.module.scss';
import { useNavigate } from 'react-router-dom';

export function NavBar() {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            <NavLink
                href="#"
                label="Gettings started"
                childrenOffset={28}
            ></NavLink>
            <NavLink
                href="#"
                label="Mantine Core"
                childrenOffset={28}
            >
                <NavLink
                    href="#"
                    label="Navigation"
                    childrenOffset={28}
                >
                    <NavLink onClick={() => navigate('/navlink_config')} label="Navlink" />
                </NavLink>
                <NavLink
                    href="#"
                    label="Data Display"
                    childrenOffset={28}
                >
                    <NavLink onClick={() => navigate('/accordion_config')} label="Accordion" />
                    <NavLink onClick={() => navigate('/background_image_config')} label="Background Image" />
                    <NavLink onClick={() => navigate('/image_config')} label="Image" />
                </NavLink>
                <NavLink
                    href="#"
                    label="Typography"
                    childrenOffset={28}
                >
                    <NavLink onClick={() => navigate('/blockquote_config')} label="Blockquote" />
                    <NavLink onClick={() => navigate('/highlight_config')} label="Highlight" />
                </NavLink>
            </NavLink>
            <NavLink
                href="#"
                label="Mantine Charts"
                childrenOffset={28}
            >
                <NavLink onClick={() => navigate('/areachart_config')} label="Area Chart" />
                <NavLink onClick={() => navigate('/barchart_config')} label="Bar Chart" />
                <NavLink onClick={() => navigate('/linechart_config')} label="Line Chart" />
                <NavLink onClick={() => navigate('/donutchart_config')} label="Donut Chart" />
                <NavLink onClick={() => navigate('/piechart_config')} label="Pie Chart" />
            </NavLink>
            <NavLink
                href="#"
                label="Extensions"
                childrenOffset={28}
            >
                <NavLink onClick={() => navigate('/codehighlight_config')} label="CodeHighlight" />
                <NavLink onClick={() => navigate('/notificationssystem_config')} label="Notifications system" />
            </NavLink>
        </div>
    )
}