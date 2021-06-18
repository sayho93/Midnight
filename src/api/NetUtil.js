import axios from 'axios'
import Configs from '../constant/Configs'

const NetUtil = {
    login: (email, pw) => {
        return new Promise(async (resolve, reject) => {
            console.log(Configs.API_POST_LOGIN)
            let params = new URLSearchParams()
            params.append('email', email)
            params.append('pwd', pw)
            axios
                .post(Configs.API_POST_LOGIN, params)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(new Error(err))
                })
        })
    },
    getBoard: id => {
        return new Promise(async (resolve, reject) => {
            console.log(`${Configs.API_GET_BOARD}${id}`)
            axios
                .get(`${Configs.API_GET_BOARD}${id}`)
                .then(res => {
                    resolve(res.data)
                })
                .catch(err => {
                    reject(new Error(err))
                })
        })
    },
}

export default NetUtil
