import { createAction } from "../../utils/reducer/createAction.utils";
import { USER_ACTION_TYPES } from "./user.types";

export const setCurrentUser = (user: any) =>
  createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user);
