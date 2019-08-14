const saveItem = (key: string, item: any) => {
  localStorage.setItem(key, JSON.stringify({ value: item }));
};

const getItem = (key: string) => {
  const storedItem = localStorage.getItem(key);
  if (!storedItem) {
    return false;
  }
  return JSON.parse(storedItem).value;
};

const removeItem = (key: string) => {
  localStorage.removeItem(key);
};

export { saveItem, getItem, removeItem };
