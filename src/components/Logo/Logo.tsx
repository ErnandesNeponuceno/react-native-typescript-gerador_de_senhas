import React from 'react';
import { View, Text, Image  } from 'react-native';
import { styles } from './LogoStyles';
import logo from '../../../assets/password.png'

export function Logo() {
  return (
    <>
        <Text style={styles.title}>
            PASSWORD GENERATOR
        </Text>
        <Image 
            style={styles.image} 
            source={logo}
        />
    </>
  );
}