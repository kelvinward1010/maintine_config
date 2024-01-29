import { TypeScriptIcon } from '@mantinex/dev-icons';
import styles from './style.module.scss';
import { Grid, Select, Slider, Text, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { PieChart } from '@mantine/charts';
import { data } from './data';
import { useState } from 'react';

export function PieChartConfig() {
    const [size, setSize] = useState(160);
    const [segmentLabel, setSegmentLabel] = useState<any>('outside');
    const [paddingAngle, setPaddingAngle] = useState(1);
    const [tooltipDataSource, setTooltipDataSource] = useState<any>('segment');
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [startAngle, setStartAngle] = useState(0);
    const [endAngle, setEndAngle] = useState(180);


    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1 =
    `<PieChart
        withLabelsLine 
        withLabels 
        data={data} 
        size={${size}}
        labelsPosition={'${segmentLabel}'}
        paddingAngle={${paddingAngle}}
        tooltipDataSource={'${tooltipDataSource}'}
        strokeWidth={${strokeWidth}}
    />`

    const contentData1 =
    `export const data = [
        { name: 'USA', value: 400, color: 'indigo.6' },
        { name: 'India', value: 300, color: 'yellow.6' },
        { name: 'Japan', value: 100, color: 'teal.6' },
        { name: 'Other', value: 200, color: 'gray.6' },
    ];`

    const contentCode2 =
    `<PieChart
        withLabelsLine 
        withLabels
        className={styles.donut_chart}
        data={data}
        startAngle={startAngle}
        endAngle={endAngle}
    />`

    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Pie chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={5}>
                            <Text fw={500} size={'sm'}>1. Size</Text>
                            <Slider
                                value={size} 
                                onChange={setSize}
                                label={(value) => value}
                                step={1}
                                min={1}
                                max={500}
                            />
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Select
                                label="2. Segments labels"
                                value={segmentLabel}
                                onChange={(e) => setSegmentLabel(e)}
                                placeholder="Pick value"
                                data={['outside', 'inside']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={5}>
                            <Text fw={500} size={'sm'}>3. Padding Angle</Text>
                            <Slider
                                value={paddingAngle} 
                                onChange={setPaddingAngle}
                                label={(value) => value}
                                step={1}
                                min={0}
                                max={50}
                            />
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Select
                                label="4. Tooltip Data Source"
                                value={tooltipDataSource}
                                onChange={(e) => setTooltipDataSource(e)}
                                placeholder="Pick value"
                                data={['all', 'segment']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={5}>
                            <Text fw={500} size={'sm'}>5. Stroke Width</Text>
                            <Slider
                                value={strokeWidth} 
                                onChange={setStrokeWidth}
                                label={(value) => value}
                                step={4}
                                min={1}
                                max={30}
                            />
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
                            <PieChart
                                withLabelsLine 
                                withLabels 
                                className={styles.pie_chart}
                                data={data} 
                                size={size}
                                labelsPosition={segmentLabel}
                                paddingAngle={paddingAngle}
                                tooltipDataSource={tooltipDataSource}
                                strokeWidth={strokeWidth}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.pie_other}>
                <Title order={5} c={'teal.5'}>2. Pie start and end angle</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'}>
                        <Grid.Col span={5}>
                            <Text fw={500} size={'sm'}>1. Start Angle</Text>
                            <Slider
                                value={startAngle} 
                                onChange={setStartAngle}
                                label={(value) => value}
                                step={1}
                                min={0}
                                max={360}
                            />
                        </Grid.Col>
                        <Grid.Col span={5}>
                            <Text fw={500} size={'sm'}>2. End Angle</Text>
                            <Slider
                                value={endAngle} 
                                onChange={setEndAngle}
                                label={(value) => value}
                                step={1}
                                min={1}
                                max={360}
                            />
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
                        <Grid.Col span={6}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <PieChart
                                withLabelsLine 
                                withLabels
                                className={styles.pie_chart}
                                data={data}
                                startAngle={startAngle}
                                endAngle={endAngle}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}