import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button, Image } from 'react-native'
import { TabNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class MyHomeScreen extends Component {
    render() {
        return (
            <Button
                onPress={() => {
                    this.props.navigation.navigate('Notifications')
                }}
                title="Go to notifications"
            />
        )
    }
}

class MyNotificationsScreen extends Component {
    render() {
        return (
            <Button
                onPress={() => {
                    this.props.navigation.goBack()
                }}
                title="Go back home"
            />
        )
    }
}

class Me extends Component {
    render() {
        return <Text>Meeee</Text>
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26
    }
})

export default TabNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            navigationOptions: {
                /**
                 * tab 导航 icon
                 */
                tabBarIcon: ({ tintColor, focused }) =>
                    <Ionicons
                        name={focused ? 'ios-home' : 'ios-home-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
            }
        },
        Notifications: {
            screen: MyNotificationsScreen,
            navigationOptions: {
                /**
                 * icon
                 */
                tabBarIcon: ({ tintColor, focused }) =>
                    <Ionicons
                        name={focused ? 'ios-alarm' : 'ios-alarm-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />,
                /**
                 * 底部 tab 的 label 值 可以是一个 react 元素
                 */
                tabBarLabel: 'fdsaf',
                /**
                 * 底部 tab 是否显示
                 */
                tabBarVisible: true,
                /**
                 * 当前 tab 的 label  如果 headerTitle 或者 tabBarLabel 没有指定则使用该属性
                 */
                title: 'Notifications',
                /**
                 * 是否启用滑动
                 */
                swipeEnabled: false,
                /**
                 * 点击是触发该方法
                 * 
                 * @param {Function} 去哪一个页面
                 * @param {Object} scene
                 */
                tabBarOnPress({ jumpToIndex, scene }) {
                    jumpToIndex(scene.index)
                }
            }
        },
        Me: {
            screen: Me,
            navigationOptions: {
                tabBarIcon: ({ tintColor, focused }) =>
                    <Ionicons
                        name={focused ? 'ios-person' : 'ios-person-outline'}
                        size={26}
                        style={{ color: tintColor }}
                    />
            }
        }
    },
    {
        /**
         * tab 显示的位置
         * top：顶部
         * bottom： 底部
         * 默认情况 安卓顶部显示，IOS底部显示
         */
        tabBarPosition: 'bottom',
        /**
         * 是否允许在手势滑动 true or false 建议不设置
         */
        swipeEnabled: false,
        /**
         * 路由切换时是否开启过渡动画效果 不设置
         */
        animationEnabled: false,
        /**
         * 默认显示的屏幕
         */
        initialRouteName: 'Me',
        /**
         * 定义 tab 选项卡显示的顺序或个数
         */
        // order: ['Home', 'Notifications'],
        /**
         * 待定
         */
        // backBehavior: true,
        /**
         * tabBar 的配置
         */
        tabBarOptions: {
            /**
             * 是否显示 label 文字 true or false
             * 
             * @default true
             */
            showLabel: true,
            /**
             * 是否显示 Icon
             * ios 默认为true
             * android 默认为false
             */
            showIcon: true,
            /**
             * label 文字是否大写
             * android 默认 true
             * ios 默认 false
             */
            upperCaseLabel: false,
            /**
             * 点击波纹样式
             * android >= only
             */
            // pressColor: '#000',
            /**
             * 按下的不透明度
             * ios and android < 5.0 only
             */
            pressOpacity: 0.2,
            /**
             * tab 是否开启滚动 待测试
             */
            // scrollEnabled: true,
            // tabStyle: {
            //     backgroundColor: '#f0f0f0'
            // },
            /**
             * 指示器的样式设置  only andriod
             */
            indicatorStyle: {
                backgroundColor: '#fff',
                flex: 1,
                height: 50
            },
            /**
             * 底部导航 文字 部分样式
             */
            labelStyle: {
                // color: '#000000',
                fontSize: 11,
                marginTop: Platform.OS === 'ios' ? 14 : 0
            },
            /**
             * 底部导航 icon 部分样式
             */
            // iconStyle: {
            //     color: '#ff0000'
            // },
            /**
             * 底部 tab 容器样式
             */
            style: {
                backgroundColor: '#fff',
                height: 50,
                borderTopColor: '#f1f1f1',
                shadowColor: '#aaa',
                shadowOffset: {
                    width: 0,
                    height: 4
                },
                shadowOpacity: 0.6,
                shadowRadius: 10
            },
            /**
             * 选中时的 tab label 和 icon 的颜色
             */
            activeTintColor: '#ff0000',
            /**
             * 选中时的 tab 的背景色 ios 专属
             */
            activeBackgroundColor: '#ffffff',
            /**
             * 未选中时的 tab label 和 icon 的颜色
             */
            inactiveTintColor: '#000',
            /**
             * 未选中时的 tab 的背景色 ios 专属
             */
            inactiveBackgroundColor: '#fff'
        }
    }
)
