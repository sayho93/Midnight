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
            return props.characters.info.data.map(category => {
                return [
                    <Text key={category.id} style={GlobalStyle.textStyle}>
                        {category.desc}
                    </Text>,
                    <View style={styles.hashtagLayout} key={category.desc}>
                        {category.list.map(item => {
                            const key = item.id
                            return (
                                <TouchableOpacity
                                    key={key}
                                    value={key}
                                    status={status[key]}
                                    style={[
                                        styles.btn,
                                        {backgroundColor: status[key] === 'checked' ? ValueConst.colors.highlight : ValueConst.colors.white},
                                    ]}
                                    onPress={() => onBtnToggle(key)}>
                                    <Text
                                        style={[
                                            styles.btnText,
                                            {color: status[key] === 'checked' ? ValueConst.colors.white : ValueConst.colors.highlight},
                                        ]}>
                                        {item.description}
                                    </Text>
                                </TouchableOpacity>
                            )
                        })}
                    </View>,
                ]
            })
        }
    }

    return (
        <View style={GlobalStyle.background}>
            <ScrollView>
                <View style={styles.layout}>
                    {render()}
                    <CustomButton title="완료" onPress={onNextPress} color={ValueConst.colors.highlight} textColor={ValueConst.colors.white} />
                </View>
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
        margin: ValueConst.dimensions.list_margin,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    hashtagLayout: {
        padding: 20,
        // alignItems: 'center',
        alignItems: 'baseline',
        // justifyContent: 'flex-start',
        flexDirection: 'row',
    },
    btn: {
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
})

export default JoinStep3
