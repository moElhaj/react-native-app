import React from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';

export function Loader() {
    return (
        <View style={[styles.container, styles.loader]}>
            <ActivityIndicator />
        </View>
    );
}

export function Error() {
    return (
        <View style={styles.container}>
            <Text>Somthing Wrong</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loader: {
        backgroundColor: '#FFF',
    },
});

