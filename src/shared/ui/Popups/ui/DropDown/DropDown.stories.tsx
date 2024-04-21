import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { DropDown } from './DropDown';

const meta = {
  title: 'shared/Popups/DropDown',
  component: DropDown,
  decorators: [
    (Story: any) => (
      <div style={{ padding: '120px', display: 'flex' }}>
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof DropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>Open</Button>,
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};

export const topRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    direction: 'topRight',
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};

export const topLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    direction: 'topLeft',
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};

export const bottomLeft: Story = {
  args: {
    trigger: <Button>Open</Button>,
    direction: 'bottomLeft',
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};

export const bottomRight: Story = {
  args: {
    trigger: <Button>Open</Button>,
    direction: 'bottomRight',
    items: [
      {
        content: 'first',
      },
      {
        content: 'second',
      },
      {
        content: 'third',
      },
    ],
  },
};
