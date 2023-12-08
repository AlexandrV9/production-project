import { CombinedState, Reducer, ReducersMapObject, configureStore } from '@reduxjs/toolkit';
import { Location, NavigateOptions, To } from 'react-router-dom';

import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { scrollSaveReducer } from 'features/ScrollSave';
import { $api } from 'shared/api/api';

import { StateSchema, ThunkExtraArg } from './StateSchema';
import { createReducerManager } from './reducerManager';


export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: (to: To, options?: NavigateOptions) => void,
  location?: Location
) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    counter: counterReducer,
    user: userReducer,
    scrollSave: scrollSaveReducer
  };

  const reducerManager = createReducerManager(rootReducer);

  const extraArg: ThunkExtraArg = {
    api: $api,
    navigate,
    location
  }

  const store = configureStore({
    reducer: reducerManager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg
        },
      }),
  });

  // @ts-ignore`
  store.reducerManager = reducerManager;

  return store;
}

export type RootState = ReturnType<typeof createReduxStore>;
export type AppDispatch = RootState['dispatch'];
