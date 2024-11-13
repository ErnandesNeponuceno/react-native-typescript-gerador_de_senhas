import React, {useState} from 'react';
import { Pressable, Text, GestureResponderEvent  } from 'react-native';

import { styles } from './LocalButtonStyles';

interface LocalButtonProps {
    onPress: (event: GestureResponderEvent) => void; 
    title: string; 
}

export function LocalButton({ onPress, title }: LocalButtonProps) {
    
    return (
    <Pressable
        style={({ pressed }) => [
            styles.button,
            pressed && styles.buttonPressed, 
        ]}
        onPress={onPress}
    >
        <Text style={styles.text}>{title}</Text>
    </Pressable>
        
    );
}