export const actionTypes = {
  SET_TOKEN: 'SET_TOKEN',
}

export function setToken(token) {

  return {
    type: actionTypes.SET_TOKEN,
    token
  };
}
