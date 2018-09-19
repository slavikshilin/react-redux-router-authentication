export const LOGIN_FAILED = 'LOGIN_FAILED'

function loginError(err) {
  return {
    type: LOGIN_FAILED,
    payload: err
  }
}

export function checkLogin (login, password, history) {
  return (dispatch) => {
    
    if ((login === 'test') && (password === 'test')) {
      let token = { login: 'test', name: 'Супертестер' }

      //сохранение токена в localStorage
      localStorage.setItem('cks_token', JSON.stringify(token))
      history.push("/");
    } else {
      dispatch(loginError(new Error('Неверный логин или пароль')))
    }
  }
};
