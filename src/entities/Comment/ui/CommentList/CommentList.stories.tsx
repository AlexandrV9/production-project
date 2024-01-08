import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { CommentList } from './CommentList';

const meta = {
  title: 'entities/Comment/CommentList',
  component: CommentList,
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {
  comments: [
    {
      id: '1',
      text: 'comment 1',
      user: {
        id: '1',
        username: 'Tester01',
      },
    },
    {
      id: '2',
      text: 'comment 2',
      user: {
        id: '1',
        username: 'Tester01',
      },
    },
    {
      id: '3',
      text: 'comment 3',
      user: {
        id: '2',
        username: 'Tester02',
      },
    },
  ],
};
Normal.decorators = [StoreDecorator({})];

export const Loading: Story = {};
Loading.args = {
  isLoading: true,
  comments: [],
};
Loading.decorators = [StoreDecorator({})];
