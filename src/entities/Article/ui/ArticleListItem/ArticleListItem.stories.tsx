import { ComponentMeta,ComponentStory } from '@storybook/react';

import { testArticle } from '../../model/consts/testArticle';
import { ArticleView } from '../../model/types/article';

import { ArticleListItem } from './ArticleListItem';

export default {
  title: 'entities/Article/ArticleListItem',
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleListItem>;

const Template: ComponentStory<typeof ArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export const List = Template.bind({});
List.args = {
  article: testArticle,
  view: ArticleView.LIST
};

export const Grid = Template.bind({});
Grid.args = {
  article: testArticle,
  view: ArticleView.GRID
};

