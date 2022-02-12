import http from "./httpService";

export function addNewCategory(category) {
  return http.post("category", category);
}
