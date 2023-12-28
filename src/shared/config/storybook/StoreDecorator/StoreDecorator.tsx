import { Story } from '@storybook/react';

import { StateSchema, StoreProvider } from 'app/providers/StoreProvider';

import { articleDetailsPageReducer } from 'pages/ArticleDetailsPage/model/slices';
import { articlePageReducer } from 'pages/ArticlesPage';

import { addNewCommentReducer } from 'features/addNewComment/modal/slices/addNewCommentSlice';
import { loginReducer } from 'features/AuthByUsername/model/slice/loginSlice';

import { articleDetailsReducer } from 'entities/Article/model/slice/articleDetailsSlice';
import { profileReducer } from 'entities/Profile';

import { ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';

import 'app/styles/index.scss';

const defaultAsyncReducer: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer,
  articleDetails: articleDetailsReducer,
  addNewComment: addNewCommentReducer,
  articlePage: articlePageReducer,
  articleDetailsPage: articleDetailsPageReducer
};

export const StoreDecorator =
  (state: DeepPartial<StateSchema>, asyncReducers?: ReducersList) =>
    (StoryComponent: Story) => (
      <StoreProvider
        initialState={state}
        asyncReducers={{ ...defaultAsyncReducer, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    );
