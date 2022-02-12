import http from "./httpService";

export function addNewProduct(product) {
  return http.post("Product", product);
}
