interface ParamsObj {
  response_type: string;
  client_id: string;
  redirect_uri: string;
  state: string;
  scope: string;
}

export const getURLWithQueryParams = (url: string, obj: ParamsObj) => {
  const query = Object.entries(obj)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");
  return `${url}?${query}`;
};
