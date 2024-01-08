import type { Meta, StoryObj } from '@storybook/react';

import { ListBox } from './ListBox';

const meta = {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {},
  decorators: [
    (Story: any) => (
      <div style={{ padding: '120px' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ListBox>;

export default meta;
type Story = StoryObj<typeof meta>;

const items = [
  { value: 'content1', content: 'content1' },
  { value: 'content2', content: 'content2' },
  { value: 'content3', content: 'content3' },
];

export const Normal: Story = {
  args: {
    label: 'Выберите элемент из списка',
    items,
    value: items[0].value,
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};

export const Disabled: Story = {
  args: {
    label: 'Выберите элемент из списка',
    items: [
      { value: 'content1', content: 'content1' },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    readonly: true,
    onChange: () => {},
  },
};

export const DisabledItems: Story = {
  args: {
    label: 'Выберите элемент из списка',
    items: [
      { value: 'content1', content: 'content1', disabled: true },
      { value: 'content2', content: 'content2', disabled: true },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};

export const topLeft: Story = {
  args: {
    label: 'Выберите элемент из списка',
    direction: 'topLeft',
    items: [
      { value: 'content1', content: 'content1', disabled: true },
      { value: 'content2', content: 'content2', disabled: true },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};

export const topRight: Story = {
  args: {
    label: 'Выберите элемент из списка',
    direction: 'topRight',
    items: [
      { value: 'content1', content: 'content1', disabled: true },
      { value: 'content2', content: 'content2', disabled: true },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};

export const bottomLeft: Story = {
  args: {
    label: 'Выберите элемент из списка',
    direction: 'bottomLeft',
    items: [
      { value: 'content1', content: 'content1', disabled: true },
      { value: 'content2', content: 'content2', disabled: true },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};

export const bottomRight: Story = {
  args: {
    label: 'Выберите элемент из списка',
    direction: 'bottomRight',
    items: [
      { value: 'content1', content: 'content1', disabled: true },
      { value: 'content2', content: 'content2', disabled: true },
      { value: 'content2', content: 'content2' },
    ],
    defaultValue: 'Выбрать',
    onChange: () => {},
  },
};
