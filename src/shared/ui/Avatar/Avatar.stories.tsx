import type { Meta, StoryObj } from '@storybook/react';

import TestImg from 'shared/assets/tests/test-photo.jpeg';

import { Avatar } from './Avatar';

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    size: 150,
    src: TestImg,
  },
};

export const Small: Story = {
  args: {
    size: 50,
    src: TestImg,
  },
};
