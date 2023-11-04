import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';

import { Profile } from '../../types/profile';

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = '',
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<string>
>('profile/fetchProfileData', async (_, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const res = await extra.api.get<Profile>('/profile');

    console.log(res.data)
    return res.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
