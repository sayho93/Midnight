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
    navigationBtnTitle: {
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_default,
    },
    textStyle: {
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_default,
        color: ValueConst.colors.white,
    },
})

export default GlobalStyle
