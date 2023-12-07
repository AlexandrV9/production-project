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

export const Normal = Template.bind({});
Normal.args = {};
Normal.decorators = [StoreDecorator({
  articlePage: {
    view: ArticleView.GRID,
    isLoading: false,
    ids: ["1", "2"],
    entities: {
      "1": {
        ...testArticle,
        id: "1",
      },
      "2": {
        ...testArticle,
        id: "2",
        
      }
    },
    error: ""
  }
})]
