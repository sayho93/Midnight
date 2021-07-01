import React, {useEffect} from 'react'
import {Text, TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native'
import GlobalStyle from 'styles/GlobalStyle'
import ValueConst from 'constants/ValueConst'
import CustomButton from '../../components/CustomButton'
import {useDispatch} from 'react-redux'
import CharacterSlice, {fetchCharacters} from 'store/slices/CharacterSlice'
import {getCharacters} from '../../store/Selector'
import {connect} from 'react-redux'

const JoinStep3Component = props => {
    const dispatch = useDispatch()
    const [status, setStatus] = React.useState([])

    useEffect(() => {
        dispatch(fetchCharacters())
    }, [dispatch])

    const onBtnToggle = value => {
        const flag = status[value] === 'checked' ? 'unchecked' : 'checked'
        console.log(value)
        setStatus({
            ...status,
            [value]: flag,
        })
    }

    const onNextPress = () => {
        props.navigation.popToTop('EntryPoint')
    }

    const render = () => {
        if (props.characters.loading) return <Text style={GlobalStyle.textStyle}> Loading ... </Text>
        else {
            let id = 1
            return [
                props.characters.info.data.map(category => {
                    let row = id++
                    console.log(id + '::::' + row)
                    return (
                        <View style={{backgroundColor: row % 2 === 1 ? ValueConst.colors.themeColor : ValueConst.colors.colorPrimary}}>
                            <Text key={category.id} style={[GlobalStyle.textStyle, styles.innerLayout]}>
                                {category.desc}
                            </Text>
                            <View style={[styles.innerLayout, styles.hashtagLayout]} key={category.desc}>
                                {category.list.map(item => {
                                    const key = item.id
                                    return (
                                        <TouchableOpacity
                                            key={key}
                                            value={key}
                                            status={status[key]}
                                            style={[
                                                styles.btn,
                                                {
                                                    backgroundColor:
                                                        status[key] === 'checked' ? ValueConst.colors.highlight : ValueConst.colors.transparent,
                                                    borderColor: status[key] === 'checked' ? ValueConst.colors.highlight : ValueConst.colors.white,
                                                },
                                            ]}
                                            onPress={() => onBtnToggle(key)}>
                                            <Text style={[styles.btnText, {color: ValueConst.colors.white}]}>{item.description}</Text>
                                        </TouchableOpacity>
                                    )
                                })}
                            </View>
                        </View>
                    )
                }),
                <View style={styles.buttonWrapper}>
                    <CustomButton title="완료" onPress={onNextPress} color={ValueConst.colors.highlight} textColor={ValueConst.colors.white} />
                </View>,
            ]
        }
    }

    return (
        <View style={GlobalStyle.background}>
            <ScrollView>
                <View style={styles.layout}>{render()}</View>
            </ScrollView>
        </View>
    )
}

const mapStateToProps = state => ({
    characters: getCharacters(state),
})

const mapDispatchToProps = dispatch => ({
    getData: info => dispatch(CharacterSlice.actions.setData()),
})

const JoinStep3 = connect(mapStateToProps, mapDispatchToProps)(JoinStep3Component)

const styles = StyleSheet.create({
    layout: {
        marginVertical: ValueConst.dimensions.list_margin,
    },
    innerLayout: {
        marginHorizontal: ValueConst.dimensions.list_margin,
    },
    hashtagLayout: {
        paddingVertical: 15,
        flexWrap: 'wrap',
        flexDirection: 'row',
    },
    btn: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 2,
        borderRadius: 25,
        margin: 2,
    },
    btnText: {
        textAlign: 'center',
        fontFamily: ValueConst.font.jalnan,
        fontSize: ValueConst.dimensions.font_size_default,
    },
    buttonWrapper: {
        marginHorizontal: ValueConst.dimensions.list_margin,
    },
})

export default JoinStep3
