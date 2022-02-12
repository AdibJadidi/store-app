import http from "./httpService";

export function getAllObject(object) {
  return http.get(object);
}
