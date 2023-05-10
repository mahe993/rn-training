export type Sort = <T>(arg: Array<T>) => Array<T>;

// export enum AuthScreens {
//   SIGNUP = 'Signup',
//   LOGIN = 'Login',
// }
// export type AuthStackParamsList = {
//   [AuthScreens.SIGNUP]: undefined;
//   [AuthScreens.LOGIN]: undefined;
// };

export enum HomeScreens {
  QUESTIONS = 'Questions',
  SUMEVEN = 'SumEven',
  NOVOWELS = 'NoVowels',
  DOGPIC = 'DogPic',
  TIMER = 'Timer',
  MULTIPLYSTRING = 'MultiplyString',
  ACCOUNT = 'Account',
  PALINDROME = 'Palindrome',
  SORT = 'Sort',
  TODAY = 'Today',
  SEARCH = 'Search',
  CONTACT = 'Contact',
  REGISTER = 'Register',
  LOGIN = 'Login',
  HOME = 'Home',
}

export type HomeStackParamsList = {
  [key in HomeScreens]: undefined;
};

export type RootStackParamList = HomeStackParamsList;
