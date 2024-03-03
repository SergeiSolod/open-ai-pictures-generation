import axios from "axios";

const $api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

$api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${import.meta.env.VITE_OPEN_AI_KEY}`;
  config.headers.model = "dall-e-3";
  return config;
});

export const mainApi = {
  getImage({ text }) {
    return $api.post<any>("/images/generations", {
      // description of the picture
      prompt: text,
      // how many images to generate
      n: 1,
      // picture size
      size: "512x512",
    });
  },
};
