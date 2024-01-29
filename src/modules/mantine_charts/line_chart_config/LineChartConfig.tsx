import { Grid, Input, Select, Text, Title } from '@mantine/core';
import styles from './style.module.scss';
import { LineChart } from '@mantine/charts';
import { data } from './data';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon } from '@mantinex/dev-icons';
import { useState } from 'react';

export function LineChartConfig() {

    const [curveType, setCurveType] = useState<any>('linear');
    const [tickLine, setTickLine] = useState<any>('y');
    const [gridAxis, setGridAxis] = useState<any>('x');
    const [legend, setLegend] = useState<any>('top');
    const [orientation, setOrientation] = useState<any>('horizontal');
    const [units, setUnits] = useState<any>('');

    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1= 
    `<LineChart
        h={300}
        data={data}
        dataKey="date"
        withLegend
        legendProps={{ verticalAlign: '${legend}', height: 50 }}
        series={[
            { name: 'Apples', color: 'indigo.6' },
            { name: 'Oranges', color: 'blue.6' },
            { name: 'Tomatoes', color: 'teal.6' },
        ]}
        curveType={'${curveType}'}
        tickLine={'${tickLine}'}
        gridAxis={'${gridAxis}'}
        unit={'${units}'}
        orientation={'${orientation}'}
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
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="1. Select Curve Type"
                                value={curveType}
                                onChange={(e) => setCurveType(e)}
                                placeholder="Pick value"
                                data={['linear', 'bump', 'natural', 'monotone', 'step', 'stepBefore', 'stepAfter']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="2. Select Tick Line"
                                value={tickLine}
                                onChange={(e) => setTickLine(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="3. Select Grid axis"
                                value={gridAxis}
                                onChange={(e) => setGridAxis(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="4. Select Legend"
                                value={legend}
                                onChange={(e) => setLegend(e)}
                                placeholder="Pick value"
                                data={['top', 'bottom']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="5. Select Orientation"
                                value={orientation}
                                onChange={(e) => setOrientation(e)}
                                placeholder="Pick value"
                                data={['vertical', 'horizontal']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>6. Type Units</Text>
                            <Input
                                type={'text'}
                                placeholder='Type Units'
                                onChange={(e) => setUnits(e.target.value)}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid className={styles.grid} grow>
                        <Grid.Col span={6} miw={300}>
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
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <LineChart
                                h={300}
                                data={data}
                                dataKey="date"
                                className={styles.line_chart}
                                withLegend
                                legendProps={{ verticalAlign: legend, height: 50 }}
                                series={[
                                    { name: 'Apples', color: 'indigo.6' },
                                    { name: 'Oranges', color: 'blue.6' },
                                    { name: 'Tomatoes', color: 'teal.6' },
                                ]}
                                curveType={curveType}
                                tickLine={tickLine}
                                gridAxis={gridAxis}
                                unit={units}
                                orientation={orientation}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}