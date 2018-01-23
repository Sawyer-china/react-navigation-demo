import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput,
    Icon,
    Image
} from 'react-native'
import { StackNavigator, TabNavigator, DrawerNavigator } from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

class RecentChatsScreen extends Component {
    static navigationOptions = ({ navigation, screenProps }) => ({})
    render() {
        const { navigate } = this.props.navigation
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}>Home Screen</Text>
                <Button
                    onPress={() => {
                        navigate('EditInfo', { user: 'Lucys' })
                    }}
                    title="Chat with Lucys"
                />
            </View>
        )
    }
}

class AllContactsScreen extends Component {
    render() {
        const { navigate } = this.props.navigation
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}> AllPage </Text>
                <Button
                    onPress={() => {
                        navigate('Chat', { user: 'Sawyefsadfafr' })
                    }}
                    title="Chat with Sawyefsadfafr"
                />
            </View>
        )
    }
}

class ChatScreen extends React.Component {
    static navigationOptions = ({ navigation }) => {
        const { state: { params }, setParams, navigate } = navigation
        const isInfo = params.mode === 'info'
        const { user } = params
        return {
            title: `Chat with ${user}`,
            headerRight: (
                <Button
                    title={isInfo ? 'Done' : `${user}'s info`}
                    onPress={() => {
                        setParams({ mode: isInfo ? 'none' : 'info' })
                    }}
                />
            )
        }
    }
    render() {
        const { params } = this.props.navigation.state
        return (
            <View
                style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <Text style={{ fontSize: 30 }}>
                    Chat with {params.user}
                </Text>
            </View>
        )
    }
}

class ActivityIndicator extends Component {
    render() {
        return (
            <Button
                style={{
                    color: '#ff0000'
                }}
                title="Test"
                onPress={() => {}}
            />
        )
    }
}

class EditInfoScreen extends Component {
    constructor(props) {
        super()
        const { params } = props.navigation.state
        this.state = {
            nickname: `${params.user}`
        }
    }
    static navigationOptions = ({ navigation }) => {
        const { params = {} } = navigation.state
        let headerRight = (
            <Button
                title="Save"
                onPress={params.handleSave ? params.handleSave : () => null}
            />
        )
        if (params.isSaving) {
            headerRight = <ActivityIndicator />
        }
        return { title: `Home With ${params.user}`, headerRight }
    }

    _handleSave = () => {
        // Update state, show ActivityIndicator
        this.props.navigation.setParams({ isSaving: true })
        // this.setState((prevState, props) => ({
        //     nickname: prevState.nickname + '123'
        // }))
        // Fictional function to save information in a store somewhere
        // saveInfo().then(() => {
        //     this.props.navigation.setParams({ isSaving: false })
        // })
    }

    componentDidMount() {
        // We can only set the function after the component has been initialized
        this.props.navigation.setParams({ handleSave: this._handleSave })
    }

    render() {
        return (
            <TextInput
                onChangeText={nickname => this.setState({ nickname })}
                placeholder={'Nickname'}
                value={this.state.nickname}
            />
        )
    }
}

