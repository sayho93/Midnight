import AsyncStorage from '@react-native-async-storage/async-storage'

class Utils {
    getAsyncStorageData = (key = 'user') => {
        return new Promise(async (resolve, reject) => {
            await AsyncStorage.getItem(key)
                .then(res => {
                    resolve(JSON.parse(res))
                })
                .catch(e => {
                    console.log(e)
                    reject(e)
                })
        })
    }
}

export default new Utils()
