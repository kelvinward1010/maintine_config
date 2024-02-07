import styles from './style.module.scss';
import { RichTextEditor, Link, useRichTextEditorContext } from '@mantine/tiptap';
import { BubbleMenu, useEditor } from '@tiptap/react';
import Highlight from '@tiptap/extension-highlight';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import Superscript from '@tiptap/extension-superscript';
import SubScript from '@tiptap/extension-subscript';
import Placeholder from '@tiptap/extension-placeholder';
import { Color } from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { IconStar } from '@tabler/icons-react';
import { NpmIcon, TypeScriptIcon, YarnIcon } from '@mantinex/dev-icons';
import { Grid, Text, Title } from '@mantine/core';
import { CodeHighlight, CodeHighlightTabs } from '@mantine/code-highlight';

function InsertStarControl() {
    const { editor } = useRichTextEditorContext();
    return (
        <RichTextEditor.Control
            onClick={() => editor?.commands.insertContent('⭐')}
            aria-label="Insert star emoji"
            title="Insert star emoji"
        >
            <IconStar stroke={1.5} size="1rem" />
        </RichTextEditor.Control>
    );
}

export function RichTextEditorConfig() {

    const yarnIcon = <YarnIcon size={15} />;
    const npmIcon = <NpmIcon size={15} />;
    const tsIcon = <TypeScriptIcon size={15} />;

    const contentInstall1 =
        `yarn add @mantine/tiptap @mantine/core @mantine/hooks @tabler/icons-react @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit`

    const contentInstall2 =
        `npm install @mantine/tiptap @mantine/core @mantine/hooks @tabler/icons-react @tiptap/react @tiptap/pm @tiptap/extension-link @tiptap/starter-kit`

    const contentImport1 =
        `import '@mantine/tiptap/styles.css';`

    const contentCode1 =
    `

    function InsertStarControl() {
        const { editor } = useRichTextEditorContext();
        return (
            <RichTextEditor.Control
                onClick={() => editor?.commands.insertContent('⭐')}
                aria-label="Insert star emoji"
                title="Insert star emoji"
            >
                <IconStar stroke={1.5} size="1rem" />
            </RichTextEditor.Control>
        );
    }

    function RichTextComponent() {
        const content = '';

        const editor = useEditor({
            extensions: [
                StarterKit,
                Underline,
                Link,
                Superscript,
                SubScript,
                Highlight,
                TextAlign.configure({ types: ['heading', 'paragraph'] }),
                Placeholder.configure({ placeholder: 'Write your idea!' }),
                TextStyle,
                Color,
            ],
            content,
        });

        return (
            <RichTextEditor editor={editor}>
                {editor && (
                    <BubbleMenu editor={editor}>
                        <RichTextEditor.ControlsGroup>
                            <RichTextEditor.Bold />
                            <RichTextEditor.Italic />
                            <RichTextEditor.Underline />
                            <RichTextEditor.Strikethrough />
                            <RichTextEditor.ClearFormatting />
                            <RichTextEditor.Highlight />
                            <RichTextEditor.Code />
                            <RichTextEditor.Link />
                        </RichTextEditor.ControlsGroup>
                    </BubbleMenu>
                )}
                <RichTextEditor.Toolbar sticky>
                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Bold />
                        <RichTextEditor.Italic />
                        <RichTextEditor.Underline />
                        <RichTextEditor.Strikethrough />
                        <RichTextEditor.ClearFormatting />
                        <RichTextEditor.Highlight />
                        <RichTextEditor.Code />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.H1 />
                        <RichTextEditor.H2 />
                        <RichTextEditor.H3 />
                        <RichTextEditor.H4 />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.ColorPicker
                            colors={[
                                '#25262b',
                                '#868e96',
                                '#fa5252',
                                '#e64980',
                                '#be4bdb',
                                '#7950f2',
                                '#4c6ef5',
                                '#228be6',
                                '#15aabf',
                                '#12b886',
                                '#40c057',
                                '#82c91e',
                                '#fab005',
                                '#fd7e14',
                            ]}
                        />
                    </RichTextEditor.ControlsGroup>

                    <InsertStarControl />

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Blockquote />
                        <RichTextEditor.Hr />
                        <RichTextEditor.BulletList />
                        <RichTextEditor.OrderedList />
                        <RichTextEditor.Subscript />
                        <RichTextEditor.Superscript />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Link />
                        <RichTextEditor.Unlink />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.AlignLeft />
                        <RichTextEditor.AlignCenter />
                        <RichTextEditor.AlignJustify />
                        <RichTextEditor.AlignRight />
                    </RichTextEditor.ControlsGroup>

                    <RichTextEditor.ControlsGroup>
                        <RichTextEditor.Undo />
                        <RichTextEditor.Redo />
                    </RichTextEditor.ControlsGroup>
                </RichTextEditor.Toolbar>

                <RichTextEditor.Content />
            </RichTextEditor>
        )
    }
    `

    const content = '';

    const editor = useEditor({
        extensions: [
            StarterKit,
            Underline,
            Link,
            Superscript,
            SubScript,
            Highlight,
            TextAlign.configure({ types: ['heading', 'paragraph'] }),
            Placeholder.configure({ placeholder: 'Write your idea!' }),
            TextStyle,
            Color,
        ],
        content,
    });

    return (
        <div className={styles.container}>
            <div className={styles.box_1}>
                <Title order={5} c={'teal.5'}>1. Installation</Title>
                <div className={styles.box_1_center}>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlightTabs
                                className={styles.code_highlight}
                                code={[
                                    {
                                        fileName: 'yarn',
                                        code: contentInstall1,
                                        icon: yarnIcon,
                                    },
                                    {
                                        fileName: 'npm',
                                        code: contentInstall2,
                                        icon: npmIcon,
                                    },
                                ]}
                            />
                        </Grid.Col>
                    </Grid>
                    <Text mt={10}>After installation import package styles at the root of your application:</Text>
                    <Grid grow>
                        <Grid.Col>
                            <CodeHighlight
                                className={styles.code_highlight}
                                code={contentImport1}
                            />
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
            <div className={styles.box_1_others}>
                <Title order={5} c={'teal.5'}>.2 Rich Text Editor Extention</Title>
                <div className={styles.box_1_center}>
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
                            <RichTextEditor editor={editor}>
                                {editor && (
                                    <BubbleMenu editor={editor}>
                                        <RichTextEditor.ControlsGroup>
                                            <RichTextEditor.Bold />
                                            <RichTextEditor.Italic />
                                            <RichTextEditor.Underline />
                                            <RichTextEditor.Strikethrough />
                                            <RichTextEditor.ClearFormatting />
                                            <RichTextEditor.Highlight />
                                            <RichTextEditor.Code />
                                            <RichTextEditor.Link />
                                        </RichTextEditor.ControlsGroup>
                                    </BubbleMenu>
                                )}
                                <RichTextEditor.Toolbar sticky>
                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.Bold />
                                        <RichTextEditor.Italic />
                                        <RichTextEditor.Underline />
                                        <RichTextEditor.Strikethrough />
                                        <RichTextEditor.ClearFormatting />
                                        <RichTextEditor.Highlight />
                                        <RichTextEditor.Code />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.H1 />
                                        <RichTextEditor.H2 />
                                        <RichTextEditor.H3 />
                                        <RichTextEditor.H4 />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.ColorPicker
                                            colors={[
                                                '#25262b',
                                                '#868e96',
                                                '#fa5252',
                                                '#e64980',
                                                '#be4bdb',
                                                '#7950f2',
                                                '#4c6ef5',
                                                '#228be6',
                                                '#15aabf',
                                                '#12b886',
                                                '#40c057',
                                                '#82c91e',
                                                '#fab005',
                                                '#fd7e14',
                                            ]}
                                        />
                                    </RichTextEditor.ControlsGroup>

                                    <InsertStarControl />

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.Blockquote />
                                        <RichTextEditor.Hr />
                                        <RichTextEditor.BulletList />
                                        <RichTextEditor.OrderedList />
                                        <RichTextEditor.Subscript />
                                        <RichTextEditor.Superscript />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.Link />
                                        <RichTextEditor.Unlink />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.AlignLeft />
                                        <RichTextEditor.AlignCenter />
                                        <RichTextEditor.AlignJustify />
                                        <RichTextEditor.AlignRight />
                                    </RichTextEditor.ControlsGroup>

                                    <RichTextEditor.ControlsGroup>
                                        <RichTextEditor.Undo />
                                        <RichTextEditor.Redo />
                                    </RichTextEditor.ControlsGroup>
                                </RichTextEditor.Toolbar>

                                <RichTextEditor.Content />
                            </RichTextEditor>
                        </Grid.Col>
                    </Grid>
                </div>
            </div>
        </div>
    )
}