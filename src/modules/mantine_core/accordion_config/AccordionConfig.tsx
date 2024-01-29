import { Accordion, Grid, Select, Title } from '@mantine/core';
import styles from './style.module.scss';
import { CodeHighlightTabs } from '@mantine/code-highlight';
import { TypeScriptIcon } from '@mantinex/dev-icons';
import { useState } from 'react';

const groceries = [
    {
        emoji: '🍎',
        value: 'Apples',
        description:
            'Crisp and refreshing fruit. Apples are known for their versatility and nutritional benefits. They come in a variety of flavors and are great for snacking, baking, or adding to salads.',
    },
    {
        emoji: '🍌',
        value: 'Bananas',
        description:
            'Naturally sweet and potassium-rich fruit. Bananas are a popular choice for their energy-boosting properties and can be enjoyed as a quick snack, added to smoothies, or used in baking.',
    },
    {
        emoji: '🥦',
        value: 'Broccoli',
        description:
            'Nutrient-packed green vegetable. Broccoli is packed with vitamins, minerals, and fiber. It has a distinct flavor and can be enjoyed steamed, roasted, or added to stir-fries.',
    },
];

export function AccordionConfig() {

    const [variant, setVariant] = useState<any>('default');
    const [chevronPosition, setChevronPosition] = useState<any>('right');
    const tsIcon = <TypeScriptIcon size={15} />;

    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
            <Accordion.Control icon={item.emoji}>
                {item.value}
            </Accordion.Control>
            <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    const contentCode1 =
    `import { Accordion } from '@mantine/core';

    function Demo() {
    // See groceries data above
    const items = groceries.map((item) => (
        <Accordion.Item key={item.value} value={item.value}>
        <Accordion.Control icon={item.emoji}>{item.value}</Accordion.Control>
        <Accordion.Panel>{item.description}</Accordion.Panel>
        </Accordion.Item>
    ));

    return (
        <Accordion 
            defaultValue="Apples" 
            chevronPosition={'${chevronPosition}'}
            variant={'${variant}'}
        >
            {items}
        </Accordion>
    );
    }`

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Usage</Title>
                <div className={styles.box_1_center}>
                    <Grid justify={'space-between'} align='center' grow>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="1. Select Variant"
                                value={variant}
                                onChange={(e) => setVariant(e)}
                                placeholder="Pick value"
                                data={['default', 'contained', 'filled', 'separated']}
                            />
                        </Grid.Col>
                        <Grid.Col span={5} miw={300}>
                            <Select
                                label="2. Select Chevron position"
                                value={chevronPosition}
                                onChange={(e) => setChevronPosition(e)}
                                placeholder="Pick value"
                                data={['right', 'left']}
                            />
                        </Grid.Col>
                    </Grid>
                    <Grid grow>
                        <Grid.Col span={6} miw={300}>
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
                                    ]}
                                />
                            </div>
                        </Grid.Col>
                        <Grid.Col span={6} miw={300}>
                            <Title order={6} c={'teal.5'}>Demo</Title>
                            <Accordion 
                                defaultValue="Apples" 
                                chevronPosition={chevronPosition}
                                variant={variant}
                            >
                                {items}
                            </Accordion>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}