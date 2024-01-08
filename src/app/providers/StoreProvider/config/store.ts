import { Location, NavigateOptions, To } from 'react-router-dom';
import {
  // @ts-ignore
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from '@reduxjs/toolkit';

import { scrollSaveReducer } from 'features/ScrollSave';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';

import { $api } from 'shared/api/api';
import { rtkApi } from 'shared/api/rtkApi';

// eslint-disable-next-line import/no-cycle
import { createReducerManager } from './reducerManager';
import { StateSchema, ThunkExtraArg } from './StateSchema';

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
  location?: Location,
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
    location,
  };

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  });

  // @ts-ignore`
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReturnType<typeof createReduxStore>;
export type AppDispatch = RootState['dispatch'];
