import { Location, NavigateOptions, To } from 'react-router-dom';
import {
  AnyAction,
  // @ts-ignore
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';

import { ArticleDetailsPageSchema } from 'pages/ArticleDetailsPage';
import { ArticlePageSchema } from 'pages/ArticlesPage';

import { AddNewCommentSchema } from 'features/addNewComment';
import { LoginSchema } from 'features/AuthByUsername';
import { ProfileSchema } from 'features/EditableProfileCard';
import { ScrollSaveSchema } from 'features/ScrollSave';

import { ArticleDetailsSchema } from 'entities/Article';
import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User';

import { rtkApi } from 'shared/api/rtkApi';

// eslint-disable-next-line import/no-cycle
import { AppDispatch } from './store';

export interface StateSchema {
  counter: CounterSchema;
  user: UserSchema;
  scrollSave: ScrollSaveSchema;
  [rtkApi.reducerPath]: ReturnType<typeof rtkApi.reducer>

  // Асинхронные редьюсеры
  loginForm?: LoginSchema;
  profile?: ProfileSchema;
  addNewComment?: AddNewCommentSchema;
  articlePage?: ArticlePageSchema;
  articleDetails?: ArticleDetailsSchema;
  articleDetailsPage?: ArticleDetailsPageSchema;
}

export type StateSchemaKey = keyof StateSchema; // counter | user | loginForm

export interface reducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>;
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>;
  add: (key: StateSchemaKey, reduce: Reducer) => void;
  remove: (key: StateSchemaKey) => void;
}

export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: reducerManager;
}

export interface ThunkExtraArg {
  api: AxiosInstance;
  navigate?: (to: To, options?: NavigateOptions) => void;
  location?: Location;
}

export interface ThunkConfig<T> {
  rejectWithValue: T;
  extra: ThunkExtraArg;
  dispatch: AppDispatch;
  state: StateSchema;
}
