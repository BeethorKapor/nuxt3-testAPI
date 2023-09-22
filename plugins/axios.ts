import axios from "axios";
export default defineNuxtPlugin((nuxtApp) => {
  const defaultUrl = "http://localhost:8080";
  let api = axios.create({
    baseURL: defaultUrl,
  });
  return {
    provide: {
      api: api,
    },
  };
});