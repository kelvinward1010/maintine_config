import { Blockquote } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export function Home() {
    const icon = <IconInfoCircle />;
    return (
        <div>
            <Blockquote color="teal" radius="xl" iconSize={60} cite="– Forrest Gump" icon={icon} mt="xl">
                Life is like an npm install – you never know what you are going to get.
            </Blockquote>
        </div>
    )
}