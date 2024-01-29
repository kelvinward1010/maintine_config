import { TypeScriptIcon } from '@mantinex/dev-icons';
import styles from './style.module.scss';
import { Grid, Input, Select, Slider, Text, Title } from '@mantine/core';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { DonutChart } from '@mantine/charts';
import { data } from './data';
import { useState } from 'react';

export function DonutChartConfig() {

    const [size, setSize] = useState(160);
    const [thickness, setThickness] = useState(18);
    const [paddingAngle, setPaddingAngle] = useState(1);
    const [tooltipDataSource, setTooltipDataSource] = useState<any>('segment');
    const [chartLabel, setChartLabel] = useState('Chart label');
    const [strokeWidth, setStrokeWidth] = useState(1);
    const [startAngle, setStartAngle] = useState(0);
    const [endAngle, setEndAngle] = useState(180);


    const tsIcon = <TypeScriptIcon size={18} />;

    const contentCode1 =
    `<DonutChart
        withLabelsLine 
        withLabels 
        data={data} 
        size={${size}}
        thickness={${thickness}}
        paddingAngle={${paddingAngle}}
        tooltipDataSource={'${tooltipDataSource}'}
        chartLabel={'${chartLabel}'}
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
    `<DonutChart
        className={styles.donut_chart}
        data={data}
        startAngle={startAngle}
        endAngle={endAngle}
    />`

    return (
        <div className={styles.container}>
            <div>
                <Title order={5} c={'teal.5'}>1. Donut chart normal</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'} grow>
                        <Grid.Col span={5} miw={300}>
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
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>2. Thickness</Text>
                            <Slider
                                value={thickness} 
                                onChange={setThickness}
                                label={(value) => value}
                                step={1}
                                min={1}
                                max={50}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align={'center'} grow>
                        <Grid.Col span={5} miw={300}>
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
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="4. Tooltip Data Source"
                                value={tooltipDataSource}
                                onChange={(e) => setTooltipDataSource(e)}
                                placeholder="Pick value"
                                data={['all', 'segment']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid justify={'space-between'} align={'center'} grow>
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>5. Chart Label</Text>
                            <Input
                                type={'text'}
                                placeholder='Type Chart Label'
                                value={chartLabel}
                                onChange={(e) => setChartLabel(e.target.value)}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Text fw={500} size={'sm'}>6. Stroke Width</Text>
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
                            <DonutChart
                                withLabelsLine 
                                withLabels 
                                className={styles.donut_chart}
                                data={data} 
                                size={size}
                                thickness={thickness}
                                paddingAngle={paddingAngle}
                                tooltipDataSource={tooltipDataSource}
                                chartLabel={chartLabel}
                                strokeWidth={strokeWidth}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.donut_other}>
                <Title order={5} c={'teal.5'}>2. Donut start and end angle</Title>
                <div className={styles.box_1}>
                    <Grid justify={'space-between'} align={'center'} grow>
                        <Grid.Col span={5} miw={300}>
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
                        <Grid.Col span={5} miw={300}>
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
                            <DonutChart
                                withLabelsLine 
                                withLabels
                                className={styles.donut_chart}
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