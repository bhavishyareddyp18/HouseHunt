export const apiErrorMessage = (error, fallback) => {
  if (error.response?.data?.message) return error.response.data.message;
  if (error.code === 'ERR_NETWORK') {
    return 'API server is not reachable. Start the backend and confirm VITE_API_URL points to it.';
  }
  return fallback;
};
