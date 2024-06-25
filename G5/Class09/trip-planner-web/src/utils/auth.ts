export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");

  return accessToken;
};

export const getRefreshToken = () => {
  const refreshToken = localStorage.getItem("refreshToken");

  return refreshToken;
};

export const isAuthenticated = Boolean(
  getAccessToken() && getAccessToken() !== "undefined"
);
