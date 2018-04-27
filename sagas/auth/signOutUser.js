import { call, put } from 'redux-saga';
import auth from '../../services/auth';

export default function* signOutUser() {
  try {
    const { payload, error } = yield call(auth.signOutUser);

    if (__DEV__) {
      console.log('signOutUserResponse', payload);
    }

    if (error) {
      yield put({
        type: 'SET_MESSAGE',
        payload: new Error(payload),
        error: true,
      });
    } else {
      yield put({
        type: 'SIGN_OUT_USER',
      });
    }
  } catch (error) {
    yield put({
      type: 'SET_MESSAGE',
      payload: new Error(error),
      error: true,
    });
  }
}