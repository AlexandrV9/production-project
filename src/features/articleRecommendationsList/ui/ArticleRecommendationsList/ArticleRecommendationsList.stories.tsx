import type { Meta, StoryObj } from '@storybook/react';

import { StoreDecorator } from 'shared/config/storybook/StoreDecorator/StoreDecorator';

import { ArticleRecommendationsList } from './ArticleRecommendationsList';
import { testArticle } from './testArticle';

const meta = {
  title: 'features/ArticleRecommendationsList',
  component: ArticleRecommendationsList,
  parameters: {
    mockData: [
      {
        url: `${__API__  }/articles?_limit=3`,
        method: 'GET',
        status: 200,
        response: [
          { ...testArticle, id: '1' },
          { ...testArticle, id: '2' },
          { ...testArticle, id: '3' },
        ],
      },
    ],
  },
} satisfies Meta<typeof ArticleRecommendationsList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Normal: Story = {};
Normal.args = {};
Normal.decorators = [StoreDecorator({})];
