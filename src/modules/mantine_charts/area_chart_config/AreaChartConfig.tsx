import styles from './style.module.scss';
import { AreaChart } from '@mantine/charts';
import { data, data_2 } from './data';
import { Grid, Select, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon } from '@mantinex/dev-icons';
import { useState } from 'react';

export function AreaChartConfig() {
    const [curveType, setCurveType] = useState<any>('linear');
    const [tickLine, setTickLine] = useState<any>('y');
    const [gridAxis, setGridAxis] = useState<any>('x');
    const [legend, setLegend] = useState<any>('top');

    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1 = 
    `<AreaChart
        h={300}
        data={data}
        dataKey="date"
        type="stacked"
        withLegend
        legendProps={{ verticalAlign: '${legend}' }}
        series={[
            { name: 'Apples', color: 'indigo.6' },
            { name: 'Oranges', color: 'blue.6' },
            { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType={'${curveType}'}
        tickLine={'${tickLine}'}
        gridAxis={'${gridAxis}'}
    />`

    const contentData1 = 
    `export const data = [
        {
            date: "Mar 22",
            Apples: 2890,
            Oranges: 2338,
            Tomatoes: 2452,
        },
        {
            date: "Mar 23",
            Apples: 2756,
            Oranges: 2103,
            Tomatoes: 2402,
        },
        {
            date: "Mar 24",
            Apples: 3322,
            Oranges: 986,
            Tomatoes: 1821,
        },
        {
            date: "Mar 25",
            Apples: 3470,
            Oranges: 2108,
            Tomatoes: 2809,
        },
        {
            date: "Mar 26",
            Apples: 3129,
            Oranges: 1726,
            Tomatoes: 2290,
        },
    ];`

    const contentCode2 = 
    `<AreaChart
        h={300}
        data={data_2}
        dataKey="date"
        type="split"
        strokeWidth={1}
        dotProps={{ r: 2, strokeWidth: 1 }}
        activeDotProps={{ r: 3, strokeWidth: 1 }}
        series={[{ name: 'Apples', color: 'bright' }]}
        splitColors={['violet', 'orange']}
    />`

    const contentData2 = `
    export const data_2 = [
        {
          date: 'Mar 22',
          Apples: 110,
        },
        {
          date: 'Mar 23',
          Apples: 60,
        },
        {
          date: 'Mar 24',
          Apples: -80,
        },
        {
          date: 'Mar 25',
          Apples: 40,
        },
        {
          date: 'Mar 26',
          Apples: -40,
        },
        {
          date: 'Mar 27',
          Apples: 80,
        },
    ];
    `

    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Area chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align='center'>
                        <Grid.Col span={5}>
                            <Select
                                label="1. Select Curve Type"
                                value={curveType}
                                onChange={(e) => setCurveType(e)}
                                placeholder="Pick value"
                                data={['linear', 'bump', 'natural', 'monotone', 'step', 'stepBefore', 'stepAfter']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Select
                                label="2. Select Tick Line"
                                value={tickLine}
                                onChange={(e) => setTickLine(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align='center'>
                        <Grid.Col span={5}>
                            <Select
                                label="3. Select Grid axis"
                                value={gridAxis}
                                onChange={(e) => setGridAxis(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Select
                                label="4. Select Legend"
                                value={legend}
                                onChange={(e) => setLegend(e)}
                                placeholder="Pick value"
                                data={['top', 'bottom']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid className={styles.grid_1}>
                        <Grid.Col span={6}>
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
                                        { 
                                            fileName: 'data.ts', 
                                            code: contentData1, 
                                            language: 'ts',
                                            icon: tsIcon,
                                        },
                                    ]}
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <AreaChart
                                h={300}
                                data={data}
                                dataKey="date"
                                className={styles.area_chart_1}
                                type="stacked"
                                withLegend
                                legendProps={{ verticalAlign: legend }}
                                series={[
                                    { name: 'Apples', color: 'indigo.6' },
                                    { name: 'Oranges', color: 'blue.6' },
                                    { name: 'Tomatoes', color: 'teal.6' },
                                ]}
                                curveType={curveType}
                                tickLine={tickLine}
                                gridAxis={gridAxis}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.areabox}>
                <Title order={5} c={'teal.5'}>2. Split area chart</Title>
                <Grid className={styles.grid_1}>
                    <Grid.Col span={6}>
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
                                    { 
                                        fileName: 'data_2.ts', 
                                        code: contentData2, 
                                        language: 'ts',
                                        icon: tsIcon,
                                    },
                                ]}
                            />
                        </div>
                    </Grid.Col>
                    <Grid.Col span={6}>
                        <Title order={6} c={'teal.5'}>Demo</Title>
                        <AreaChart
                            h={300}
                            data={data_2}
                            className={styles.area_chart_1}
                            dataKey="date"
                            type="split"
                            strokeWidth={1}
                            dotProps={{ r: 2, strokeWidth: 1 }}
                            activeDotProps={{ r: 3, strokeWidth: 1 }}
                            series={[{ name: 'Apples', color: 'bright' }]}
                            splitColors={['violet', 'orange']}
                        />
                    </Grid.Col>
                </Grid>
            </div>
        </div>
    )
}