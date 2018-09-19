import { LOGIN_FAILED } from '../actions/loginActions'

const initialState = {
  userInfo: null,
  err: null,
}

export function loginReducer(state = initialState, action) {
  switch (action.type) {

    case LOGIN_FAILED:
    {
      let newState = { ...state, userInfo: null, err: action.payload };
      return newState;
    }      
      
    default:
      return state
  }
}