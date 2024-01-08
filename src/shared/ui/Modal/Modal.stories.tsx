import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import Modal from './Modal';

const meta = {
  title: 'shared/Modal',
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia incidunt possimus commodi et debitis, officiis quidem asperiores dignissimos beatae tempora sit magnam quod sed repellat quis magni ullam error?',
  },
};

export const Dark: Story = {
  args: {
    isOpen: true,
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam officia incidunt possimus commodi et debitis, officiis quidem asperiores dignissimos beatae tempora sit magnam quod sed repellat quis magni ullam error?',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};
