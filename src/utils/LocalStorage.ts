export const storageConstants = {
  accessToken: 'accessToken',
  dataGoogle: 'dataGoogle',
  refreshToken: 'refreshToken',
};

export const LocalStorage = (function () {
  function _setUserId(userId: any) {
    if (userId) {
      localStorage.setItem('userId', userId);
    }
  }
  function _getUserId() {
    return localStorage.getItem('userId');
  }
  function _setToken(accessToken: any) {
    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    }
  }
  function _setRefreshToken(accessToken: any) {
    if (accessToken) {
      localStorage.setItem('refreshToken', accessToken);
    }
  }
  function _getAccessToken() {
    return localStorage.getItem('accessToken');
  }

  function _getRefreshToken() {
    return localStorage.getItem('refreshToken');
  }

  function _clearToken() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
  }
  function _setDataGoogle(data: any) {
    if (data) {
      localStorage.setItem(storageConstants.dataGoogle, JSON.stringify(data));
    }
  }

  function _getDataGoogle() {
    return localStorage.getItem(storageConstants.dataGoogle);
  }
  return {
    setToken: _setToken,
    getAccessToken: _getAccessToken,
    getRefreshToken: _getRefreshToken,
    clearToken: _clearToken,
    setDataGoogle: _setDataGoogle,
    setRefreshToken: _setRefreshToken,
    setUserId: _setUserId,
    getUserId: _getUserId,
  };
})();
