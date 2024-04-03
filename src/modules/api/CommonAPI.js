import axios from "axios";
import { applicationProperties } from "@src/application.properties";

const instance = axios.create({
  baseURL: applicationProperties.endpoints.app.url,
});
instance.defaults.headers.common["Authorization"] =
  "Bearer " + applicationProperties.endpoints.app.token;
const post = async (url, params) => {
  return await instance.post(url, params);
};
const get = async (url, params) => {
  return await instance.get(url, params);
};
const setAuthorization = token => {
  instance.defaults.headers.common["Authorization"] = "Bearer " + token;
};
const clearAuthorization = () => {
  delete instance.defaults.headers.common["Authorization"];
};
const CommonAPI = {
  post,
  get,
  setAuthorization,
  clearAuthorization,
};
export default CommonAPI;