import { Badge, NavLink } from '@mantine/core';
import { IconHome2, IconQuestionMark} from '@tabler/icons-react';

export default function NavBar() {
    return (
        <>
            <NavLink
                href="home"
                label="Home Screen"
                leftSection={<IconHome2 size="1.5rem" stroke={2} />}
            />

            <NavLink
                href="about"
                label="About Our Church"
                leftSection={<IconQuestionMark size="1.5rem" stroke={2} />}
            />

            <NavLink
                href="contact"
                label="Announcements"
                leftSection={<IconHome2 size="1.5rem" stroke={2} />}
            />

            <NavLink
                href="schedule"
                label="Schedule"
                leftSection={<IconHome2 size="1.5rem" stroke={2} />}
            />

            <NavLink
                href="sunday"
                label="This Sunday"
                leftSection={<IconHome2 size="1.5rem" stroke={2} />}
            />

        </>
    );
}