const saveItem = (key: string, item: any): void => {
  localStorage.setItem(key, JSON.stringify({ value: item }));
};

const getItem = (key: string): string | boolean => {
  const storedItem = localStorage.getItem(key);
  if (!storedItem) {
    return false;
  }
  return JSON.parse(storedItem).value;
};

const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};

export { saveItem, getItem, removeItem };
