import { Grid, Title } from '@mantine/core';
import styles from './style.module.scss';
import { LineChart } from '@mantine/charts';
import { data } from './data';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon } from '@mantinex/dev-icons';

export function LineChartConfig() {


    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1= 
    `<LineChart
        h={300}
        data={data}
        dataKey="date"
        series={[
            { name: 'Apples', color: 'indigo.6' },
            { name: 'Oranges', color: 'blue.6' },
            { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType="linear"
    />`

    const contentData1 =
    `export const data = [
        {
            date: 'Mar 22',
            Apples: 2890,
            Oranges: 2338,
            Tomatoes: 2452,
        },
        {
            date: 'Mar 23',
            Apples: 2756,
            Oranges: 2103,
            Tomatoes: 2402,
        },
        {
            date: 'Mar 24',
            Apples: 3322,
            Oranges: 986,
            Tomatoes: 1821,
        },
        {
            date: 'Mar 25',
            Apples: 3470,
            Oranges: 2108,
            Tomatoes: 2809,
        },
        {
            date: 'Mar 26',
            Apples: 3129,
            Oranges: 1726,
            Tomatoes: 2290,
        },
    ];`
    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Line chart normal</Title>
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
                            <LineChart
                                h={300}
                                data={data}
                                dataKey="date"
                                className={styles.line_chart}
                                series={[
                                    { name: 'Apples', color: 'indigo.6' },
                                    { name: 'Oranges', color: 'blue.6' },
                                    { name: 'Tomatoes', color: 'teal.6' },
                                ]}
                                curveType="linear"
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}