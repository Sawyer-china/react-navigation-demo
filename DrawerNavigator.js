import React, { Component } from 'react'
import {
    Platform,
    StyleSheet,
    View,
    Text,
    Button,
    Image,
    ScrollView,
    StatusBar
} from 'react-native'
import { DrawerNavigator, DrawerItems, SafeAreaView } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MyHomeScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Home'
    }

    openDrawer = () => {
        // 打开抽屉式导航
        const { navigate } = this.props.navigation
        navigate('DrawerOpen')
        navigate('DrawerOpen') // 关闭抽屉式导航
        navigate('DrawerToggle') // 切换抽屉式导航的 显示 / 隐藏
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                }}
            >
                <Button
                    onPress={() =>
                        this.props.navigation.navigate('Notifications')}
                    title="Go to notifications"
                />
                <Button onPress={() => this.openDrawer()} title="OpenDrawer" />
                <Ionicons
                        name={'ios-home'}
                        size={26}
                        style={{ color: '#ff0000' }}
                    />
            </View>
        )
    }
}

class MyNotificationsScreen extends React.Component {
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

export default DrawerNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            navigationOptions: {
                /**
                 * drawer 导航 icon
                 */
                drawerIcon: ({ tintColor, focused }) =>
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />,
                /**
                 * drawerLabel或headerTitle 备用标题
                 */
                title: '首页备用',
                /**
                 * drawer 标题
                 */
                // drawerLabel: '首页label'
            }
        },
        Notifications: {
            screen: MyNotificationsScreen,
            navigationOptions: {
                /**
                 * drawer 导航 icon
                 */
                drawerIcon: ({ tintColor, focused }) =>
                    <Ionicons
                        name={focused ? 'ios-alarm' : 'ios-alarm-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
            }
        }
    },
    {
        /**
         * 抽屉式导航的 宽度
         */
        // drawerWidth: 200,
        /**
         * 抽屉式导航的 从哪个方向出来, rihgt, left
         */
        drawerPosition: 'left',
        /**
         * 自定义抽屉菜单的 内容
         */
        // contentComponent: props => {
        //     console.log(props)
        //     return (
        //         <View>
        //             <View style={{ height: 90, backgroundColor: '#ff0000' }}>
        //                 <View style={{ height: 20 }} />
        //                 <Text>123</Text>
        //             </View>
        //             <StatusBar backgroundColor="blue" barStyle="dark-content" />
        //             <ScrollView>
        //                 <SafeAreaView>
        //                     {/* SafeAreaView
        //                        匹配iphonex  安全区域视图 */}
        //                     <DrawerItems {...props} />
        //                 </SafeAreaView>
        //             </ScrollView>
        //         </View>
        //     )
        // },
        /**
         * 启用本地动画，测试好像没啥变化
         */
        useNativeAnimations: false,
        /**
         * 抽屉容器的背景颜色 默认为白色
         */
        drawerBackgroundColor: '#fff',
        /**
         * 路由默认
         */
        initialRouteName: 'Home',
        /**
         * 需要显示的路由，也可以进行排序
         */
        // order: []
        backBehavior: '',
        /**
         * 内容选项
         */
        contentOptions: {
            items: [],
            activeItemKey: 'Notifications',
            /**
             * 当前选中 tab 的色调
             */
            activeTintColor: '#ff0000',
            /**
             * 当前选中 tab 的背景色调
             */
            activeBackgroundColor: '#fff',
            /**
             * 未选中时的 色调
             */
            inactiveTintColor: '#000',
            /**
             * 未选中时的 背景颜色
             */
            inactiveBackgroundColor: '#fefefe',
            /**
             * 按下时触发
             */
            onItemPress(router) {
                console.log(router)
            },
            /**
             * 容器的样式 View
             */
            itemsContainerStyle: {
                // backgroundColor: 'yellow'
            },
            /**
             * 单个item容器样式 View
             */
            itemStyle: {
                // backgroundColor: 'yellow'
            },
            /**
             * label 字体样式
             */
            labelStyle: {
                // color: '#000'
            },
            /**
             * icon 容器样式
             */
            iconContainerStyle: {
                // backgroundColor: 'blue'
            }
        }
    }
)
