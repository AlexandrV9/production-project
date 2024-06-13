import { StateSchema } from "@/app/providers/StoreProvider";

import { getLoginPassword } from "./getLoginPassword";

describe('getLoginPassword.test', () => {
  test('should return password', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: "12345"
      }
    }
    expect(getLoginPassword(state as StateSchema)).toEqual("12345");
  });

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginPassword(state as StateSchema)).toEqual("");
  });
});
