import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from '../Button/Button';

import { DropDown } from './DropDown';

export default {
  title: 'shared/DropDown',
  component: DropDown,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [
    (Story) => (
      <div style={{ padding: '120px', display: "flex" }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof DropDown>;

const Template: ComponentStory<typeof DropDown> = (args) => (
  <DropDown {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
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
};

export const topRight = Template.bind({});
topRight.args = {
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
};

export const topLeft = Template.bind({});
topLeft.args = {
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
};

export const bottomLeft = Template.bind({});
bottomLeft.args = {
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
};

export const bottomRight = Template.bind({});
bottomRight.args = {
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
};
