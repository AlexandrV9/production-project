import { createAsyncThunk } from '@reduxjs/toolkit';

import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '@/entities/Profile';

enum LoginErrors {
  INCORRECT_DATA = '',
  SERVER_ERROR = '',
}

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  ThunkConfig<string>
>('profile/fetchProfileData', async (profileId, thunkApi) => {
  const { extra, rejectWithValue } = thunkApi;

  try {
    const res = await extra.api.get<Profile>(`/profile/${profileId}`);

    if(!res.data) {
      throw new Error()
    }

    return res.data;
  } catch (error) {
    console.log(error);
    return rejectWithValue('error');
  }
});
