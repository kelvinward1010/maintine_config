import { Grid, Title } from '@mantine/core';
import styles from './style.module.scss';

export function BarChartConfig() {
    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Bar chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={6}>
                            Tool1
                        </Grid.Col>
                        <Grid.Col span={6}>
                            Tool2
                        </Grid.Col>
                    </Grid>
                    <Grid className={styles.grid}>
                        <Grid.Col span={6}>
                            Code
                        </Grid.Col>
                        <Grid.Col span={6}>
                            Demo
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}