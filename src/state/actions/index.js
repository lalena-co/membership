import firebase from 'firebase';
import handleErrors from 'utils/handleErrors';

export const AUTH = 'AUTH';
export const DATABASE = 'DATABASE';
export const AUTHORIZE_USER = 'AUTHORIZE_USER';
export const DELETE_USER = 'DELETE_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
export const UPDATE_USER = 'UPDATE_USER';
export const VERIFY_USER = 'VERIFY_USER';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const UPDATE_EMAIL = 'UPDATE_EMAIL';

export const FETCH_WALLET = 'FETCH_WALLET';
export const SAVE_WALLET = 'SAVE_WALLET';

export const FETCH_SEED = 'FETCH_SEED';
export const CREATE_SEED = 'CREATE_SEED';

const FIREBASE_API_KEY = process.env.REACT_APP_FIREBASE_API_KEY;
const FIREBASE_AUTH_DOMAIN = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
const FIREBASE_DATABASE_URL = process.env.REACT_APP_FIREBASE_DATABASE_URL;
const FIREBASE_PROJECT_ID = process.env.REACT_APP_FIREBASE_PROJECT_ID;
const FIREBASE_STORAGE_BUCKET = process.env.REACT_APP_FIREBASE_STORAGE_BUCKET;
const FIREBASE_MESSAGE_SENDER_ID = process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID;

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messageSenderId: FIREBASE_MESSAGE_SENDER_ID,
});

const auth = firebase.auth();
const database = firebase.database();

export const authorizeApplication = () => {
  return (dispatch) => {
    auth.onAuthStateChanged(user => dispatch(updateUser(user)));

    const payload = auth;
    return dispatch({
      type: AUTH,
      payload,
    });
  }
}

export const initializeDatabase = () => {
  return (dispatch) => {
    const payload = database;
    return dispatch({
      type: DATABASE,
      payload,
    });
  }
}

export const authorizeUser = (email = '', password = '') => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.signInWithEmailAndPassword(email, password).catch(handleErrors);
    return dispatch({
      type: AUTHORIZE_USER,
      payload,
    });
  }
}

export const registerUser = (email = '', password = '') => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.createUserWithEmailAndPassword(email, password).catch(handleErrors);
    return dispatch({
      type: REGISTER_USER,
      payload,
    }).then(() => {
      return dispatch(verifyUser());
    });
  }
}

export const deleteUser = (email = '') => {
  return (dispatch, getState) => {
    const { auth, database } = getState();
    const { currentUser } = auth;
    const payload = currentUser.delete();
    return dispatch({
      type: DELETE_USER,
      payload,
    }).then(() => {
      return database.ref(`/users/${currentUser.uid}`).remove();
    });
  }
}

export const verifyUser = () => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.currentUser.sendEmailVerification();
    return dispatch({
      type: VERIFY_USER,
      payload,
    });
  }
}

export const signOutUser = () => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.signOut();
    return dispatch({
      type: SIGN_OUT_USER,
      payload,
    });
  }
}

export const resetPassword = (email = '') => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.sendPasswordResetEmail(email);
    return dispatch({
      type: RESET_PASSWORD,
      payload,
    });
  }
}

export const updateEmail = (email = '') => {
  return (dispatch, getState) => {
    const { auth } = getState();
    const payload = auth.currentUser.updateEmail(email);
    return dispatch({
      type: UPDATE_EMAIL,
      payload,
    });
  }
}

const updateUser = (payload) => {
  return {
    type: UPDATE_USER,
    payload,
  };
}

// authenticated actions
export const fetchWallet = () => {
  return (dispatch, getState) => {
    const { auth, database } = getState();
    const { uid } = auth.currentUser;
    const walletRef = database.ref(`/users/${uid}/wallet`);
    return walletRef.on('value', (snapshot) => {
      return dispatch({
        type: FETCH_WALLET,
        payload: snapshot.val(),
      });
    });
  }
}

export const saveWallet = (data = {}) => {
  return (dispatch, getState) => {
    const { auth, database } = getState();
    const { uid } = auth.currentUser;
    const payload = database.ref(`/users/${uid}/wallet`).set(data);
    return dispatch({
      type: SAVE_WALLET,
      payload,
    });
  }
}

export const fetchSeed = () => {
  return (dispatch, getState) => {
    const { auth, database } = getState();
    const { uid } = auth.currentUser;
    const seedRef = database.ref(`/users/${uid}/seed`);
    return seedRef.on('value', (snapshot) => {
      return dispatch({
        type: FETCH_SEED,
        payload: snapshot.val(),
      });
    });
  }
}

export const createSeed = () => {
  return (dispatch, getState) => {
    const { auth, wallet } = getState();
    const { uid } = auth.currentUser;
    const payload = database.ref(`/users/${uid}/seed`).set({
      ethWalletId: wallet.ethWalletId,
      issued: 0,
    });
    return dispatch({
      type: CREATE_SEED,
      payload,
    });
  }
}
