import request from "../utils/request";

export function queryUser() {
  // return request('/api/users');
  return request("https://randomuser.me/api");
}
