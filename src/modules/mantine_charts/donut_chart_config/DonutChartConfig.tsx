import { TypeScriptIcon } from '@mantinex/dev-icons';
import styles from './style.module.scss';
import { Grid, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { DonutChart } from '@mantine/charts';
import { data } from './data';

export function DonutChartConfig() {

    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1 =
    `<DonutChart
        withLabelsLine 
        withLabels 
        data={data} 
    />`

    const contentData1 =
    `export const data = [
        { name: 'USA', value: 400, color: 'indigo.6' },
        { name: 'India', value: 300, color: 'yellow.6' },
        { name: 'Japan', value: 100, color: 'teal.6' },
        { name: 'Other', value: 200, color: 'gray.6' },
    ];`

    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Donut chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={5}>
                            1
                        </Grid.Col>
                        <Grid.Col span={5}>
                            2
                        </Grid.Col>
                    </Grid>
                    <Grid className={styles.grid}>
                        <Grid.Col span={6}>
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
                                    {
                                        fileName: 'data.ts',
                                        code: contentData1,
                                        language: 'ts',
                                        icon: tsIcon,
                                    },
                                ]}
                            />
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <DonutChart
                                withLabelsLine 
                                withLabels 
                                className={styles.donut_chart}
                                data={data} 
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}