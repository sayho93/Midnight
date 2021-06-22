import {StyleSheet} from 'react-native'
// import ValueConst from '../constants/ValueConst'
import ValueConst from 'constants/ValueConst'

const GlobalStyle = StyleSheet.create({
    background: {
        backgroundColor: ValueConst.colors.themeColor,
        height: '100%',
    },
    navigationHeader: {
        backgroundColor: ValueConst.colors.themeColor,
    },
    navigationHeaderTitle: {
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_strong,
    },
})

export default GlobalStyle
