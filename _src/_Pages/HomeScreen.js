import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

function HomeScreen () {
    return (
        <View style={styles.container} >
            <Text>Tela HOME</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default HomeScreen;