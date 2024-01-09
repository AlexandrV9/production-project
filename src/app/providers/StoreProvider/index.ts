import type {
  ReduxStoreWithManager,
  StateSchema,
  ThunkConfig,
  ThunkExtraArg,
} from './config/StateSchema';
import type { AppDispatch } from './config/store';
import { createReduxStore } from './config/store';
import StoreProvider from './ui/StoreProvider';

export {
  AppDispatch,
  createReduxStore,
  ReduxStoreWithManager,
  StateSchema,
  StoreProvider,
  ThunkConfig,
  ThunkExtraArg,
};
