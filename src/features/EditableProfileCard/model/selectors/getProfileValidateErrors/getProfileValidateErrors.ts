import { StateSchema } from "app/providers/StoreProvider";

export function getProfileValidateErrors(state: StateSchema) {
  return state.profile?.validateError
}