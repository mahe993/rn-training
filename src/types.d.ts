export type Sort = <T>(arg: Array<T>) => Array<T>;

export type RootStackParamList = {
  Home: undefined;
  Profile: {userId: string};
  Settings: undefined;
};
