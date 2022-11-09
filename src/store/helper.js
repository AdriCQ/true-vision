export const set = (key, value) => localStorage.setItem(key, JSON.stringify(value));
export const get = (key) => localStorage.getItem(key) && localStorage.getItem(key) != 'undefined' ? JSON.parse(localStorage.getItem(key)) : null;

export const clear = () => localStorage.clear();