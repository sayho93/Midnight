import React from 'react'
import {View, TouchableOpacity, Image, StyleSheet} from 'react-native'
import Animated from 'react-native-reanimated'
import menuHome from 'img/menu_home_s.png'
import menuMarket from 'img/menu_market.png'
import menuRecc from 'img/menu_chat_s.png'
import menuChat from 'img/menu_log_s.png'
import menuMap from 'img/menu_map.png'
import ValueConst from 'constants/ValueConst'

function MyTabBar({state, descriptors, navigation, position}) {
    return (
        <View style={{flexDirection: 'row'}}>
            {state.routes.map((route, index) => {
                const {options} = descriptors[route.key]
                const label = options.tabBarLabel !== undefined ? options.tabBarLabel : options.title !== undefined ? options.title : route.name
                const isFocused = state.index === index
                let tempIcon
                switch (index) {
                    case 0:
                        tempIcon = menuHome
                        break
                    case 1:
                        tempIcon = menuMarket
                        break
                    case 2:
                        tempIcon = menuRecc
                        break
                    case 3:
                        tempIcon = menuChat
                        break
                    case 4:
                        tempIcon = menuMap
                        break
                }

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    })

                    if (!isFocused && !event.defaultPrevented) navigation.navigate(route.name)
                }

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    })
                }

                const inputRange = state.routes.map((_, i) => i)
                // const opacity = Animated.interpolate(position, {
                //     inputRange,
                //     outputRange: inputRange.map(i => (i === index ? 1 : 0)),
                // })

                return (
                    <TouchableOpacity
                        accessibilityRole="button"
                        accessibilityState={isFocused ? {selected: true} : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        style={[styles.area, {backgroundColor: isFocused ? ValueConst.colors.colorPrimary : ValueConst.colors.themeColor}]}
                        key={route.key}>
                        <Image source={tempIcon} style={[styles.ImageIconStyle]} accessibilityLabel={label} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}

const styles = StyleSheet.create({
    area: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    ImageIconStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
    },
})

export default MyTabBar
