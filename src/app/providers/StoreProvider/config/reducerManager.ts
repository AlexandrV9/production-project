import { AnyAction, Reducer, ReducersMapObject, combineReducers } from "@reduxjs/toolkit";
import { reducerManager, StateSchema, StateSchemaKey } from "./StateSchema";

export function createReducerManager(initialReducers: ReducersMapObject<StateSchema>): reducerManager {
  const reducers = { ...initialReducers };

  let combinedReducer = combineReducers(reducers);

  let keysToRemove: Array<StateSchemaKey> = [];  // хранит в себе название редьюсеров, которые мы хотим удалить
  // Т.е если хотим удалить reducerLoginForm, то добавляем его в этот массив

  return {
    getReducerMap: () => reducers,  // просто возвращает редьюсеры
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };
        keysToRemove.forEach((key) => {
          delete state[key];
        })
        keysToRemove = [];
      }

      return combinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;

      combinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];

      keysToRemove.push(key);

      combinedReducer = combineReducers(reducers);
    },
  };
}