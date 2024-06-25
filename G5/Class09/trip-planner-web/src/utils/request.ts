import { getAccessToken, getRefreshToken } from "./auth";

const fetchRefreshToken = async () => {
  const response = await fetch("http://localhost:3000/auth/refresh-token", {
    method: "POST",
    headers: {
      "refresh-token": `${getRefreshToken()}`,
    },
  });
  const tokens = await response.json();

  console.log("tokens in refresh", tokens);
  localStorage.setItem("accessToken", tokens.token);
  localStorage.setItem("refreshToken", tokens.refreshToken);
};

const request = async (url: string, options: RequestInit) => {
  return await fetch(url, {
    ...options,
    headers: {
      ...options.headers, // In case I would like to provide additional headers
      Authorization: `Bearer ${getAccessToken()}`,
    },
  });
};

export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  let response = await request(url, options);

  if (response.status === 401) {
    // REFRESH THE TOKEN
    await fetchRefreshToken();
    response = await request(url, options);
  }

  return response;
};
