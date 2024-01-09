import type { Meta, StoryObj } from '@storybook/react';

import { ArticleSortField } from '../../model/consts/constsArticle';

import { ArticleSortSelector } from './ArticleSortSelector';

const meta = {
  title: 'shared/ArticleSortSelector',
  component: ArticleSortSelector,
} satisfies Meta<typeof ArticleSortSelector>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {
  args: {
    sort: ArticleSortField.TITLE,
    order: 'asc',
    onChangeOrder: () => {},
    onChangeSort: () => {},
  },
};
