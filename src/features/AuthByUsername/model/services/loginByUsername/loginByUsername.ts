import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { ThunkConfig, ThunkExtraArg } from '@/app/providers/StoreProvider';
import { userActions } from '@/entities/User';
import { User } from '@/entities/User/model/types/user';
import { USER_LOCALSTORAGE_KEY } from '@/shared/const/localstorage';

interface LoginByUsername {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = '',
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  ThunkConfig<string>
>('user/loginByUsername', async (authData, thunkApi) => {
  const { extra, dispatch, rejectWithValue } = thunkApi;

  
  try {
    const res = await extra.api.post<User>('/login', authData);
    const { data } = res;

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    dispatch(userActions.setAuthData(data));

    return data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
