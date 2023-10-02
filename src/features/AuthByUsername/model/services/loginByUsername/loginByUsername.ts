import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { userActions } from 'entities/User';
import { User } from 'entities/User/model/types/user';
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsername {
  username: string;
  password: string;
}

enum LoginErrors {
  INCORRECT_DATA = "",
  SERVER_ERROR = ""
}

export const loginByUsername = createAsyncThunk<
  User,
  LoginByUsername,
  { rejectValue: string }
>('user/loginByUsername', async (authData, thunkAPI) => {
  try {
    const res = await axios.post<User>('http://localhost:8000/login', authData);
    const { data } = res;

    if (!data) {
      throw new Error();
    }

    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(data));
    thunkAPI.dispatch(userActions.setAuthData(data));

    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue('error');
  }
});
