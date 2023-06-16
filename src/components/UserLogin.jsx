export const handleGetUserData = () => {
  const userData = sessionStorage.getItem("token");
  const userIn = JSON.parse(userData);
  if (userIn && userIn.enable === true) {
    return userIn;
  }
};
