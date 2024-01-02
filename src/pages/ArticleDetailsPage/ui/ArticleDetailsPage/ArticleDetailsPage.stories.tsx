import { ComponentMeta,ComponentStory } from '@storybook/react';

import { testArticle } from 'entities/Article/model/consts/testArticle';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import ArticleDetailsPage from './ArticleDetailsPage';

export default {
  title: 'pages/ArticleDetailsPage/ArticleDetailsPage',
  component: ArticleDetailsPage,
  parameters: {
    router: {
      path: '/articles/:id',
      route: '/articles/1',
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof ArticleDetailsPage>;

const Template: ComponentStory<typeof ArticleDetailsPage> = (args) => (
  <ArticleDetailsPage {...args} />
);

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [
  StoreDecorator({
    articleDetails: {
      data: testArticle,
    },
  }),
];
