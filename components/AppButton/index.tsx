import * as React from 'react';
import { Button, ButtonProps } from 'react-native-paper';

type AppButtonProps = ButtonProps;

export const AppButton: React.FC<AppButtonProps> = (props) => {
  return (
    <Button
      buttonColor={'blue'}
      textColor='white'
      {...props}
    />
  )
}