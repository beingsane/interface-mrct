export const token = process.env.APP_SECRET;

export const getToken = () => localStorage.getItem(token);
