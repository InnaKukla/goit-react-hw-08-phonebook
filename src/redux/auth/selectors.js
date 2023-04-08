export const loggedInSelector = state => state.auth.isLoggedIn;
export const userNameSelector = state => state.auth.user.name;
export const userEmailSelector = state => state.auth.user.email;