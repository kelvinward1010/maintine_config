import { Grid, Input, Select, Text, Title } from '@mantine/core';
import styles from './style.module.scss';
import { BarChart } from '@mantine/charts';
import { data } from './data';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon } from '@mantinex/dev-icons';
import { useState } from 'react';

export function BarChartConfig() {

    const [tickLine, setTickLine] = useState<any>('y');
    const [gridAxis, setGridAxis] = useState<any>('x');
    const [legend, setLegend] = useState<any>('top');
    const [type, setType] = useState<any>('default');
    const [orientation, setOrientation] = useState<any>('horizontal');
    const [units, setUnits] = useState<any>('');


    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1 =
        `<BarChart
        h={300}
        data={data}
        dataKey="month"
        className={styles.bar_chart}
        withLegend
        legendProps={{ verticalAlign: '${legend}' }}
        series={[
            { name: 'Smartphones', color: 'violet.6' },
            { name: 'Laptops', color: 'blue.6' },
            { name: 'Tablets', color: 'teal.6' },
        ]}
        tickLine={'${tickLine}'}
        gridAxis={'${gridAxis}'}
        orientation={'${orientation}'}
        unit={'${units}'}
    />`

    const contentData1 = `
    export const data = [
        { month: 'January', Smartphones: 1200, Laptops: 900, Tablets: 200 },
        { month: 'February', Smartphones: 1900, Laptops: 1200, Tablets: 400 },
        { month: 'March', Smartphones: 400, Laptops: 1000, Tablets: 200 },
        { month: 'April', Smartphones: 1000, Laptops: 200, Tablets: 800 },
        { month: 'May', Smartphones: 800, Laptops: 1400, Tablets: 1200 },
        { month: 'June', Smartphones: 750, Laptops: 600, Tablets: 1000 },
    ];`

    const contentCode2 =
    `<>
        <Text mb="md" pl="md">
            Smartphones sales:
        </Text>

        <BarChart
            h={180}
            data={data}
            className={styles.bar_chart}
            dataKey="month"
            series={[{ name: 'Smartphones', color: 'violet.6' }]}
            barChartProps={{ syncId: 'tech' }}
        />

        <Text mb="md" pl="md" mt="xl">
            Laptops sales:
        </Text>

        <BarChart
            h={180}
            data={data}
            className={styles.bar_chart}
            dataKey="month"
            barChartProps={{ syncId: 'tech' }}
            series={[{ name: 'Laptops', color: 'teal.6' }]}
        />
    </>`

    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Bar chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'} grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="1. Select Tick Line"
                                value={tickLine}
                                onChange={(e) => setTickLine(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="2. Select Grid axis"
                                value={gridAxis}
                                onChange={(e) => setGridAxis(e)}
                                placeholder="Pick value"
                                data={['x', 'y', 'xy', 'none']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="3. Select Legend"
                                value={legend}
                                onChange={(e) => setLegend(e)}
                                placeholder="Pick value"
                                data={['top', 'bottom']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="4. Select Type"
                                value={type}
                                onChange={(e) => setType(e)}
                                placeholder="Pick value"
                                data={['default', 'stacked', 'percent']}
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
                            <BarChart
                                h={300}
                                data={data}
                                dataKey="month"
                                className={styles.bar_chart}
                                type={type}
                                withLegend
                                legendProps={{ verticalAlign: legend }}
                                series={[
                                    { name: 'Smartphones', color: 'violet.6' },
                                    { name: 'Laptops', color: 'blue.6' },
                                    { name: 'Tablets', color: 'teal.6' },
                                ]}
                                tickLine={tickLine}
                                gridAxis={gridAxis}
                                orientation={orientation}
                                unit={units}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div>
                <Title order={5} c={'teal.5'}>2. Sync multiple BarCharts</Title>
                <div className={styles.box_1}>
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
                                        code: contentCode2,
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
                            <>
                                <Text mb="md" pl="md">
                                    Smartphones sales:
                                </Text>

                                <BarChart
                                    h={180}
                                    data={data}
                                    className={styles.bar_chart}
                                    dataKey="month"
                                    series={[{ name: 'Smartphones', color: 'violet.6' }]}
                                    barChartProps={{ syncId: 'tech' }}
                                />

                                <Text mb="md" pl="md" mt="xl">
                                    Laptops sales:
                                </Text>

                                <BarChart
                                    h={180}
                                    data={data}
                                    className={styles.bar_chart}
                                    dataKey="month"
                                    barChartProps={{ syncId: 'tech' }}
                                    series={[{ name: 'Laptops', color: 'teal.6' }]}
                                />
                            </>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}