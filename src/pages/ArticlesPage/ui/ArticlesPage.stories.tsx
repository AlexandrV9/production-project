import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';
import { testArticle } from 'entities/Article/model/consts/testArticle';
import { ArticleView } from 'entities/Article';
import ArticlesPage from './ArticlesPage';

export default {
  title: 'pages/ArticlesPage',
  component: ArticlesPage,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticlesPage>;

const Template: ComponentStory<typeof ArticlesPage> = (args) => (
  <ArticlesPage {...args} />
);

export const NormalGrid = Template.bind({});
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

export const NormalList= Template.bind({});
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

export const LoadingGrid = Template.bind({});
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

export const LoadingList= Template.bind({});
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

export const Error = Template.bind({});
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

