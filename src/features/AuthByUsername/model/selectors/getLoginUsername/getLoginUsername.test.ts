import { StateSchema } from "@/app/providers/StoreProvider";

import { getLoginUsername } from "./getLoginUsername";

describe('getLoginUsername.test', () => {
  test('should return username', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: "test"
      }
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("test");
  });

  test('should work with emty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getLoginUsername(state as StateSchema)).toEqual("");
  });
});
