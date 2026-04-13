const getImageUrl = (filename: string) => {
  return new URL(`/src/assets/images/${filename}`, import.meta.url).href;
};

export {getImageUrl};
