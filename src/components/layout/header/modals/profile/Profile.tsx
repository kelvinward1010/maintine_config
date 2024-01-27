import { Container, Grid, Modal } from '@mantine/core';
import styles from './style.module.scss';

interface ProfileProps{
    opened: boolean;
    close: () => void;
}

export const Profile: React.FC<ProfileProps> = ({
    opened,
    close,
}) => {
    return (
        <div className={styles.container}>
            <Modal opened={opened} onClose={close} size="xl" title="Profile">
                <Container size="xxs">
                    <Grid>
                        <Grid.Col span={4}>
                            Name
                        </Grid.Col>
                        <Grid.Col span={8}>
                            something
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col span={4}>
                            Email
                        </Grid.Col>
                        <Grid.Col span={8}>
                            something@gmail.com
                        </Grid.Col>
                    </Grid>
                    <Grid>
                        <Grid.Col span={4}>
                            Image
                        </Grid.Col>
                        <Grid.Col span={8}>
                            2
                        </Grid.Col>
                    </Grid>
                </Container>
            </Modal>
        </div>
    )
}