import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native"
import styles from './Style'
import { Logo } from "../../components/Logo/Logo";
import { LocalTextInput } from "../../components/TextInput/LocalTextInput";
import { LocalButton } from "../../components/Button/LocalButton";
import generatePass from "../../services/passwordService";
import * as Clipboard from 'expo-clipboard';


export default function Home() {
    const[pass, setPass] = useState('')

    function handlerGenerateutton(){
      let generatePassword = generatePass()
      setPass(generatePassword)
    }

    function handleCopyButton(){
      Clipboard.setStringAsync(pass)
    }

    return(
      <View style={styles.container}>

        <View style={styles.LogoContainer}>
          <Logo></Logo>
        </View>

        <View>
          <LocalTextInput pass={pass}></LocalTextInput>
        </View>

        <View>
          <LocalButton
            title="Gerar" 
            onPress={handlerGenerateutton} 
            >
            </LocalButton>
        </View>
        <View>
          <LocalButton
            title="Copiar" 
            onPress={handleCopyButton} 
            >
            </LocalButton>
        </View>

      <Text>Seu App gerador de senhas!</Text>
      <StatusBar style="auto" />
      </View> 
    )
}

