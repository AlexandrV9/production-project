import type { Meta, StoryObj } from '@storybook/react';

import { ArticleView } from 'entities/Article';
import { testArticle } from 'entities/Article/model/consts/testArticle';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticlesPage from './ArticlesPage';

const meta = {
  title: 'pages/Article/ArticlesPage',
  component: ArticlesPage,
} satisfies Meta<typeof ArticlesPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NormalGrid: Story = {};
NormalGrid.args = {};
NormalGrid.decorators = [
  StoreDecorator({
    articlePage: {
      view: ArticleView.GRID,
      isLoading: false,
      ids: ['1', '2'],
      entities: {
        '1': {
          ...testArticle,
          id: '1',
        },
        '2': {
          ...testArticle,
          id: '2',
        },
      },
      error: '',
    },
  }),
];

export const NormalList: Story = {};
NormalList.args = {};
NormalList.decorators = [
  StoreDecorator({
    articlePage: {
      view: ArticleView.LIST,
      isLoading: false,
      ids: ['1', '2'],
      entities: {
        '1': {
          ...testArticle,
          id: '1',
        },
        '2': {
          ...testArticle,
          id: '2',
        },
      },
      error: '',
    },
  }),
];

export const LoadingGrid: Story = {};
LoadingGrid.args = {};
LoadingGrid.decorators = [
  StoreDecorator({
    articlePage: {
      view: ArticleView.GRID,
      isLoading: true,
      ids: [],
      entities: {},
      error: '',
    },
  }),
];

export const LoadingList: Story = {};
LoadingList.args = {};
LoadingList.decorators = [
  StoreDecorator({
    articlePage: {
      view: ArticleView.LIST,
      isLoading: true,
      ids: [],
      entities: {},
      error: '',
    },
  }),
];

export const Error: Story = {};
Error.args = {};
Error.decorators = [
  StoreDecorator({
    articlePage: {
      view: ArticleView.GRID,
      isLoading: true,
      ids: [],
      entities: {},
      error: 'error',
    },
  }),
];
