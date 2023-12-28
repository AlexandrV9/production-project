import { ComponentMeta,ComponentStory } from '@storybook/react';

import { testArticle } from '../../model/consts/testArticle';
import { Article, ArticleView } from '../../model/types/article';

import { ArticleList } from './ArticleList';

const listArticle = Array.from({ length: 3 })
  .fill(0)
  .map((item, index) => ({
    ...testArticle,
    id: String(index),
  })) as Article[];

export default {
  title: 'entities/Article/ArticleList',
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleList>;

const Template: ComponentStory<typeof ArticleList> = (args) => (
  <ArticleList {...args} />
);

export const NormalGrid = Template.bind({});
NormalGrid.args = {
  isLoading: false,
  articles: listArticle,
  view: ArticleView.GRID,
};

export const NormalList = Template.bind({});
NormalList.args = {
  isLoading: false,
  articles: listArticle,
  view: ArticleView.LIST,
};

export const LoadingList = Template.bind({});
LoadingList.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.LIST,
};

export const LoadingGrid = Template.bind({});
LoadingGrid.args = {
  isLoading: true,
  articles: [],
  view: ArticleView.GRID,
};
