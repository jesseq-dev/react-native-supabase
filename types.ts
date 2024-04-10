import {NavigationProp} from '@react-navigation/native';

export type ScreenNames = ['Home', 'Auth']; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;
