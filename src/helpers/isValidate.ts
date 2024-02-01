export const isValidate = (title: string, content: string) => {
  if (title.trim() === "") {
    return false;
  }

  if (content.trim() === "") {
    return false;
  }

  return true;
};
