function apiResponse(success, message, data) {
  return {
    success,
    message,
    data
  };
}

module.exports = apiResponse;