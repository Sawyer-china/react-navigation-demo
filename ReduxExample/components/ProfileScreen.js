import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    welcome: {
        fontSize: 30,
        textAlign: 'center',
        margin: 10
    }
})

const ProfileScreen = o => {
    console.log(o)
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}>Profile Screen</Text>
        </View>
    )
}

ProfileScreen.navigationOptions = {
    title: 'Profile'
}

export default ProfileScreen
