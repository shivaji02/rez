import React from 'react';
import { TouchableOpacity, Text, StyleSheet, GestureResponderEvent, ViewStyle, TextStyle } from 'react-native';

type ButtonProps = {
    title: string;
    onPress: (event: GestureResponderEvent) => void;
    style?: ViewStyle;
    textStyle?: TextStyle;
    disabled?: boolean;
};

export default function Button({ title, onPress, style, textStyle, disabled }: ButtonProps) {
    return (
        <TouchableOpacity
            style={[
                styles.button,
                style,
                disabled && styles.disabled
            ]}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#0bb586',
        borderRadius: 25,
        paddingVertical: 14,
        paddingHorizontal: 32,
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 3,
        minWidth: 120,
        marginVertical: 8,
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
        letterSpacing: 1,
    },
    disabled: {
        backgroundColor: '#b0b0b0',
    },
});