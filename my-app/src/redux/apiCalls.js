import {publicRequest} from "../requestMethod";
import {
  loginFailure,
  loginStart,
  loginSuccess,
  registerFailure,
  registerStart,
  registerSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailure,
} from "./userRedux";

export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    dispatch(registerSuccess(res.data));
  } catch (error) {
    dispatch(registerFailure());
  }
};

export const logout = async (dispatch) => {
  dispatch(logoutStart());
  try {
    await publicRequest.post("/auth/logout");
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailure());
  }
};
