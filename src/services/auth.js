export const TOKEN_KEY = 'a8vZ5ZYVb9c4TyaPwhKTfx8ilehxmPG6lp86KASiHgU';

export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;

export const getToken = () => localStorage.getItem(TOKEN_KEY);
