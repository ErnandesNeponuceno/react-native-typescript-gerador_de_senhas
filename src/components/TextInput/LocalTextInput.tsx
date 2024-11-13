import React from 'react';
import {TextInput } from 'react-native';

import { styles } from './LocalTextInputStyles';

interface TextInputProps{
  pass:string
}

export function LocalTextInput(props: TextInputProps) {
  return (
    <TextInput
    style={styles.inputer}
    placeholder='password'
    value={props.pass}
    >
    </TextInput>
  );
}