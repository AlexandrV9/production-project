import type { Meta, StoryObj } from '@storybook/react';

import { testArticle } from '../../model/consts/testArticle';
import { ArticleView } from '../../model/types/article';

import { ArticleListItem } from './ArticleListItem';

const meta = {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
} satisfies Meta<typeof ArticleListItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const List: Story = {
  args: {
    article: testArticle,
    view: ArticleView.LIST,
  },
};

export const Grid: Story = {
  args: {
    article: testArticle,
    view: ArticleView.GRID,
  },
};
