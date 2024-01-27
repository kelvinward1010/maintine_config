import { AreaChart } from '@mantine/charts';
import { data } from '../data';
import { Grid, Select, Title } from '@mantine/core';
import { useState } from 'react';

export function AreaChartConfig() {
    const [curveType, setCurveType] = useState<any>('linear');

    return (
        <div>
            <div>
                <Title order={4} c={'teal.5'}>Use tools to change:</Title>
                <div>
                    <Grid justify={'space-between'} align='center'>
                        <Grid.Col span={4}>
                            1. Curve type
                        </Grid.Col>
                        <Grid.Col span={8}>
                            <Select
                                label="Select Curve Type"
                                value={curveType}
                                onChange={(e) => setCurveType(e)}
                                placeholder="Pick value"
                                data={['linear', 'bump', 'natural', 'monotone', 'step', 'stepBefore', 'stepAfter']}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
                <AreaChart
                    h={300}
                    data={data}
                    dataKey="date"
                    type="stacked"
                    withLegend
                    legendProps={{ verticalAlign: 'top' }}
                    series={[
                        { name: 'Apples', color: 'indigo.6' },
                        { name: 'Oranges', color: 'blue.6' },
                        { name: 'Tomatoes', color: 'teal.6' },
                    ]}
                    curveType={curveType}
                />
            </div>
        </div>
    )
}