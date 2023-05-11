import auth from '@react-native-firebase/auth';

export const registerUser = async (email: string, password: string) => {
  try {
    await auth().createUserWithEmailAndPassword(email, password);
  } catch (err: any) {
    if (err.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(err);
  }
};

export const signInUser = async (email: string, password: string) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
  } catch (err: any) {
    if (err.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (err.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    if (err.code === 'auth/user-not-found') {
      console.log('That email address is not registered!');
    }

    console.error(err);
  }
};

export const getAccessToken = async () => {
  try {
    const accessToken = await auth().currentUser?.getIdToken();

    return accessToken;
  } catch (err) {
    throw new Error();
  }
};
