import type { Meta, StoryObj } from '@storybook/react';

import { CommentItem } from './CommentItem';

const meta = {
  title: 'entities/Comment/CommentItem',
  component: CommentItem,
} satisfies Meta<typeof CommentItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {
  comment: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'Tester01',
    },
  },
};

export const Loading: Story = {};
Loading.args = {
  isLoading: true,
  comment: {
    id: '1',
    text: 'comment 1',
    user: {
      id: '1',
      username: 'Tester01',
    },
  },
};