const MainScreenNavigator = TabNavigator(
    {
        Recent: {
            screen: RecentChatsScreen, // 屏幕显示组件
            navigationOptions: {
                headerTitle: 'Home Screen', //头部标题
                headerTruncatedBackTitle: '返回', // 当标题超出显示范围，显示的文字
                headerStyle: {
                    // 头部标题样式
                    backgroundColor: '#ff0000' // 头部背景色
                },
                tabBarVisible: true, // 是否显示导航
                tabBarLabel: '首页', // 导航名称，建议使用该配置
                tabBarIcon: ({ tintColor, focused }) => {
                    // tabBar 图标设置，tintColor ，传入的按下后的颜色，focused 当前是否选中
                    console.log(tintColor, focused)
                    return focused
                        ? <Text
                              style={{
                                  width: 20,
                                  height: 20,
                                  color: tintColor
                              }}
                          >
                              AA
                          </Text>
                        : <Image
                              source={{
                                  uri:
                                      'https://himg.bdimg.com/sys/portrait/item/d94ce69184e5bdb1e5b888e894a1e5bbb7e59bbd475e.jpg'
                              }}
                              style={{ width: 20, height: 20 }}
                          />
                },
                tabBarOnPress: ({ jumpToIndex, scene }) => {
                    // 点击底部tab的回调函数，jumpToIndex
                    console.log(scene)
                    // 点击导航时的事件
                    jumpToIndex(scene.index)
                },
                headerTitleStyle: {
                    // 头部导航文字的样式
                    color: '#ffffff'
                }
                // headerBackTitle: null // 设置为null 则不显示返回按钮
            }
        },
        All: {
            screen: AllContactsScreen,
            navigationOptions: {
                headerTitle: 'All Page',
                tabBarLabel: '店铺街',
                headerTruncatedBackTitle: '返回'
            }
        },
        All1: {
            screen: AllContactsScreen,
            navigationOptions: {
                headerTitle: 'All Page',
                tabBarLabel: '购物车',
                headerTruncatedBackTitle: '返回'
            }
        },
        All2: {
            screen: AllContactsScreen,
            navigationOptions: {
                tabBarLabel: '个人中心',
                headerTitle: 'All Page',
                headerTruncatedBackTitle: '返回'
            }
        }
    },
    {
        lazy: true,
        initialRouteName: 'Recent', // 默认加载哪一个组件
        tabBarOptions: {
            // tab 底部导航按钮的样式配置信息
            activeTintColor: '#ff0000', // 按下后的颜色
            activeBackgroundColor: 'white', // 按下后的背景颜色
            inactiveBackgroundColor: '#fefefe', // 默认的背景颜色
            inactiveTintColor: '#aaa', // 默认的文字颜色
            animationEnabled: false,
            allowFontScaling: false,
            style: {
                // 样式，支持所以react-native 的样式
                shadowColor: '#000000',
                borderTopColor: '#fefefe',
                borderTopWidth: 1,
                shadowOffset: {
                    // 阴影便宜
                    width: 1,
                    height: 1
                },
                shadowRadius: 4, // 设置半径模糊度
                shadowOpacity: 0.2 // 设置阴影背景透明
            },
            labelStyle: {
                // label 文字的配置信息
                fontSize: 12, // 字体大小
                fontWeight: 'bold' // 字体加粗
            }
        }
    }
)

class NavigatorWrappingScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 20 }}>公共组件</Text>
                <MainScreenNavigator navigation={this.props.navigation} />
            </View>
        )
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router

const StackOptions = ({ navigation }) => {
    console.log(navigation)
    let { state, goBack } = navigation

    // 用来判断是否隐藏或显示header
    const visible = state.params.isVisible
    let header
    if (visible === true) {
        header = null
    }
    const headerStyle = { backgroundColor: '#4ECBFC' }
    const headerTitleStyle = {
        fontSize: 20,
        color: 'white',
        fontWeight: '500'
    }
    const headerBackTitle = false
    const headerLeft = (
        <Button
            isCustom={true}
            customView={<Text> 1 </Text>}
            title="df"
            onPress={() => {
                goBack()
            }}
        />
    )
    return {
        headerLeft
    }
}

const RootNavigator = StackNavigator(
    {
        Home: {
            screen: NavigatorWrappingScreen,
            navigationOptions: {
                // headerTruncatedBackTitle: '返回'
                // header: null, // 为null 则不限是头部
                // headerTitle: 'homepage'// 头部配置文字
                // headerBackTitle: null
                headerBackTitleStyle: {
                    // 头部返回文字的配置信息
                    color: '#000000'
                }
            }
        },
        Chat: {
            screen: ChatScreen,
            navigationOptions: ({ navigation }) => StackOptions({ navigation })
        },
        EditInfo: {
            screen: EditInfoScreen,
            navigationOptions: {
                headerBackTitleStyle: {
                    // color: '#000000',
                },
                headerTintColor: '#000000', // 头部返回整体配置的颜色
                gesturesEnabled: true,
                gestureResponseDistance: {
                    horizontal: 300
                }
            }
        }
    },
    {
        headerMode: 'screen',
        mode: 'modal', // 路由切换以什么样的方式划入
        initialRouteName: 'Home'
    }
)

export default RootNavigator
