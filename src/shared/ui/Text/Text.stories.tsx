import type { Meta, StoryObj } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';

import { Text, TextSize, TextTheme } from './Text';

const meta = {
  title: 'shared/Text',
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
  },
};

export const OnlyTitle: Story = {
  args: {
    title: 'Title',
  },
};

export const OnlyText: Story = {
  args: {
    text: 'Desciption',
  },
};

export const Error: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
    theme: TextTheme.ERROR,
  },
};

export const PrimaryDark: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTitleDark: Story = {
  args: {
    title: 'Title',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const OnlyTextDark: Story = {
  args: {
    text: 'Desciption',
  },
  decorators: [ThemeDecorator(Theme.DARK)],
};

export const SizeL: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
    size: TextSize.L,
  },
};

export const SizeM: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
    size: TextSize.M,
  },
};

export const SizeS: Story = {
  args: {
    title: 'Title',
    text: 'Desciption',
    size: TextSize.S,
  },
};
