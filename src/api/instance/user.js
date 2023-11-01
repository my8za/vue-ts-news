import { user } from "./index-instance";

export function fetchUser(id) {
  return user.get(id);
}