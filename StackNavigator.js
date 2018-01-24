import React, { Component } from 'react'
import { Platform, StyleSheet, View, Text, Button, Image } from 'react-native'
import { StackNavigator, NavigationActions } from 'react-navigation'

class MyHomeScreen extends Component {
    static navigationOptions = ({ navigation }) => {
        const { state: { params } } = navigation
        return {
            title: `Home ${params.user}`
        }
    }
    render() {
        const {
            state: { params, routerName, key },
            navigate,
            setParams
        } = this.props.navigation
        const { user } = params
        return (
            <View style={[styles.disFlex]}>
                <Text style={{ fontSize: 20 }}>
                    HomePage {params.user}
                </Text>
                <Button
                    onPress={() => {
                        navigate('Users', { user: params.user })
                    }}
                    title={`User with ${params.user}`}
                />
                <Button
                    onPress={() => {
                        let newUser = user === 'Sawyer' ? 'Lucy' : 'Sawyer'
                        setParams({ user: newUser })
                    }}
                    title="change header title"
                />
            </View>
        )
    }
}

class MyUserScreen extends Component {
    // 以静态方法的形式配置 navigationOptions
    static navigationOptions = ({ navigation }) => {
        const { state: { params } } = navigation
        return {
            title: `User is ${params.user}`
        }
    }
    render() {
        const { state: { params } } = this.props.navigation
        return (
            <View style={styles.disFlex}>
                <Text style={{ fontSize: 20 }}>
                    UserName: {params.user}
                </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    disFlex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default StackNavigator(
    {
        Home: {
            screen: MyHomeScreen,
            navigationOptions: {}
        },
        Users: {
            screen: MyUserScreen,
            navigationOptions: {}
        }
    },
    {
        /**
         * header 头部标题切换过渡效果
         * 
         * float：切换页面时保持顶部固定显示 从右至左 平滑显示 这是 ios 上常见的模式
         * screen：切换时整屏淡入淡出，每个屏幕上都有自身的标题  这是 android 常见的模式
         * none： 头部标题隐藏
         */
        headerMode: 'float',
        /* 
         * 屏幕切换时的过渡效果
         * 
         * card： 使用 ios 或 android 默认切换动画。
         * modal： 从底部向上划入，此为 ios 常见效果，对 android 无效
         * 
         * @type {String}
         * @default 'card'
         */
        mode: 'card',
        /**
         * 使用这个属性可以覆盖或者扩展堆栈中单个屏幕的默认样式
         * 配置来自reactnative所支持的样式
         */
        cardStyle: {
            backgroundColor: '#ffffff',
            borderColor: '#ff0000',
            borderWidth: 0
        },
        transitionConfig() {},
        /**
         * 当屏幕切换动画开始的时候执行
         */
        onTransitionStart() {
            console.log('动画开始了，干点啥吧~')
        },
        /**
         * 当屏幕切换动画结束的时候执行
         */
        onTransitionEnd() {
            console.log('动画结束了，干点啥吧~')
        },
        navigationOptions: {
            /**
             * 用作于 headerTitle 的备用标题字符串。
             * 当前套在 TabNavigator 中 将用作于 tabBarLabel 的备用标题字符串
             * 或
             * 当前套在 DrawerNavigator 中 将用作于 drawerLabel 的备用标题字符串
             */
            title: 'home',
            /**
             * 自定义 header 接受一个组件，也可是是自定义组件，你也可以传入 props 进去进行动态显示你想展示的内容
             * 
             * 本案例作影藏处理，如果你想看效果请把注释取消
             */
            // header: (
            //     <View
            //         style={{
            //             height: 90,
            //             backgroundColor: '#fff',
            //             // flex: 1,
            //             justifyContent: 'center',
            //             alignItems: 'center'
            //         }}
            //     >
            //         <Text style={{ fontSize: 18 }}>首页</Text>
            //     </View>
            // ),
            /**
             * 头部导航标题可以是字符串也可以是一个 react 组件 如果是组件使用方法如上所示不做阐述
             * 允许字体缩放
             */
            // headerTitle: (
            //     <View style={{ flex: 1, width: 200, height: 40,justifyContent: 'center',
            //     alignItems: 'center' }} allowFontScaling={true}
            //     numLines={1}>
            //         <Text
            //             style={{
            //                 overflow: 'hidden',
            //                 fontSize: 20,
            //                 width: 200
            //             }}
            //             allowFontScaling={true}
            //             numberOfLines={1}
            //         >
            //             哈哈dfasfas sd fads asd fasf asdf sadf asf af f sa asf
            //             asdf asf asf asf asf你好啊阿卡丽的风景阿卡丽就
            //         </Text>
            //     </View>
            // )
            // headerTitle: '你好你好你好啊啊啊啊  离开点击分类阿斯利康减肥哎算了大姐夫',
            /**
             * 不知道咋玩的，测试没啥效果
             */
            headerTitleAllowFontScaling: true,
            /**
             * 是否允许滑动手势来取消当前屏幕  ios 默认为 true 在 android 上默认为false
             */
            gesturesEnabled: true,
            /**
             * 手势响应距离
             */
            gestureResponseDistance: {
                //横向手势距离
                horizontal: 25
                //竖向手势距离
                // vertical: 135
            },
            /**
             * 手势方向 默认 left-to-right
             * inverted 反向
             */
            // gestureDirection: 'inverted',
            /**
             * 返回显示的文字，默认为上一级页面的名称，null为不显示
             */
            // headerBackTitle: null,
            /**
             * 如果返回显示的文字过长，则用该属性的字符串替代
             */
            headerTruncatedBackTitle: '返回',
            /**
             * header 右侧显示的元素，react 元素
             */
            headerRight: <Text>fdsa</Text>,
            headerBackTitleStyle: {
                color: '#000000'
            },
            /**
             * header 样式
             */
            headerStyle: {},
            /**
             * header 标题样式
             */
            headerTitleStyle: {
                color: '#000000'
            },
            /**
             * header 色调
             */
            headerTintColor: '#ff0000'
        },
        /**
         * 过渡配置
         * 更多玩法待研究
         */
        transitionConfig: () => ({
            // transitionSpec: {
            //     duration: 100,
            //     // easing: Easing.out(Easing.poly(4)),
            //     // timing: Animated.timing
            // },
            // screenInterpolator: sceneProps => {
            //     const { layout, position, scene } = sceneProps
            //     const { index } = scene
            //     const height = layout.initHeight
            //     const translateY = position.interpolate({
            //         inputRange: [index - 1, index, index + 1],
            //         outputRange: [height, 0, 0]
            //     })
            //     const opacity = position.interpolate({
            //         inputRange: [index - 1, index - 0.99, index],
            //         outputRange: [0, 1, 1]
            //     })
            //     return { opacity, transform: [{ translateY }] }
            // }
        }),
        initialRouteParams: {
            // 设置初始参数
            user: 'Sawyer'
        }
    }
)
