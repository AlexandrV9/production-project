import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import AdminPanelPage from './AdminPanelPage';

const meta = {
  title: 'pages/AdminPanelPage',
  component: AdminPanelPage,
} satisfies Meta<typeof AdminPanelPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
