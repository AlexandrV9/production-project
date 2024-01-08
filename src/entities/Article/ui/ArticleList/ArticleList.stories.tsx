import type { Meta, StoryObj } from '@storybook/react';

import { testArticle } from '../../model/consts/testArticle';
import { Article, ArticleView } from '../../model/types/article';

import { ArticleList } from './ArticleList';

const listArticle = Array.from({ length: 3 })
  .fill(0)
  .map((item, index) => ({
    ...testArticle,
    id: String(index),
  })) as Article[];

const meta = {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
} satisfies Meta<typeof ArticleList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalGrid: Story = {};
NormalGrid.args = {
  isLoading: false,
  articles: listArticle,
  view: ArticleView.GRID,
};

export const NormalList: Story = {};
NormalList.args = {
  isLoading: false,
  articles: listArticle,
  view: ArticleView.LIST,
};

export const LoadingList: Story = {};
LoadingList.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};

export const LoadingGrid: Story = {};
LoadingGrid.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.GRID,
};
