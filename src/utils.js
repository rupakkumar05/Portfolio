export const getimageurl = (path) => {
  return new URL(`/assets/${path}`, import.meta.url).href;
};
