import * as React from 'react';
import { TextInput, TextInputProps } from 'react-native-paper';

type AppTextInputProps = TextInputProps;

export const AppTextInput: React.FC<AppTextInputProps> = (props) => {
  return (
    <TextInput {...props} />
  )
}