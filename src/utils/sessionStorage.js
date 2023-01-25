export const setSession = (value) => {
  sessionStorage.setItem("106343b8-ee68-4563-a1f4-bd2145e3f6f7", value);
};

export const getSession = (key) => {
  return sessionStorage.getItem(key);
};

export const removeSession = (key) => {
  sessionStorage.removeItem(key);
};

export const clearSession = () => {
  sessionStorage.clear();
};
