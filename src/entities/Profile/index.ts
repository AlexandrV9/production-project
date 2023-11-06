import { Profile, ProfileSchema } from './model/types/profile';
import {
  profileReducer,
  profileActions,
} from '../../features/EditableProfileCard/model/slice/profileSlice';
import { fetchProfileData } from '../../features/EditableProfileCard/model/services/fetchProfileData/fetchProfileData';
import { ProfileCard } from './ui/ProfileCard/ProfileCard';

export { Profile, ProfileSchema };

export { profileActions, profileReducer };

export { fetchProfileData };

export { ProfileCard };
