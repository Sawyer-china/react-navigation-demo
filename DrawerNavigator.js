import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Icon,
    Image,
    ScrollView
} from 'react-native'
import { DrawerNavigator, DrawerItems } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MyHomeScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        )
    }
}

class MyNotificationsScreen extends Component {
    static navigationOptions = {
        drawerLabel: 'Notifications'
    }

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        )
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24
    }
})

const MyApp = DrawerNavigator(
    {
        Home: {
            screen: MyHomeScreen
        },
        Notifications: {
            screen: MyNotificationsScreen
        },
        Notifications0: {
            screen: MyNotificationsScreen
        },
        Notifications1: {
            screen: MyNotificationsScreen
        },
        Notifications2: {
            screen: MyNotificationsScreen
        },
        Notifications3: {
            screen: MyNotificationsScreen
        },
        Notifications4: {
            screen: MyNotificationsScreen
        },
        Notifications5: {
            screen: MyNotificationsScreen
        },
        Notifications6: {
            screen: MyNotificationsScreen
        },
        Notifications7: {
            screen: MyNotificationsScreen
        },
        Notifications8: {
            screen: MyNotificationsScreen
        },
        Notifications9: {
            screen: MyNotificationsScreen
        },
        Notifications10: {
            screen: MyNotificationsScreen
        },
        Notifications11: {
            screen: MyNotificationsScreen
        },
        Notifications12: {
            screen: MyNotificationsScreen
        },
        Notifications13: {
            screen: MyNotificationsScreen
        },
        Notifications14: {
            screen: MyNotificationsScreen
        },
        Notifications15: {
            screen: MyNotificationsScreen
        },
        Notifications16: {
            screen: MyNotificationsScreen
        },
        Notifications17: {
            screen: MyNotificationsScreen
        },
        Notifications18: {
            screen: MyNotificationsScreen
        },
        Notifications19: {
            screen: MyNotificationsScreen
        },
        Notifications20: {
            screen: MyNotificationsScreen
        },
        Notifications21: {
            screen: MyNotificationsScreen
        }
    },
    {
        drawerWidth: 300,
        drawerPosition: 'left',
        contentOptions: {
            activeTintColor: '#e91e63',
            activeBackgroundColor: '#ffffff',
            itemsContainerStyle: {
                marginVertical: 0
            },
            iconContainerStyle: {
                opacity: 1
            }
        },
        contentComponent: props => {
            return (
                <View style={{ flex: 1 }}>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 15,
                            backgroundColor: '#fefefe',
                            borderBottomColor: '#000',
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#ff0000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                    </View>
                    <ScrollView
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            height: 200,
                            width: 300
                        }}
                    >
                        <DrawerItems {...props} />
                    </ScrollView>
                    <View
                        style={{
                            paddingVertical: 20,
                            paddingHorizontal: 15,
                            backgroundColor: '#fefefe',
                            borderBottomColor: '#000',
                            borderBottomWidth: 1
                        }}
                    >
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#ff0000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                        <Text style={{ color: '#000' }}>
                            ser Namesrwefsafsaf
                        </Text>
                    </View>
                </View>
            )
        }
    }
) 

export default MyApp
