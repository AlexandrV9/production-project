import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import LoginForm from './LoginForm';

const meta = {
  title: 'features/LoginForm',
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {};
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: 'test', password: '123' },
  }),
];

export const withError: Story = {};
withError.args = {};
withError.decorators = [
  StoreDecorator({
    loginForm: { username: 'test', password: '123', error: 'ERROR' },
  }),
];

export const Loading: Story = {};
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
];
