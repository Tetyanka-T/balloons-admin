const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchCurrentAdmin = (state) => state.auth.isFetchingAdmin;
const authSelectors = {
  getIsLoggedIn,
  getIsFetchCurrentAdmin,
};
export default authSelectors;
