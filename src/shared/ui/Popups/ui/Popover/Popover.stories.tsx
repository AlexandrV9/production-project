import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../../../Button/Button';

import { Popover } from './Popover';

const meta = {
  title: 'shared/Popups/Popover',
  component: Popover,
  argTypes: {},
  decorators: [(Story: any) => <Story />],
} satisfies Meta<typeof Popover>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    trigger: <Button>trigger</Button>,
    direction: "bottomRight",
    children: (
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe cumque
        veniam, aspernatur harum facilis labore a neque voluptates est
        laboriosam, quae maiores repellat, debitis quia repudiandae quaerat
        nostrum distinctio id?
      </p>
    ),
  },
};
