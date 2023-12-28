import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ListBox } from './ListBox';

export default {
  title: 'shared/ListBox',
  component: ListBox,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ListBox>;

const items = [
  { value: 'content1', content: 'content1' },
  { value: 'content2', content: 'content2' },
  { value: 'content3', content: 'content3' },
];

const Template: ComponentStory<typeof ListBox> = (args) => (
  <ListBox {...args} />
);

export const Normal = Template.bind({});
Normal.args = {
  label: 'Выберите элемент из списка',
  items,
  value: items[0].value,
  defaultValue: 'Выбрать',
  onChange: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: 'Выберите элемент из списка',
  items: [
    { value: 'content1', content: 'content1', },
    { value: 'content2', content: 'content2', },
  ],
  defaultValue: 'Выбрать',
  readonly: true,
  onChange: () => {},
};

export const DisabledItems = Template.bind({});
DisabledItems.args = {
  label: 'Выберите элемент из списка',
  items: [
    { value: 'content1', content: 'content1', disabled: true },
    { value: 'content2', content: 'content2', disabled: true },
    { value: 'content2', content: 'content2' },

  ],
  defaultValue: 'Выбрать',
  onChange: () => {},
};

