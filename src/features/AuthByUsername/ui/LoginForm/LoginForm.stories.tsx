import { ComponentStory, ComponentMeta } from '@storybook/react';

import { LoginForm } from './LoginForm';

export default {
  title: 'features/LoginForm',
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...(typeof args === 'object' ? args : {})} />
);

export const Primary = Template.bind({});
Primary.args = {
  placeholder: 'Type text',
  value: '123123',
};
