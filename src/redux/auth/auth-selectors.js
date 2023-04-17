const getIsLoggedIn = (state) => state.auth.isLoggedIn;
const getIsFetchCurrentAdmin = (state) => state.auth.isFetchingAdmin;
// const getAdminToken = (state) => state.auth.token;
const authSelectors = {
  getIsLoggedIn,
  getIsFetchCurrentAdmin,
  // getAdminToken,
};
export default authSelectors;
